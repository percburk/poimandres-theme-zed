import fs from 'node:fs'
import sharp from 'sharp'
import chokidar from 'chokidar'
import prettier from 'prettier'
import os from 'node:os'

let reloadCount = 0
const ARROW = '\x1b[32m→\x1b[0m'

const args = process.argv.slice(2)

async function generateTheme() {
  const { base, noitalics, storm, stormNoitalics, createSchema, createSvg } =
    await import(`./theme.js?v=${reloadCount}`)
  reloadCount++

  const schema = createSchema(
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
  )

  const formatted = await prettier.format(schema, { parser: 'json' })

  fs.writeFileSync(
    'themes/poimandres-zed.json',
    formatted,
    (err) => err && console.log(err)
  )

  if (args.includes('--sync')) {
    console.log(`${ARROW} syncing to Zed themes`)
    fs.writeFileSync(
      `${os.homedir()}/.config/zed/themes/poimandres-zed.json`,
      formatted,
      (err) => err && console.log(err)
    )
  }

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
