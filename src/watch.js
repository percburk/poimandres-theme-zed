import fs from 'node:fs'
import sharp from 'sharp'
import chokidar from 'chokidar'

let reloadCount = 0
const ARROW = '\x1b[32m→\x1b[0m'

async function generateTheme() {
  const { base, noitalics, storm, stormNoitalics, createSchema, createSvg } =
    await import(`./theme.js?v=${reloadCount}`)
  reloadCount++
  fs.writeFile(
    'themes/poimandres-color-theme.json',
    createSchema(base, 'poimandres'),
    (err) => err && console.log(err)
  )
  fs.writeFile(
    'themes/poimandres-color-theme-storm.json',
    createSchema(storm, 'poimandres-storm'),
    (err) => err && console.log(err)
  )
  fs.writeFile(
    'themes/poimandres-color-theme-noitalics.json',
    createSchema(noitalics, 'poimandres-noitalics'),
    (err) => err && console.log(err)
  )
  fs.writeFile(
    'themes/poimandres-color-theme-noitalics-storm.json',
    createSchema(stormNoitalics, 'poimandres-noitalics-storm'),
    (err) => err && console.log(err)
  )

  delete base.colors.black
  delete base.colors.transparent
  sharp(Buffer.from(createSvg(base).trim()), { density: 400 })
    .png()
    .toFile('assets/dots.png')
    .catch((err) => console.log(err))

  console.log(`${ARROW} Assets generated`)
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
