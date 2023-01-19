const express = require('express')
const server = express()
const url = require('url');
const port = 7007

const store = {}


//When the server receives a request on http://localhost:7007/set?somekey=somevalue it should store the passed key and value in memory
server.get('/set', (req, res) => {
    const setParsedUrl = url.parse(req.url, true).query;
    for(key in setParsedUrl){
    	store[key] = setParsedUrl[key];
        res.send(store)
    }
  })

// When the server receives a request on http://localhost:7007/get?key=somekey it should return the value stored at key in memory.
server.get('/get', (req, res) => {
    const getParsedUrl = url.parse(req.url, true).query; //{ key: someKey}
    const response = {};

	for(key in getParsedUrl){
		if(getParsedUrl[key] in store){
			response[getParsedUrl[key]] = store[getParsedUrl[key]];
        }
        res.send(response[getParsedUrl[key]])
	}
  })

// When the server receives a request on http://localhost:7007/del?key=somekey it should delete the value stored at somekey
server.get('/del', (req, res) => {
    const delParsedUrl = url.parse(req.url, true).query;
    for(key in delParsedUrl){
    	delete store[delParsedUrl[key]];
        res.send(store)
    }
  })

// When the server receives a request on http://localhost:7007/inc?key=somekey it should increment the value stored at somekey by one
server.get('/inc', (req, res) => {
    const getParsedUrl = url.parse(req.url, true).query; //{ key: someKey}
    const response = {}
	for(key in getParsedUrl){
		if(getParsedUrl[key] in store){
			response[getParsedUrl[key]] = store[getParsedUrl[key]];
        }
        const json = parseInt(response[getParsedUrl[key]], 10);
        const integer = json + 1;
        res.send(integer.toString())

	}
})

// When the server receives a request on http://localhost:7007/dec?key=somekey it should decrement the value stored at somekey by one
server.get('/dec', (req, res) => {
    const decParsedUrl = url.parse(req.url, true).query; //{ key: someKey}
    const response = {};

	for(key in decParsedUrl){
		if(decParsedUrl[key] in store){
			response[decParsedUrl[key]] = store[decParsedUrl[key]];
        }
        const json = parseInt(response[decParsedUrl[key]], 10);
        const integer = json - 1;
        res.send(integer.toString())
	}
  })

// When the server receives a request on http://localhost:7007/res?key=somekey it should multiply the value stored at somekey by two
server.get('/res', (req, res) => {
    const resParsedUrl = url.parse(req.url, true).query; //{ key: someKey}
    const response = {};

	for(key in resParsedUrl){
		if(resParsedUrl[key] in store){
			response[resParsedUrl[key]] = store[resParsedUrl[key]];
        }
        const json = parseInt(response[resParsedUrl[key]], 10);
        const integer = json * 2;
        res.send(integer.toString())
	}
  })

// When the server receives a request on http://localhost:7007/div?key=somekey it should divide the value stored at somekey by two
server.get('/div', (req, res) => {
    const divParsedUrl = url.parse(req.url, true).query; //{ key: someKey}
    const response = {};

    for(key in divParsedUrl){
        if(divParsedUrl[key] in store){
            response[divParsedUrl[key]] = store[divParsedUrl[key]];
        }
        const json = parseInt(response[divParsedUrl[key]], 10);
        const integer = json / 2;
        res.send(integer.toString())
    }
    })

// When the server receives a request on http://localhost:7007/reset it should delete all keys from memory
server.get('/reset', (req, res) => {
    const resetParsedUrl = url.parse(req.url, true).query;
    for(key in resetParsedUrl){
    	delete store[resetParsedUrl[key]];
        res.send(store)
    }
  })

// When the server receives a request on http://localhost:7007/ it should return a json response showing all keys and values in memory
server.get('/', (req, res) => {
    res.send(store)
    })
    

// When the server receives a request on http://localhost:7007/count it should return the number of keys currently stored
server.get('/count', (req, res) => {
    const keycount = Object.keys(store).length;
    res.send(keycount.toString())    
        })

//You can use Object.keys() to get the keys of an object, and Object.keys().length to get the number of keys.

// When the server receives a request on http://localhost:7007/keys it should return a json response showing all keys in memory
server.get('/keys', (req, res) => {
    const keys = Object.keys(store);
    const resObj = {...keys}
    res.json(resObj)   
    })

// When the server receives a request on http://localhost:7007/flush it should delete all keys from memory
server.get('/flush', (req, res) => {
    const flushParsedUrl = url.parse(req.url, true).query;
    for(key in flushParsedUrl){
        	delete store[flushParsedUrl[key]];
            res.send(store)
        }
        })

// When the server receives a request on http://localhost:7007/flushall it should delete all keys from memory
server.get('/flushall', (req, res) => {
    const flushallParsedUrl = url.parse(req.url, true).query;
    for(key in flushallParsedUrl){
        	delete store[flushallParsedUrl[key]];
            res.send(store)
        }
    })

//// When the server receives a request on http://localhost:4000/incrby?key=somekey&amount=10 it should increment the value stored at somekey by the amount specified
server.get('/incrby', (req, res) => {
    const incrbyParsedUrl = url.parse(req.url, true).query; //{ key: someKey, amount: 10}
    const response = {};

    for(key in incrbyParsedUrl){
        if(incrbyParsedUrl[key] in store){
            response[incrbyParsedUrl[key]] = store[incrbyParsedUrl[key]];
        }
        const json = parseInt(response[incrbyParsedUrl[key]], 10);
        const integer = json + parseInt(incrbyParsedUrl.amount, 10);
        res.send(integer.toString())
        
    }
})

