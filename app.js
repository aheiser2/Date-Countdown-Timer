const timeLeft = document.getElementById("time-left")

const birthday = new Date('01/27/2022')
const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24           
const today = new Date()
let timerId

function countDown() {
    const today = new Date()
    const timeSpan = birthday - today
    if (timeSpan <= -day){
        timeLeft.innerHTML = "Hope you had a nice birthday!"
        clearInterval(timerId)
        return
    } else if(timeSpan <= 0){
        timeLeft.innerHTML = "Happy Birthday!"
        clearInterval(timerId)
        return
    } 

    const days = Math.floor(timeSpan/day)
    const hours = Math.floor((timeSpan % day) / hour)
    const minutes = Math.floor((timeSpan % hour) / minute)
    const seconds = Math.floor((timeSpan % minute) / second)

    timeLeft.innerHTML = days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds "
}

timerId = setInterval(countDown, second)