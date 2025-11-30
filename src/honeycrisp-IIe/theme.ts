export type Theme = typeof base
export interface ThemeArg {
  theme: Theme
  themeName: string
}

export const base = {
  colors: {
    background: '#1b1816',
    backgroundElement: '#2a251b',
    backgroundHover: '#47413d',
    backgroundSelected: '#322c27',
    backgroundDragggingOver: '#e8834f66',
    backgroundActiveLine: '#2a251b',
    border: '#413b36',
    textExtraLight: '#fffaf0',
    textLight: '#d9c9b8',
    textMedium: '#8a7f73',
    textDark: '#6e665c',
    textExtraDark: '#534c45',
    red: '#a35c5c',
    green: '#7dad7d',
    yellow: '#d9a962',
    blue: '#8db4d6',
    cyan: '#8db4d6',
    magenta: '#d68fd6',
    white: '#f0e6d8',
    black: '#0d0b09',
    transparent: '#00000000',
    syntaxString: '#fffaf0',
    syntaxNumber: '#d68fd6',
    syntaxBoolean: '#d68fd6',
    syntaxConstant: '#9ac9ce',
    syntaxVariable: '#e8d4bc',
    syntaxFunction: '#8fbc8f',
    syntaxTag: '#8fbc8f',
    syntaxKeyword: '#e8834f',
    syntaxAttribute: '#b6a491',
    syntaxComment: '#6b6356',
    syntaxPunctuation: '#a0a0a0',
  },
  styles: {
    fontStyle: 'italic',
  },
}

export const noitalics = {
  ...base,
  styles: { ...base.styles, fontStyle: 'normal' },
}

export const tang = {
  ...base,
  colors: {
    ...base.colors,
    syntaxFunction: '#6dd16d',
    syntaxTag: '#6dd16d',
    syntaxKeyword: '#ff9547',
    syntaxNumber: '#f070f0',
    syntaxBoolean: '#f070f0',
    syntaxConstant: '#4dd4e0',
  },
}

