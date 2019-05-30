const entreService = 'http://localhost:3000'

class Service {
  async request({url, method = 'GET', body = {}, headers = {}}) {
    const config = {
      method,
      body,
      headers
    };

    if (method === 'GET') {
      delete config.body
    }

    const response = await fetch(`${entreService}/${url}`, config)
    .then(response => response.json());

    return response
  }
}

export {
  Service
}
