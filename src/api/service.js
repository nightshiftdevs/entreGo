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

    const response = await fetch(`http://localhost:3000/${url}`, config)
    .then(response => response.json());

    return response
  }
}

export {
  Service
}
