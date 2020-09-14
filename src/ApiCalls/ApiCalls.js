

export const fetchCurrentWeather = (city) => {
  let url = `https:api.openweathermap.org/data/2.5/weather?q=${city}&appid=c85cb08a782805154a49c48530b21295`;

  return fetch(url)
  .then(response => response.json())
}

export const fetchWeatherForcast = (city) => {
  let url = `https:api.openweathermap.org/data/2.5/forecast?q=${city}&appid=c85cb08a782805154a49c48530b21295`;
  return fetch(url)
  .then(response => response.json())
}
//
