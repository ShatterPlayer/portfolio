import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      dark: string
      light: string
      green: string
      yellow: string
      blue: string
    }
  }
}
