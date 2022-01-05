const even = (number) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
          if(number % 2 == 0){
              reject("even");
          }
          else{
              resolve("odd")
          }
      }, 2000)
    })
  }
  
even(12).catch(rej => {
    console.log(rej)
})