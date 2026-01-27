export enum Theme{
  LIGHT = 'app-light-theme',
  DARK = 'app-dark-theme',
  MEDIUM = 'app-medium-theme'
}


export interface ThemeContextProps{
  theme?: Theme,
  setTheme?:(theme:Theme)=>void
  }
