/*
    forecast.js
    1. Require the request module
    2. Define a function that accepts an address and callback
 */
const request = require("request");
const forecast = (latitude, longitude, callback) => {
    // const url = 'http://api.weatherstack.com/current?access_key=ba9d2631cf750ee88c7892c2f4ce80b7&query=' + encodeURIComponent(address) + '&units=f'
    const url = 'http://api.weatherstack.com/current?access_key=e559f2e23cc16445d5f1a1e44ef6afa3&query='+latitude+','+longitude+'&units=f'

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location. ' + body.error.info, undefined)
        } else {
            // callback(undefined, {
            //     latitude: body.location.latitude,
            //     longitude: body.location.longitude,
            //     location: body.current.temperature
            // })
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.')

            }
    })
} // const forecast = (latitude, longitude, callback) => {

module.exports = forecast;