// When the server receives a request on http://localhost:4000/decrby?key=somekey&amount=10 it should decrement the value stored at somekey by the amount specified
server.get('/decrby', (req, res) => {
    const decrbyParsedUrl = url.parse(req.url, true).query; //{ key: someKey, amount: 10}
    const response = {};

    for(key in decrbyParsedUrl){
        if(decrbyParsedUrl[key] in store){
            response[decrbyParsedUrl[key]] = store[decrbyParsedUrl[key]];
        }
        const json = parseInt(response[decrbyParsedUrl[key]], 10);
        const integer = json - parseInt(decrbyParsedUrl.amount, 10);
        res.send(integer.toString())
        
    }
})

// When the server receives a request on http://localhost:4000/incrbyfloat?key=somekey&amount=10.5 it should increment the value stored at somekey by the amount specified
server.get('/incrbyfloat', (req, res) => {
    const incrbyfloatParsedUrl = url.parse(req.url, true).query; //{ key: someKey, amount: 10.5}
    const response = {};

    for(key in incrbyfloatParsedUrl){
        if(incrbyfloatParsedUrl[key] in store){
            response[incrbyfloatParsedUrl[key]] = store[incrbyfloatParsedUrl[key]];
        }
        const json = parseFloat(response[incrbyfloatParsedUrl[key]], 10);
        const integer = json + parseFloat(incrbyfloatParsedUrl.amount, 10);
        res.send(integer.toString())
        
    }
})

// When the server receives a request on http://localhost:4000/decrbyfloat?key=somekey&amount=10.5 it should decrement the value stored at somekey by the amount specified
server.get('/decrbyfloat', (req, res) => {
    const decrbyfloatParsedUrl = url.parse(req.url, true).query; //{ key: someKey, amount: 10.5}
    const response = {};

    for(key in decrbyfloatParsedUrl){
        if(decrbyfloatParsedUrl[key] in store){
            response[decrbyfloatParsedUrl[key]] = store[decrbyfloatParsedUrl[key]];
        }
        const json = parseFloat(response[decrbyfloatParsedUrl[key]], 10);
        const integer = json - parseFloat(decrbyfloatParsedUrl.amount, 10);
        res.send(integer.toString())
        
    }
})

// ?When the server receives a request on http://localhost:4000/mget?key=somekey&key=anotherkey it should return a json response showing the values for each of the keys specified
server.get('/mget', (req, res) => {
    const mgetParsedUrl = url.parse(req.url, true).query; //{ key: someKey, key: anotherKey}
    const response = {};

    for(key in mgetParsedUrl){
        if(mgetParsedUrl[key] in store){
            response[mgetParsedUrl[key]] = store[mgetParsedUrl[key]];
        }
    }
    res.send(response[mgetParsedUrl[key]])
})

// When the server receives a request on http://localhost:4000/mset?key=somekey&value=somevalue&key=anotherkey&value=anothervalue it should set the value for each of the keys specified
server.get('/mset', (req, res) => {
    const msetParsedUrl = url.parse(req.url, true).query; //{ key: someKey, value: someValue, key: anotherKey, value: anotherValue}
    const response = {};

    for(key in msetParsedUrl){
        if(msetParsedUrl[key] in store){
            response[msetParsedUrl[key]] = store[msetParsedUrl[key]];
        }
    }
    res.send(response[msetParsedUrl[key]])
})

// When the server receives a request on http://localhost:4000/msetnx?key=somekey&value=somevalue&key=anotherkey&value=anothervalue it should set the value for each of the keys specified only if none of the keys exist
server.get('/msetnx', (req, res) => {
    const msetnxParsedUrl = url.parse(req.url, true).query; //{ key: someKey, value: someValue, key: anotherKey, value: anotherValue}
    const response = {};

    for(key in msetnxParsedUrl){
        if(msetnxParsedUrl[key] in store){
            response[msetnxParsedUrl[key]] = store[msetnxParsedUrl[key]];
        }
    }
    res.send(response[msetnxParsedUrl[key]])
})

// When the server receives a request on http://localhost:4000/msetnx?key=somekey&value=somevalue&key=anotherkey&value=anothervalue it should set the value for each of the keys specified only if none of the keys exist
server.get('/msetnx', (req, res) => {
    const msetnxParsedUrl = url.parse(req.url, true).query; //{ key: someKey, value: someValue, key: anotherKey, value: anotherValue}
    const response = {};

    for(key in msetnxParsedUrl){
        if(msetnxParsedUrl[key] in store){
            response[msetnxParsedUrl[key]] = store[msetnxParsedUrl[key]];
        }
    }
    res.send(response[msetnxParsedUrl[key]])
})

// When the server receives a request on http://localhost:4000/rpush?key=somekey&value=somevalue it should append the value to the end of the list stored at somekey
server.get('/rpush', (req, res) => {
    const rpushParsedUrl = url.parse(req.url, true).query; //{ key: someKey, value: someValue}
    const response = {};

    for(key in rpushParsedUrl){
        if(rpushParsedUrl[key] in store){
            response[rpushParsedUrl[key]] = store[rpushParsedUrl[key]];
        }
    }
    res.send(response[rpushParsedUrl[key]])
})










server.listen(port, () => console.log(`Example app listening on port ${port}!`));

