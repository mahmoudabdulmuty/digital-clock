const clock = document.querySelector('.clock')

const tik = ()=>{
    const now = new Date
    const secs = now.getSeconds()
    const mins = now.getMinutes()
    const hrs = now.getHours()

    const html = `
        <span>${hrs}</span> : 
        <span>${mins}</span> : 
        <span>${secs}</span>
    `
    clock.innerHTML = html
    
}

setInterval(tik,1000)