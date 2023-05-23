const { default: axios } = require("axios");

const apiAcademico = axios.create({
    baseURL: 'https://api.artic.edu/api/v1',
})

export default apiAcademico