const getDataCallback = (num, callback) => {
  setTimeout(() => {
    if(typeof num === 'number') {
      callback(undefined, num*2)
    } else {
      callback('Number must be provided')
    }
}, 1000)
}


getDataCallback(2, (error, data) => {
  if(error) {
    console.log(error)
  } else {
    getDataCallback(data, (err, data) => {
      if(err) {
        console.log('err')
      } else {
        console.log(data)
      }
    })
  }
})

const getDataPromise = (num) => new Promise((resolve, reject) => {
  setTimeout(() => {
    typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
  }, 1000)
})

getDataPromise(2).then((data) => {
  getDataPromise(data).then((data) => {
    console.log(`Promise data: ${data}`)
  }, (err) => {
    console.log(err)
  })
}, (err) => {
  console.log(err)
})

getDataPromise(10).then((data) => {
  return getDataPromise(data)
}).then((data) => {
  return 'This is test data'
}).then((data) => {
    console.log(data)  
}).catch((err) => {
  console.log(err)
})