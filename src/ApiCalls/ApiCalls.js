

export const fetchCurrentWeather = (city) => {
  const url = `https:api.openweathermap.org/data/2.5/weather?q=${city}&appid=c85cb08a782805154a49c48530b21295`;

  return fetch(url).then(response => response.json())
}
