
const getPuzzle = async (wordCount) => {
  const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`, {})  //removing the http: will allow it to automatically adapt to the host site
  if(response.status === 200){

    const data = await response.json()
    return data.puzzle

  } else {
    throw new Error('Unable to fetch puzzle')
  }
}

const getCountry = async (countryCode) => {
  const response = await fetch('//restcountries.eu/rest/v2/all')
  if (response.status === 200) {
    const countries = await response.json()
    return countries.find((country) => country.alpha2Code === countryCode)
  } else {
    throw new Error('Unable to fetch Country')
  }
}

const getLocation = async () => {
  const response = await fetch('//ipinfo.io/json?token=fe7a119ea643ea')
  if(response.status === 200) {
    return await response.json()    
  } else {
    throw new Error('Unable to fetch location')
  }
}

const getCurrentCountry = async () => {

    const location = await getLocation()
    const country = await getCountry(location.country)
    return country

}

