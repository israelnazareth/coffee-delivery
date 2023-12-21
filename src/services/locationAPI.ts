import Swal from 'sweetalert2'
import { API } from '../apis'
import { City, State } from '../@types/styled'

export async function fetchStates() {
  try {
    const url = await fetch(API.getStates())
    const data: State[] = await url.json()
    const sortedUFs = data.sort((a, b) => (a.sigla > b.sigla ? 1 : -1))
    return sortedUFs
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Ops...',
      text: String(error),
    })
  }
}

export async function fetchCities(selectedUF: string) {
  try {
    const url = await fetch(API.getCities(selectedUF))
    const data: City[] = await url.json()
    const sortedCities = data.sort((a, b) => (a.nome > b.nome ? 1 : -1))
    return sortedCities
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Ops...',
      text: String(error),
    })
  }
}
