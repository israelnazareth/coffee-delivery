export const API = {
  getStates: () =>
    'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
  getCities: (selectedUF: string) =>
    `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUF}/distritos`,
  getLocation: (
    latitude: number,
    longitude: number,
  ) => `https://maps.googleapis.com/maps/api/geocode/json?latlng=
          ${latitude},${longitude}&key=${import.meta.env.VITE_API_KEY}`,
}
