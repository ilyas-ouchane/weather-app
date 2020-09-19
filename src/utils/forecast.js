const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=d282c2343e65771d9c454d7df68e9cfa&query='+latitude+','+longitude+'&units=m'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 'It is currently ' + body.current.temperature + ' degrees out. and it is  ' + body.current.weather_descriptions[0])
        }
    })
}

module.exports = forecast 