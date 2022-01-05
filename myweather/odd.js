const odd = (number) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
          if(number % 2 == 1){
              resolve("odd");
          }
          else{
              reject("even")
          }
      }, 1000)
    })
  }


odd(3).then(res => {
    console.log(res)
})
