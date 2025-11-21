import fs from 'node:fs'
import os from 'node:os'
import chokidar from 'chokidar'
import sharp from 'sharp'

let reloadCount = 0
const ARROW = '\x1b[32m→\x1b[0m'

const args = process.argv.slice(2)

async function generateTheme() {
  const { base, noitalics, storm, stormNoitalics, createSchema, createSvg } =
    await import(`./theme.ts?v=${reloadCount}`)
  reloadCount++

  const schema = createSchema(
    {
      theme: base,
      themeName: 'poimandres zed',
    },
    {
      theme: storm,
      themeName: 'poimandres zed storm',
    },
    {
      theme: noitalics,
      themeName: 'poimandres zed noitalics',
    },
    {
      theme: stormNoitalics,
      themeName: 'poimandres zed noitalics storm',
    }
  )

  const json = JSON.stringify(schema, null, 2)
  fs.writeFileSync('themes/poimandres-zed.json', json)

  if (args.includes('--zed')) {
    console.log(`${ARROW} writing theme to Zed config`)
    fs.writeFileSync(`${os.homedir()}/.config/zed/themes/poimandres-zed.json`, json)
  }

  delete base.colors.black
  delete base.colors.transparent
  sharp(Buffer.from(createSvg(base).trim()), { density: 400 })
    .png()
    .toFile('assets/dots.png')
    .catch((err) => console.log(err))

  console.log(`${ARROW} assets generated`)
}

const watcher = chokidar.watch('src/theme.ts')

watcher
  .on('add', (path) => {
    console.log(`${ARROW} watching ${path}`)
  })
  .on('change', (path) => {
    console.log(`${ARROW} ${path} changed, regenerating assets...`)
    generateTheme()
  })

generateTheme()
