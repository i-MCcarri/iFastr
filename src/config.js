let apiPath

if (process.env.NODE_ENV === 'production') {
    apiPath = 'future server path'
} else {
    apiPath = 'http://localhost:8000'
}

export default {
    API_ENDPOINT: apiPath,
}