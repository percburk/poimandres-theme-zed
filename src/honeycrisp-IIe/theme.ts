export type Theme = typeof base
export interface ThemeArg {
  theme: Theme
  themeName: string
}

export const base = {
  colors: {
    attribute: '#b6a491',
    activeLine: '#252118',
    background: '#181512',
    border: '#3b3631',
    variable: '#e8d4bc',
    function: '#8fbc8f',
    tag: '#8fbc8f',
    keyword: '#e8834f',
    warning: '#d9a962',
    info: '#8db4d6',
    selection: '#e8834f66',
    danger: '#a35c5c',
    success: '#7dad7d',
    comment: '#6b6356',
    string: '#fffaf0',
    number: '#d68fd6',
    boolean: '#d68fd6',
    constant: '#9ac9ce',
    punctuation: '#a0a0a0',
    text: '#d9c9b8',
    disabled: '#554d45',
    muted: '#8a7f73',
    active: '#2d2823',
    dark: '#1a1714',
    white: '#f0e6d8',
    black: '#0d0b09',
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
      border: colors.border,
      'border.variant': colors.border,
      'border.focused': colors.border,
      'border.selected': colors.border,
      'border.transparent': colors.transparent,
      'border.disabled': colors.border,
      'elevated_surface.background': colors.background,
      'surface.background': colors.background,
      background: colors.background,
      'element.background': '#252118',
      'element.hover': colors.active,
      'element.active': colors.active,
      'element.selected': colors.active,
      'element.disabled': colors.disabled,
      'drop_target.background': colors.selection,
      'ghost_element.background': colors.background,
      'ghost_element.hover': colors.active,
      'ghost_element.active': colors.active,
      'ghost_element.selected': colors.active,
      'ghost_element.disabled': colors.disabled,
      text: colors.text,
      'text.muted': colors.muted,
      'text.placeholder': colors.muted,
      'text.disabled': colors.disabled,
      'text.accent': colors.string,
      icon: colors.text,
      'icon.muted': colors.muted,
      'icon.disabled': colors.disabled,
      'icon.placeholder': colors.muted,
      'icon.accent': colors.string,
      'status_bar.background': colors.background,
      'title_bar.background': colors.background,
      'toolbar.background': colors.background,
      'tab_bar.background': colors.background,
      'tab.inactive_background': colors.background,
      'tab.active_background': colors.active,
      'search.match_background': colors.selection,
      'panel.background': colors.background,
      'panel.focused_border': colors.border,
      'pane.focused_border': colors.border,
      'scrollbar.thumb.background': colors.muted,
      'scrollbar.thumb.hover_background': colors.text,
      'scrollbar.thumb.border': colors.transparent,
      'scrollbar.track.background': colors.background,
      'scrollbar.track.border': colors.transparent,
      'editor.foreground': colors.text,
      'editor.background': colors.background,
      'editor.gutter.background': colors.background,
      'editor.subheader.background': colors.dark,
      'editor.active_line.background': colors.activeLine,
      'editor.highlighted_line.background': colors.dark,
      'editor.line_number': colors.muted,
      'editor.active_line_number': colors.string,
      'editor.invisible': colors.muted,
      'editor.wrap_guide': colors.border,
      'editor.active_wrap_guide': colors.border,
      'editor.document_highlight.read_background': colors.border,
      'editor.document_highlight.write_background': colors.border,
      'terminal.background': colors.background,
      'terminal.foreground': colors.text,
      'terminal.bright_foreground': colors.active,
      'terminal.dim_foreground': colors.muted,
      'terminal.ansi.black': colors.black,
      'terminal.ansi.bright_black': colors.muted,
      'terminal.ansi.dim_black': colors.dark,
      'terminal.ansi.red': colors.danger,
      'terminal.ansi.bright_red': colors.danger,
      'terminal.ansi.dim_red': colors.danger,
      'terminal.ansi.green': colors.success,
      'terminal.ansi.bright_green': colors.success,
      'terminal.ansi.dim_green': colors.success,
      'terminal.ansi.yellow': colors.warning,
      'terminal.ansi.bright_yellow': colors.warning,
      'terminal.ansi.dim_yellow': colors.warning,
      'terminal.ansi.blue': colors.info,
      'terminal.ansi.bright_blue': colors.info,
      'terminal.ansi.dim_blue': colors.info,
      'terminal.ansi.magenta': colors.constant,
      'terminal.ansi.bright_magenta': colors.constant,
      'terminal.ansi.dim_magenta': colors.constant,
      'terminal.ansi.cyan': colors.info,
      'terminal.ansi.bright_cyan': colors.info,
      'terminal.ansi.dim_cyan': colors.info,
      'terminal.ansi.white': colors.white,
      'terminal.ansi.bright_white': colors.white,
      'terminal.ansi.dim_white': colors.text,
      'link_text.hover': colors.info,
      conflict: colors.danger,
      'conflict.background': colors.background,
      'conflict.border': colors.danger,
      created: colors.success,
      'created.background': colors.background,
      'created.border': colors.success,
      deleted: colors.danger,
      'deleted.background': colors.background,
      'deleted.border': colors.danger,
      error: colors.danger,
      'error.background': colors.background,
      'error.border': colors.danger,
      hidden: colors.muted,
      'hidden.background': colors.background,
      'hidden.border': colors.border,
      hint: colors.muted,
      'hint.background': colors.background,
      'hint.border': colors.border,
      ignored: colors.disabled,
      'ignored.background': colors.background,
      'ignored.border': colors.border,
      info: colors.info,
      'info.background': colors.background,
      'info.border': colors.info,
      modified: colors.info,
      'modified.background': colors.background,
      'modified.border': colors.info,
      predictive: colors.muted,
      'predictive.background': colors.background,
      'predictive.border': colors.border,
      renamed: colors.success,
      'renamed.background': colors.background,
      'renamed.border': colors.success,
      success: colors.success,
      'success.background': colors.background,
      'success.border': colors.success,
      unreachable: colors.muted,
      'unreachable.background': colors.background,
      'unreachable.border': colors.border,
      warning: colors.warning,
      'warning.background': colors.background,
      'warning.border': colors.warning,
      players: [],
      syntax: {
        attribute: {
          color: colors.attribute,
          font_style: styles.fontStyle,
          font_weight: null,
        },
        boolean: {
          color: colors.boolean,
          font_style: null,
          font_weight: null,
        },
        comment: {
          color: colors.comment,
          font_style: styles.fontStyle,
          font_weight: null,
        },
        'comment.doc': {
          color: colors.comment,
          font_style: styles.fontStyle,
          font_weight: null,
        },
        constant: {
          color: colors.constant,
          font_style: null,
          font_weight: null,
        },
        constructor: {
          color: colors.function,
          font_style: null,
          font_weight: null,
        },
        embedded: {
          color: colors.text,
          font_style: null,
          font_weight: null,
        },
        emphasis: {
          color: colors.text,
          font_style: styles.fontStyle,
          font_weight: null,
        },
        enum: {
          color: colors.constant,
          font_style: null,
          font_weight: null,
        },
        'emphasis.strong': {
          color: colors.string,
          font_style: null,
          font_weight: 700,
        },
        keyword: {
          color: colors.keyword,
          font_style: null,
          font_weight: null,
        },
        label: {
          color: colors.keyword,
          font_style: null,
          font_weight: null,
        },
        link_text: {
          color: colors.info,
          font_style: null,
          font_weight: null,
        },
        link_uri: {
          color: colors.info,
          font_style: null,
          font_weight: null,
        },
        number: {
          color: colors.number,
          font_style: null,
          font_weight: null,
        },
        operator: {
          color: colors.punctuation,
          font_style: null,
          font_weight: null,
        },
        predictive: {
          color: colors.muted,
          font_style: styles.fontStyle,
          font_weight: null,
        },
        preproc: {
          color: colors.keyword,
          font_style: null,
          font_weight: null,
        },
        punctuation: {
          color: colors.punctuation,
          font_style: null,
          font_weight: null,
        },
        'punctuation.bracket': {
          color: colors.punctuation,
          font_style: null,
          font_weight: null,
        },
        'punctuation.delimiter': {
          color: colors.punctuation,
          font_style: null,
          font_weight: null,
        },
        'punctuation.list_marker': {
          color: colors.punctuation,
          font_style: null,
          font_weight: null,
        },
        'punctuation.markup': {
          color: colors.punctuation,
          font_style: null,
          font_weight: null,
        },
        'punctuation.special': {
          color: colors.punctuation,
          font_style: null,
          font_weight: null,
        },
        selector: {
          color: colors.variable,
          font_style: null,
          font_weight: null,
        },
        'selector.pseudo': {
          color: colors.variable,
          font_style: null,
          font_weight: null,
        },
        string: {
          color: colors.string,
          font_style: null,
          font_weight: null,
        },
        'string.escape': {
          color: colors.constant,
          font_style: null,
          font_weight: null,
        },
        'string.regex': {
          color: colors.string,
          font_style: null,
          font_weight: null,
        },
        'string.special': {
          color: colors.string,
          font_style: null,
          font_weight: null,
        },
        'string.special.symbol': {
          color: colors.string,
          font_style: null,
          font_weight: null,
        },
        tag: {
          color: colors.tag,
          font_style: null,
          font_weight: null,
        },
        'text.literal': {
          color: colors.string,
          font_style: null,
          font_weight: null,
        },
        title: {
          color: colors.string,
          font_style: null,
          font_weight: null,
        },
        type: {
          color: colors.constant,
          font_style: null,
          font_weight: null,
        },
        variable: {
          color: colors.variable,
          font_style: null,
          font_weight: null,
        },
        'variable.special': {
          color: colors.variable,
          font_style: styles.fontStyle,
          font_weight: null,
        },
        variant: {
          color: colors.constant,
          font_style: null,
          font_weight: null,
        },
        function: {
          color: colors.function,
          font_style: null,
          font_weight: null,
        },
        'function.method': {
          color: colors.function,
          font_style: null,
          font_weight: null,
        },
        'function.special.definition': {
          color: colors.function,
          font_style: null,
          font_weight: null,
        },
        property: {
          color: colors.variable,
          font_style: null,
          font_weight: null,
        },
        'editor.foreground': {
          color: colors.text,
          font_style: null,
          font_weight: null,
        },
        primary: {
          color: colors.string,
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
