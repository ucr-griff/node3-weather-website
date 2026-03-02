const geocode = (address, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=ba9d2631cf750ee88c7892c2f4ce80b7&query=' + encodeURIComponent(address) + '&units=f'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        }
        // else if (response.body.error) {
        else if (response.body.features.length === 0) {
            callback('Unable to find location', undefined)
        }
        // else {
        //     callback(undefined, {
        //         latitude: response.body.location.lat,
        //         longitude: response.body.location.lng,
        //         location: response.body.location.name
        //     })
        // }
    })

}

geocode('12what', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
}) 