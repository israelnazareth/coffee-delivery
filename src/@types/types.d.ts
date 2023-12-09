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

export interface ResultsProps {
  long_name: string | undefined
  short_name: string | undefined
  types: string[]
  formatted_address: string
}
