const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.weatherbit.io/v2.0/current?&lat=${latitude}&lon=${longitude}&key=9f0b6b8e2daa416eb643402e4b5a8a5e`
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 'Having ' + body.data[0].weather.description + '. It is currently ' + body.data[0].temp + ' degress out. There is ' + body.data[0].precip + '% chance of rain.')
        }
    })
}

module.exports = forecast