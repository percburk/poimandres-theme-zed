export type Theme = typeof base
export interface ThemeArg {
  theme: Theme
  themeName: string
}

export const base = {
  colors: {
    brightYellow: '#fffac2',
    brightMint: '#5DE4c7',
    lowerMint: '#5fb3a1',
    blueishGreen: '#42675A',

    lowerBlue: '#89ddff',
    lightBlue: '#ADD7FF',
    desaturatedBlue: '#91B4D5',
    bluishGrayBrighter: '#7390AA',

    hotRed: '#d0679d',
    pink: '#f087bd',
    gray: '#a6accd',

    darkerGray: '#767c9d',
    bluishGray: '#506477',
    focus: '#303340',
    bg: '#1b1e28',

    offWhite: '#e4f0fb',
    selection: '#717cb425',

    white: '#ffffff',
    black: '#000000',
    transparent: '#00000000',
  },
  styles: {
    fontStyle: 'italic',
  },
}

export const noitalics = {
  ...base,
  styles: { ...base.styles, fontStyle: 'normal' },
}

export const storm = {
  ...base,
  colors: {
    ...base.colors,
    darkerGray: '#868cad',
    bluishGray: '#607487',
    focus: '#404350',
    bg: '#252b37',
    selection: '#818cc425',
    black: '#101010',
  },
}

export const stormNoitalics = {
  ...base,
  colors: { ...base.colors, ...storm.colors },
  styles: { ...base.styles, fontStyle: 'normal' },
}

export function createSvg({ colors }: Theme) {
  const circle = (color: string, i: number) => `
    <circle
      r="4"
      cy="${Math.ceil((i + 1) / 4) * 10}"
      cx="${((i % 4) + 1) * 10}"
      fill="${color}"
    />
  `

  return `
    <svg
      width="200"
      height="250"
      viewBox="0 0 50 ${Math.ceil(Object.keys(colors).length / 4) * 12}"
      xmlns="http://www.w3.org/2000/svg"
    >
      ${Object.values(colors).map(circle).join('')}
    </svg>
  `
}

