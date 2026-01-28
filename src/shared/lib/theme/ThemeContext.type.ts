export enum Theme{
  LIGHT = 'light-theme',
  DARK = 'dark-theme',
  MEDIUM = 'medium-theme'
}


export interface ThemeContextProps{
  theme?: Theme,
  setTheme?:(theme:Theme)=>void
  }
