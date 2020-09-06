export const postWeather = (city) => {
  const fetchedWeather = fetch('api.openweathermap.org/data/2.5/forecast?q={city}&appid={apiKey}', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'city': city
    })
  })
  .then(response => response.json())
  console.log(fetchedWeather)
  return fetchedWeather
}
