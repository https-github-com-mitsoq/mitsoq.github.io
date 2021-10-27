const  axios = require('axios')

const fetchUserFromAPI = function () {
    return axios.get('https://randomuser.me/api/?results=10')
}
const fetchAddressAPI = function () {
    return axios.get('https://random-data-api.com/api/address/random_address')
}

module.exports = {
    fetchUserFromAPI,
    fetchAddressAPI
}