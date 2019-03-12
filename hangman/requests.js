
const getPuzzle = async (wordCount) => {
  const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {})
  if(response.status === 200){

    const data = await response.json()
    return data.puzzle

  } else {
    throw new Error('Unable to fetch puzzle')
  }
}

const getCountry = async (countryCode) => {
  const response = await fetch('http://restcountries.eu/rest/v2/all')
  if (response.status === 200) {
    const countries = await response.json()
    return countries.find((country) => country.alpha2Code === countryCode)
  } else {
    throw new Error('Unable to fetch Country')
  }
}

const getLocation = async () => {
  const response = await fetch('http://ipinfo.io/json?token=fe7a119ea643ea')
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

// const getCountryOld = (countryCode) => {
//   return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
//     if(response.status === 200) {
//       return response.json()
//     } else {
//       throw new Error('Unable to fetch Country')
//     }
//   }).then((countries) => {
//       return countries.find((country) => country.alpha2Code === countryCode )    
//   })
// }

// const getLocationOld = () => {
//   return fetch('http://ipinfo.io/json?token=fe7a119ea643ea').then((response) => {
//     if(response.status === 200) {
//       return response.json()
//     } else {
//       throw new Error('Unable to fetch location')
//     }
//   })
// }





// const getPuzzlePromise = (wordCount) => new Promise((resolve, reject) => {
//   const request = new XMLHttpRequest()

//   request.addEventListener('readystatechange', (e) => {
//     if(e.target.readyState === 4 && e.target.status === 200) {
//       const data = JSON.parse(e.target.responseText)
//       resolve(data.puzzle)
//     } else if (e.target.readyState === 4) {
//       reject(`Error`)
//     }
//   })
//   request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//   request.send()
//   })


// const getCountryPromise = (countryCode) =>  new Promise((resolve, reject) => {
//   const countryRequest = new XMLHttpRequest()

//   countryRequest.addEventListener('readystatechange', (e) => {
//     if(e.target.status === 200 && e.target.readyState === 4){
//       const data = JSON.parse(e.target.responseText)
//       const country = data.find((country) => country.alpha2Code === countryCode)
//       resolve(country.name)
//     } else if (e.target.readyState === 4) {
//       reject('Unable to fetch data')
//     }
//   })

//   countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
//   countryRequest.send()    
// })