function createTheme({ colors, styles }: Theme, themeName: string) {
  return {
    name: themeName,
    appearance: 'dark',
    style: {
      border: `${colors.white}10`,
      'border.variant': `${colors.white}10`,
      'border.focused': `${colors.white}10`,
      'border.selected': `${colors.white}10`,
      'border.transparent': `${colors.white}10`,
      'border.disabled': `${colors.white}10`,
      'elevated_surface.background': colors.bg,
      'surface.background': colors.bg,
      background: colors.bg,
      'element.background': colors.focus,
      'element.hover': `${colors.focus}80`,
      'element.active': null,
      'element.selected': `${colors.focus}80`,
      'element.disabled': null,
      'drop_target.background': `${colors.bluishGrayBrighter}80`,
      'ghost_element.background': null,
      'ghost_element.hover': `${colors.focus}80`,
      'ghost_element.active': null,
      'ghost_element.selected': `${colors.focus}80`,
      'ghost_element.disabled': null,
      text: colors.gray,
      'text.muted': colors.darkerGray,
      'text.placeholder': `${colors.darkerGray}90`,
      'text.disabled': `${colors.darkerGray}80`,
      'text.accent': colors.offWhite,
      icon: colors.gray,
      'icon.muted': colors.darkerGray,
      'icon.disabled': null,
      'icon.placeholder': null,
      'icon.accent': null,
      'status_bar.background': colors.bg,
      'title_bar.background': colors.bg,
      'toolbar.background': `${colors.black}00`,
      'tab_bar.background': colors.bg,
      'tab.inactive_background': colors.bg,
      'tab.active_background': `${colors.focus}80`,
      'search.match_background': null,
      'panel.background': colors.bg,
      'panel.focused_border': null,
      'pane.focused_border': null,
      'scrollbar.thumb.background': `${colors.black}80`,
      'scrollbar.thumb.hover_background': `${colors.gray}25`,
      'scrollbar.thumb.border': `${colors.black}80`,
      'scrollbar.track.background': colors.bg,
      'scrollbar.track.border': `${colors.black}00`,
      'editor.foreground': colors.offWhite,
      'editor.background': colors.bg,
      'editor.gutter.background': colors.bg,
      'editor.subheader.background': null,
      'editor.active_line.background': '#282b3a',
      'editor.highlighted_line.background': colors.selection,
      'editor.line_number': `${colors.darkerGray}50`,
      'editor.active_line_number': '#969cbd',
      'editor.invisible': null,
      'editor.wrap_guide': `${colors.black}30`,
      'editor.active_wrap_guide': `${colors.black}30`,
      'editor.document_highlight.read_background': null,
      'editor.document_highlight.write_background': null,
      'terminal.background': colors.bg,
      'terminal.foreground': colors.gray,
      'terminal.bright_foreground': null,
      'terminal.dim_foreground': null,
      'terminal.ansi.black': colors.bg,
      'terminal.ansi.bright_black': colors.gray,
      'terminal.ansi.dim_black': null,
      'terminal.ansi.red': colors.hotRed,
      'terminal.ansi.bright_red': colors.hotRed,
      'terminal.ansi.dim_red': null,
      'terminal.ansi.green': colors.brightMint,
      'terminal.ansi.bright_green': colors.brightMint,
      'terminal.ansi.dim_green': null,
      'terminal.ansi.yellow': colors.brightYellow,
      'terminal.ansi.bright_yellow': colors.brightYellow,
      'terminal.ansi.dim_yellow': null,
      'terminal.ansi.blue': colors.lowerBlue,
      'terminal.ansi.bright_blue': colors.lightBlue,
      'terminal.ansi.dim_blue': null,
      'terminal.ansi.magenta': colors.pink,
      'terminal.ansi.bright_magenta': colors.pink,
      'terminal.ansi.dim_magenta': null,
      'terminal.ansi.cyan': colors.lowerBlue,
      'terminal.ansi.bright_cyan': colors.lightBlue,
      'terminal.ansi.dim_cyan': null,
      'terminal.ansi.white': colors.white,
      'terminal.ansi.bright_white': colors.white,
      'terminal.ansi.dim_white': null,
      'link_text.hover': colors.lightBlue,
      conflict: colors.hotRed,
      'conflict.background': colors.bg,
      'conflict.border': `${colors.white}10`,
      created: colors.lowerMint,
      'created.background': colors.bg,
      'created.border': `${colors.white}10`,
      deleted: colors.hotRed,
      'deleted.background': colors.bg,
      'deleted.border': `${colors.white}10`,
      error: colors.hotRed,
      'error.background': colors.bg,
      'error.border': `${colors.white}10`,
      hidden: colors.darkerGray,
      'hidden.background': colors.bg,
      'hidden.border': `${colors.white}10`,
      hint: '#969696ff',
      'hint.background': colors.bg,
      'hint.border': `${colors.white}10`,
      ignored: `${colors.darkerGray}70`,
      'ignored.background': colors.bg,
      'ignored.border': `${colors.white}10`,
      info: colors.lightBlue,
      'info.background': colors.bg,
      'info.border': `${colors.white}10`,
      modified: colors.lightBlue,
      'modified.background': colors.bg,
      'modified.border': `${colors.white}10`,
      predictive: null,
      'predictive.background': colors.bg,
      'predictive.border': `${colors.white}10`,
      renamed: null,
      'renamed.background': colors.bg,
      'renamed.border': `${colors.white}10`,
      success: null,
      'success.background': colors.bg,
      'success.border': `${colors.white}10`,
      unreachable: null,
      'unreachable.background': colors.bg,
      'unreachable.border': `${colors.white}10`,
      warning: colors.brightYellow,
      'warning.background': colors.bg,
      'warning.border': `${colors.white}10`,
      players: [],
      syntax: {
        attribute: {
          color: colors.desaturatedBlue,
          font_style: styles.fontStyle,
          font_weight: null,
        },
        boolean: {
          color: colors.hotRed,
          font_style: null,
          font_weight: null,
        },
        comment: {
          color: '#5b5f77',
          font_style: styles.fontStyle,
          font_weight: null,
        },
        'comment.doc': {
          color: '#5b5f77',
          font_style: styles.fontStyle,
          font_weight: null,
        },
        constant: {
          color: colors.offWhite,
          font_style: null,
          font_weight: null,
        },
        constructor: {
          color: colors.brightMint,
          font_style: null,
          font_weight: null,
        },
        emphasis: {
          color: colors.bluishGrayBrighter,
          font_style: styles.fontStyle,
          font_weight: null,
        },
        'emphasis.strong': {
          color: colors.bluishGrayBrighter,
          font_style: null,
          font_weight: 700,
        },
        keyword: {
          color: colors.desaturatedBlue,
          font_style: null,
          font_weight: null,
        },
        label: {
          color: colors.desaturatedBlue,
          font_style: null,
          font_weight: null,
        },
        link_text: {
          color: colors.brightMint,
          font_style: null,
          font_weight: null,
        },
        link_uri: {
          color: colors.brightMint,
          font_style: null,
          font_weight: null,
        },
        number: {
          color: colors.brightMint,
          font_style: null,
          font_weight: null,
        },
        operator: {
          color: colors.desaturatedBlue,
          font_style: null,
          font_weight: null,
        },
        punctuation: {
          color: colors.gray,
          font_style: null,
          font_weight: null,
        },
        'punctuation.bracket': {
          color: colors.gray,
          font_style: null,
          font_weight: null,
        },
        'punctuation.delimiter': {
          color: colors.gray,
          font_style: null,
          font_weight: null,
        },
        'punctuation.list_marker': {
          color: colors.gray,
          font_style: null,
          font_weight: null,
        },
        'punctuation.special': {
          color: colors.gray,
          font_style: null,
          font_weight: null,
        },
        string: {
          color: colors.brightMint,
          font_style: null,
          font_weight: null,
        },
        'string.escape': {
          color: colors.brightMint,
          font_style: null,
          font_weight: null,
        },
        'string.regex': {
          color: colors.brightMint,
          font_style: null,
          font_weight: null,
        },
        'string.special': {
          color: colors.brightMint,
          font_style: null,
          font_weight: null,
        },
        'string.special.symbol': {
          color: colors.brightMint,
          font_style: null,
          font_weight: null,
        },
        tag: {
          color: colors.brightMint,
          font_style: null,
          font_weight: null,
        },
        'text.literal': {
          color: colors.brightMint,
          font_style: null,
          font_weight: null,
        },
        title: {
          color: colors.desaturatedBlue,
          font_style: null,
          font_weight: null,
        },
        type: {
          color: colors.lightBlue,
          font_style: null,
          font_weight: null,
        },
        variable: {
          color: colors.offWhite,
          font_style: null,
          font_weight: null,
        },
        'variable.special': {
          color: colors.offWhite,
          font_style: styles.fontStyle,
          font_weight: null,
        },
        function: {
          color: '#c2cad4',
          font_style: null,
          font_weight: null,
        },
        'function.method': {
          color: '#c2cad4',
          font_style: null,
          font_weight: null,
        },
        'function.special.definition': {
          color: '#c2cad4',
          font_style: null,
          font_weight: null,
        },
        property: {
          color: colors.offWhite,
          font_style: null,
          font_weight: null,
        },
        'editor.foreground': {
          color: null,
          font_style: null,
          font_weight: null,
        },
        primary: {
          color: null,
          font_style: null,
          font_weight: null,
        },
      },
      'background.appearance': 'opaque',
    },
  }
}

export function createSchema(...themeArgs: ThemeArg[]) {
  const themes = themeArgs.map(({ theme, themeName }) => createTheme(theme, themeName))

  return {
    $schema: 'https://zed.dev/schema/themes/v0.1.0.json',
    name: 'poimandres-zed',
    author: 'percburk',
    themes,
  }
}
