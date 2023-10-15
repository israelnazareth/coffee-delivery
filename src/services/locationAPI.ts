import Swal from 'sweetalert2'
import { API } from '../apis'
import { City, ResultsProps, State } from '../@types/styled'

export async function fetchStates() {
  try {
    const url = await fetch(API.getStates())
    const data: State[] = await url.json()
    const sortedUFs = data.sort((a, b) => (a.sigla > b.sigla ? 1 : -1))
    return sortedUFs
  } catch (error) {
    console.log(error)
  }
}

export async function fetchCities(selectedUF: string) {
  try {
    const url = await fetch(API.getCities(selectedUF))
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
    const response = await fetch(API.getLocation(latitude, longitude))
    const data = await response.json()
    if (data.error_message) throw new Error(data.error_message)

    const addressData = data.results.find((result: ResultsProps) =>
      result.types.includes('administrative_area_level_2'),
    )

    const formattedAddress = addressData?.formatted_address.split(' - ')
    const city = formattedAddress?.[0]
    const uf = formattedAddress?.[1].split(',')[0]

    return { uf, city }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Ops...',
      text: String(error),
    })
  }
}
