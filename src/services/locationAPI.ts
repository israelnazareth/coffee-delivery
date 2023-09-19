export async function fetchLocation() {
  try {
    const url = await fetch(
      'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
    )
    const data = await url.json()
    const sortedUFs = data.sort((a: any, b: any) =>
      a.sigla > b.sigla ? 1 : -1,
    )
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
    const data = await url.json()
    const sortedData = data.sort((a: any, b: any) => (a.nome > b.nome ? 1 : -1))
    return sortedData
  } catch (error) {
    console.log(error)
  }
}
