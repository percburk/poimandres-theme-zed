import fs from 'node:fs'
import os from 'node:os'
import chokidar from 'chokidar'
import sharp from 'sharp'

let reloadCount = 0
const ARROW = '\x1b[32m→\x1b[0m'
const ZED_THEMES_DIR = `${os.homedir()}/.config/zed/themes`

const args = process.argv.slice(2)

async function generateTheme() {
  const { base, noitalics, createSchema, createSvg } =
    await import(`./theme.ts?v=${reloadCount}`)
  reloadCount++

  const schema = createSchema(
    {
      theme: base,
      themeName:  'honeycrisp IIe',
    },
    {
      theme: noitalics,
      themeName: 'honeycrisp IIe noitalics',
    },
  )

  const json = JSON.stringify(schema, null, 2)
  fs.writeFileSync('themes/honeycrisp-IIe.json', json)

  if (args.includes('--zed')) {
    if (!fs.existsSync(ZED_THEMES_DIR)) {
      console.log(`${ARROW} creating Zed themes directory`)
      fs.mkdirSync(ZED_THEMES_DIR, { recursive: true })
    }

    console.log(`${ARROW} writing to Zed themes`)
    fs.writeFileSync(`${ZED_THEMES_DIR}/honeycrisp-IIe.json`, json)
  }

  delete base.colors.black
  delete base.colors.transparent
  sharp(Buffer.from(createSvg(base).trim()), { density: 400 })
    .png()
    .toFile('assets/honeycrisp-IIe-dots.png')
    .catch((err) => console.log(err))

  console.log(`${ARROW} assets generated`)
}

const watcher = chokidar.watch('src/honeycrisp-IIe/theme.ts')

watcher
  .on('add', (path) => {
    console.log(`${ARROW} watching ${path}`)
  })
  .on('change', (path) => {
    console.log(`${ARROW} ${path} changed, regenerating assets...`)
    generateTheme()
  })

generateTheme()
