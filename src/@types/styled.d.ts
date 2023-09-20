import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export type DefaultTheme = ThemeType
}

export interface State {
  id: number
  nome: string
  sigla: string
  regiao: {
    id: number
    nome: string
    sigla: string
  }
}

export interface UF {
  id: number
  sigla: string
  nome: string
  regiao?: UF
}

export interface Mesorregiao {
  id: number
  nome: string
  UF: UF
}

export interface RegiaoImediata {
  id: number
  nome: string
  'regiao-intermediaria': Mesorregiao
}

export interface Microrregiao {
  id: number
  nome: string
  mesorregiao: Mesorregiao
}

export interface Municipio {
  id: number
  nome: string
  microrregiao: Microrregiao
  'regiao-imediata': RegiaoImediata
}

export interface City {
  id: number
  nome: string
  municipio: Municipio
}
