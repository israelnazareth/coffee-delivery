import { City, State } from '../@types/styled'

export async function fetchStates() {
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
    const sortedCities = data.sort((a, b) => (a.nome > b.nome ? 1 : -1))
    return sortedCities
  } catch (error) {
    console.log(error)
  }
}

export async function fetchLocation(position: GeolocationPosition) {
  try {
    const { coords } = position
    const { latitude, longitude } = coords
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=
      ${latitude},${longitude}&key=${import.meta.env.VITE_API_KEY}`,
    )
    const data = await response.json()
    if (data.error_message) throw new Error(data.error_message)

    const { results } = data
    const { address_components } = results[0]
    const { short_name, long_name } = address_components[3]
    return { uf: short_name, city: long_name }
  } catch (error) {
    console.error(error)
  }
}
