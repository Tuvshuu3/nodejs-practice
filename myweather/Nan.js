const numbermunuu = (number) => {
    return new Promise((resolve, reject) => {
        if(typeof number != Number){
            reject("NOT A NUMBER");
        }
    })
}
  
numbermunuu('12').catch(rej => {
    console.log(rej)
})