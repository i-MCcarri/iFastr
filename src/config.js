let apiPath

if (process.env.NODE_ENV === 'production') {
    apiPath = 'https://stark-sierra-08099.herokuapp.com'
} else {
    apiPath = 'http://localhost:8000'
}

export default {
    API_ENDPOINT: apiPath,
}