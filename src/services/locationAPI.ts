import { City, State } from '../@types/styled'

export async function fetchLocation() {
  try {
    const url = await fetch(
      'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
    )
    const data: State[] = await url.json()
    const sortedUFs = data.sort((a, b) => (a.sigla > b.sigla ? 1 : -1))
    return sortedUFs
  } catch (error) {
    console.log(error)
  }
}

export async function fetchCities(selectedUF: string) {
  try {
    const url = await fetch(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUF}/distritos`,
    )
    const data: City[] = await url.json()
    const sortedData = data.sort((a, b) => (a.nome > b.nome ? 1 : -1))
    return sortedData
  } catch (error) {
    console.log(error)
  }
}
