// const request('request') // legacy
const request = require('request')

// ba9d2631cf750ee88c7892c2f4ce80b7
// http://api.weatherstack.com/
const urlWeather = 'http://api.weatherstack.com/current?access_key=ba9d2631cf750ee88c7892c2f4ce80b7&query=Redlands&units=f'
//const urlWeather = 'http://api.weatherstack.com/current?access_key=ba9d2631cf750ee88c7892c2f4ce80b7&query=&units=f'

request({ url: urlWeather, json: true }, (error, respWeather) => {
    //console.log(response.body)
    // const data = JSON.parse(response.body)
    if (error) {
        console.log('Unable to connect to weather service!')
    }
    else if (respWeather.body.error) {
        console.log('Problem with the response: ' + respWeather.body.error.info)
    }
    else {
        console.log(respWeather.body.current.weather_descriptions[0] +
            ". It is currently " +
            respWeather.body.current.temperature +
            "F degrees outside, feels like " +
            respWeather.body.current.feelslike + "F. ")
    }
})

// pk.eyJ1IjoiZ3Jpb2JodGhhIiwiYSI6ImNtamRnNGc2ODA2NHEzZXE0dnBhcWlhM3EifQ.hpkAcEus_AfEMW7aoPZkaQ
// https://console.mapbox.com/
// https://api.mapbox.com/search/geocode/v6/forward?q=Redlands&access_token=pk.eyJ1IjoiZ3Jpb2JodGhhIiwiYSI6ImNtamRnNGc2ODA2NHEzZXE0dnBhcWlhM3EifQ.hpkAcEus_AfEMW7aoPZkaQ
// limit=1

// const urlMapbox = 'https://api.mapbox.com/search/geocode/v6/forward?q=Redlands&limit=1&access_token=pk.eyJ1IjoiZ3Jpb2JodGhhIiwiYSI6ImNtamRnNGc2ODA2NHEzZXE0dnBhcWlhM3EifQ.hpkAcEus_AfEMW7aoPZkaQ'
const urlMapbox = 'https://api.mapbox.com/search/geocode/v6/forward?q=Redlands&limit=1&access_token=pk.eyJ1IjoiZ3Jpb2JodGhhIiwiYSI6ImNtamRnNGc2ODA2NHEzZXE0dnBhcWlhM3EifQ.hpkAcEus_AfEMW7aoPZkaQ'
request({ url: urlMapbox, json: true }, (error, respMapbox) => {

    if (respMapbox.body.features.length === 0) {
        console.log('Unable to find location!')
    }
    else {
        console.log("The location is " +
            respMapbox.body.features[0].properties.full_address +
            " is at " +
            respMapbox.body.features[0].properties.coordinates.longitude +
            ", " +
            respMapbox.body.features[0].properties.coordinates.latitude)
    }
})

// console.log('Starting app.js')
//
// setTimeout( () => {
//     console.log('3 seconds timer')
// }, 3000)
//
// setTimeout( () => {
//     console.log('0 seconds timer')
// }, 0)
//
//
// console.log('Stopping app.js')
//
