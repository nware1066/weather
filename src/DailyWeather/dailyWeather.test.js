// __tests__/fetch.test.js
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import DisplayDailyWeather from './DisplayDailyWeather'

var mockCurrentWeather = {
  name: 'Denver',
  main: {
    temp: 65
  },
  weather: [
    {
      description: 'partly cloudy'
    }
  ]
}

test('contains an h1 element with text with City name', () => {

  const component = render(<DisplayDailyWeather weather={mockCurrentWeather} />)
console.log(component)
  expect(screen.getByRole('heading')).toHaveTextContent('hello there')
})
// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
