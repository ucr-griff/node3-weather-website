/*
    geocode.js
    1. Require the request module
    2. Define a function that accepts an address and callback
 */
const request = require("request");
const geocode = (address, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=ba9d2631cf750ee88c7892c2f4ce80b7&query=' + encodeURIComponent(address) + '&units=f'

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location. ' + body.error.info, undefined)
        } else {
            callback(undefined, {
                latitude: body.location.lat,
                longitude: body.location.lon,
                location: body.location.name
            })
        }
    })
} // const geocode = (address, callback) => {...}

module.exports = geocode;