export const tangNoitalics = {
  ...base,
  colors: { ...tang.colors },
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
      ${[...new Set(Object.values(colors))].map(circle).join('')}
    </svg>
  `
}

function createTheme({ colors, styles }: Theme, themeName: string) {
  return {
    name: themeName,
    appearance: 'dark',
    style: {
      border: colors.border,
      'border.variant': colors.border,
      'border.focused': colors.border,
      'border.selected': colors.border,
      'border.transparent': colors.transparent,
      'border.disabled': colors.border,
      'elevated_surface.background': colors.background,
      'surface.background': colors.background,
      background: colors.background,
      'element.background': colors.backgroundElement,
      'element.hover': colors.backgroundSelected,
      'element.active': colors.backgroundSelected,
      'element.selected': colors.backgroundSelected,
      'element.disabled': colors.textExtraDark,
      'drop_target.background': colors.backgroundDragggingOver,
      'ghost_element.background': colors.background,
      'ghost_element.hover': colors.backgroundHover,
      'ghost_element.active': colors.backgroundSelected,
      'ghost_element.selected': colors.backgroundSelected,
      'ghost_element.disabled': colors.textExtraDark,
      text: colors.textLight,
      'text.muted': colors.textMedium,
      'text.placeholder': colors.textDark,
      'text.disabled': colors.textExtraDark,
      'text.accent': colors.textExtraLight,
      icon: colors.textLight,
      'icon.muted': colors.textMedium,
      'icon.disabled': colors.textExtraDark,
      'icon.placeholder': colors.textDark,
      'icon.accent': colors.textExtraLight,
      'status_bar.background': colors.background,
      'title_bar.background': colors.background,
      'toolbar.background': colors.background,
      'tab_bar.background': colors.background,
      'tab.inactive_background': colors.background,
      'tab.active_background': colors.backgroundSelected,
      'search.match_background': colors.backgroundDragggingOver,
      'panel.background': colors.background,
      'panel.focused_border': colors.border,
      'pane.focused_border': colors.border,
      'scrollbar.thumb.background': colors.backgroundSelected,
      'scrollbar.thumb.hover_background': colors.backgroundHover,
      'scrollbar.thumb.border': colors.border,
      'scrollbar.track.background': colors.background,
      'scrollbar.track.border': colors.border,
      'editor.foreground': colors.textLight,
      'editor.background': colors.background,
      'editor.gutter.background': colors.background,
      'editor.subheader.background': colors.textMedium,
      'editor.active_line.background': colors.backgroundActiveLine,
      'editor.highlighted_line.background': colors.backgroundActiveLine,
      'editor.line_number': colors.textMedium,
      'editor.active_line_number': colors.textExtraLight,
      'editor.invisible': colors.textDark,
      'editor.wrap_guide': colors.border,
      'editor.active_wrap_guide': colors.border,
      'editor.document_highlight.read_background': colors.border,
      'editor.document_highlight.write_background': colors.border,
      'terminal.background': colors.background,
      'terminal.foreground': colors.textLight,
      'terminal.bright_foreground': colors.textExtraLight,
      'terminal.dim_foreground': colors.textMedium,
      'terminal.ansi.black': colors.black,
      'terminal.ansi.bright_black': colors.black,
      'terminal.ansi.dim_black': colors.black,
      'terminal.ansi.red': colors.red,
      'terminal.ansi.bright_red': colors.red,
      'terminal.ansi.dim_red': colors.red,
      'terminal.ansi.green': colors.green,
      'terminal.ansi.bright_green': colors.green,
      'terminal.ansi.dim_green': colors.green,
      'terminal.ansi.yellow': colors.yellow,
      'terminal.ansi.bright_yellow': colors.yellow,
      'terminal.ansi.dim_yellow': colors.yellow,
      'terminal.ansi.blue': colors.blue,
      'terminal.ansi.bright_blue': colors.blue,
      'terminal.ansi.dim_blue': colors.blue,
      'terminal.ansi.magenta': colors.magenta,
      'terminal.ansi.bright_magenta': colors.magenta,
      'terminal.ansi.dim_magenta': colors.magenta,
      'terminal.ansi.cyan': colors.cyan,
      'terminal.ansi.bright_cyan': colors.cyan,
      'terminal.ansi.dim_cyan': colors.cyan,
      'terminal.ansi.white': colors.white,
      'terminal.ansi.bright_white': colors.white,
      'terminal.ansi.dim_white': colors.white,
      'link_text.hover': colors.textExtraLight,
      conflict: colors.red,
      'conflict.background': colors.background,
      'conflict.border': colors.red,
      created: colors.green,
      'created.background': colors.background,
      'created.border': colors.green,
      deleted: colors.red,
      'deleted.background': colors.background,
      'deleted.border': colors.red,
      error: colors.red,
      'error.background': colors.background,
      'error.border': colors.red,
      hidden: colors.textDark,
      'hidden.background': colors.background,
      'hidden.border': colors.border,
      hint: colors.textMedium,
      'hint.background': colors.background,
      'hint.border': colors.border,
      ignored: colors.textExtraDark,
      'ignored.background': colors.background,
      'ignored.border': colors.border,
      info: colors.blue,
      'info.background': colors.background,
      'info.border': colors.blue,
      modified: colors.blue,
      'modified.background': colors.background,
      'modified.border': colors.blue,
      predictive: colors.textMedium,
      'predictive.background': colors.background,
      'predictive.border': colors.border,
      renamed: colors.green,
      'renamed.background': colors.background,
      'renamed.border': colors.green,
      success: colors.green,
      'success.background': colors.background,
      'success.border': colors.green,
      unreachable: colors.textDark,
      'unreachable.background': colors.background,
      'unreachable.border': colors.border,
      warning: colors.yellow,
      'warning.background': colors.background,
      'warning.border': colors.yellow,
      players: [],
      syntax: {
        attribute: {
          color: colors.syntaxAttribute,
          font_style: styles.fontStyle,
          font_weight: null,
        },
        boolean: {
          color: colors.syntaxBoolean,
          font_style: null,
          font_weight: null,
        },
        comment: {
          color: colors.syntaxComment,
          font_style: styles.fontStyle,
          font_weight: null,
        },
        'comment.doc': {
          color: colors.syntaxComment,
          font_style: styles.fontStyle,
          font_weight: null,
        },
        constant: {
          color: colors.syntaxConstant,
          font_style: null,
          font_weight: null,
        },
        constructor: {
          color: colors.syntaxFunction,
          font_style: null,
          font_weight: null,
        },
        embedded: {
          color: colors.syntaxVariable,
          font_style: null,
          font_weight: null,
        },
        emphasis: {
          color: colors.syntaxConstant,
          font_style: styles.fontStyle,
          font_weight: null,
        },
        enum: {
          color: colors.syntaxConstant,
          font_style: null,
          font_weight: null,
        },
        'emphasis.strong': {
          color: colors.textExtraLight,
          font_style: styles.fontStyle,
          font_weight: null,
        },
        keyword: {
          color: colors.syntaxKeyword,
          font_style: null,
          font_weight: null,
        },
        label: {
          color: colors.syntaxKeyword,
          font_style: null,
          font_weight: null,
        },
        link_text: {
          color: colors.syntaxKeyword,
          font_style: null,
          font_weight: null,
        },
        link_uri: {
          color: colors.syntaxKeyword,
          font_style: null,
          font_weight: null,
        },
        number: {
          color: colors.syntaxNumber,
          font_style: null,
          font_weight: null,
        },
        operator: {
          color: colors.syntaxPunctuation,
          font_style: null,
          font_weight: null,
        },
        predictive: {
          color: colors.textMedium,
          font_style: styles.fontStyle,
          font_weight: null,
        },
        preproc: {
          color: colors.syntaxKeyword,
          font_style: null,
          font_weight: null,
        },
        punctuation: {
          color: colors.syntaxPunctuation,
          font_style: null,
          font_weight: null,
        },
        'punctuation.bracket': {
          color: colors.syntaxPunctuation,
          font_style: null,
          font_weight: null,
        },
        'punctuation.delimiter': {
          color: colors.syntaxPunctuation,
          font_style: null,
          font_weight: null,
        },
        'punctuation.list_marker': {
          color: colors.syntaxPunctuation,
          font_style: null,
          font_weight: null,
        },
        'punctuation.markup': {
          color: colors.syntaxPunctuation,
          font_style: null,
          font_weight: null,
        },
        'punctuation.special': {
          color: colors.syntaxPunctuation,
          font_style: null,
          font_weight: null,
        },
        selector: {
          color: colors.syntaxVariable,
          font_style: null,
          font_weight: null,
        },
        'selector.pseudo': {
          color: colors.syntaxVariable,
          font_style: null,
          font_weight: null,
        },
        string: {
          color: colors.syntaxString,
          font_style: null,
          font_weight: null,
        },
        'string.escape': {
          color: colors.syntaxConstant,
          font_style: null,
          font_weight: null,
        },
        'string.regex': {
          color: colors.syntaxString,
          font_style: null,
          font_weight: null,
        },
        'string.special': {
          color: colors.syntaxString,
          font_style: null,
          font_weight: null,
        },
        'string.special.symbol': {
          color: colors.syntaxString,
          font_style: null,
          font_weight: null,
        },
        tag: {
          color: colors.syntaxTag,
          font_style: null,
          font_weight: null,
        },
        'text.literal': {
          color: colors.syntaxAttribute,
          font_style: null,
          font_weight: null,
        },
        title: {
          color: colors.syntaxString,
          font_style: null,
          font_weight: null,
        },
        type: {
          color: colors.syntaxConstant,
          font_style: null,
          font_weight: null,
        },
        variable: {
          color: colors.syntaxVariable,
          font_style: null,
          font_weight: null,
        },
        'variable.special': {
          color: colors.syntaxVariable,
          font_style: styles.fontStyle,
          font_weight: null,
        },
        variant: {
          color: colors.syntaxConstant,
          font_style: null,
          font_weight: null,
        },
        function: {
          color: colors.syntaxFunction,
          font_style: null,
          font_weight: null,
        },
        'function.method': {
          color: colors.syntaxFunction,
          font_style: null,
          font_weight: null,
        },
        'function.special.definition': {
          color: colors.syntaxFunction,
          font_style: null,
          font_weight: null,
        },
        property: {
          color: colors.syntaxVariable,
          font_style: null,
          font_weight: null,
        },
        'editor.foreground': {
          color: colors.textLight,
          font_style: null,
          font_weight: null,
        },
        primary: {
          color: colors.syntaxString,
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
    name: 'honeycrisp-IIe',
    author: 'percburk',
    themes,
  }
}
