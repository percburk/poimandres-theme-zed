import fs from 'node:fs'
import sharp from 'sharp'
import chokidar from 'chokidar'
import prettier from 'prettier'

let reloadCount = 0
const ARROW = '\x1b[32m→\x1b[0m'

async function generateTheme() {
  const { base, noitalics, storm, stormNoitalics, createSchema, createSvg } =
    await import(`./theme.js?v=${reloadCount}`)
  reloadCount++

  fs.writeFileSync(
    'themes/poimandres-zed.json',
    createSchema(
      {
        theme: base,
        themeName: 'poimandres-zed',
      },
      {
        theme: storm,
        themeName: 'poimandres-zed-storm',
      },
      {
        theme: noitalics,
        themeName: 'poimandres-zed-noitalics',
      },
      {
        theme: stormNoitalics,
        themeName: 'poimandres-zed-noitalics-storm',
      }
    ),
    (err) => err && console.log(err)
  )

  const formatted = await prettier.format(
    fs.readFileSync('themes/poimandres-zed.json', 'utf-8'),
    { parser: 'json' }
  )
  fs.writeFileSync('themes/poimandres-zed.json', formatted)

  delete base.colors.black
  delete base.colors.transparent
  sharp(Buffer.from(createSvg(base).trim()), { density: 400 })
    .png()
    .toFile('assets/dots.png')
    .catch((err) => console.log(err))

  console.log(`${ARROW} assets generated`)
}

const watcher = chokidar.watch('./src/theme.js')

watcher
  .on('add', (path) => {
    console.log(`${ARROW} watching ${path}`)
  })
  .on('change', (path) => {
    console.log(`${ARROW} ${path} changed, regenerating assets...`)
    generateTheme()
  })

generateTheme()
