# Fetchios
[Axios](https://github.com/axios/axios)-inspired Fetch client.

## Installing 

NPM:

```bash
npm install fetchios --save
```

Yarn
```bash
yarn add fetchios
```

## Basic usage 

Perform a GET request:
```js
import fetchios from 'fetchios';

fetchios.get('https://swapi.co/api/starships')
    .then(function (response) {
        // handle success
        console.log(response.data);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
```

Add query params:
```js
// ...

fetchios.get('https://swapi.co/api/starships', { page: 2 })

// ...
```

Perform a POST request:
```js
import fetchios from 'fetchios';

const authData = {
    username: 'myUsername', 
    password: 'Top$ecre7' 
};

fetchios.post('https://example.com/api/login', authData)
    .then(function (response) {
        // handle success
        console.log(response.data);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
```

## Create an instance

```js
import { Fetchios } from 'fetchios';

const fetchios = new Fetchios('https://swapi.co/api');

fetchios.get('/starships')
// ...
```


## Attach an interceptor

```js

class AttachAwesomeHeader implements HttpRequestInterceptor {
  request(url: string, config: RequestInit) {

    return [
      url,
      {
        ...config,
        headers: {
            ...config.headers,
            { 'X-Custom-Header': 'awesomepossum' }
        }
      },
    ];
  }
}

fetchios.attachRequestInterceptor(new AttachAwesomeHeader());
```

## TODOs

* Improve README
* Write basic tests
* Add lint and prettier 
* Add more interceptors


