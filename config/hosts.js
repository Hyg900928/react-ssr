const hosts = {
    production: {
        example: 'http://api.example.com',
        api: 'https://api.heyungao.com'
    },
    alpha: {
        example: 'http://api.example.com'
    },
    test: {
        example: 'http://api.example.com'
    },
    development: {
        example: 'http://localhost:9001',
        api: 'http://localhost:9001'
    }
}
let host = hosts.production
if (__DEV__) {
    host = hosts.development
}
if (__TEST__) {
    host = hosts.test
}
if (__ALPHA__) {
    host = hosts.alpha
}
if (__PROD__) {
    host = hosts.production
}

export default host