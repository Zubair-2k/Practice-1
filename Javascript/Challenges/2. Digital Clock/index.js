
var interval = setInterval(()=>{
    // var Month =["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    var Month =["January","Febuary","March","April","May","June","July","August","September","October","November","December"]
    var Day =["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]

    var time = new Date();

    let fullDate = document.querySelector(".fullDate")
    let dayValue = document.querySelector(".dayValue")
    let hoursValue = document.querySelector(".hoursValue")
    let minsValue = document.querySelector(".minsValue")
    let secValue = document.querySelector(".secValue")

    fullDate.innerHTML = `${Month[time.getMonth()]} ${time.getDate()>9 ? time.getDate() : "0"+time.getDate()} ${time.getFullYear()}`

    dayValue.textContent = `${Day[time.getDay()]}`
    hoursValue.textContent = `${ time.getHours() > 9 ? time.getHours() : "0"+time.getHours() }`
    minsValue.textContent = `${time.getMinutes() > 9 ? time.getMinutes() : "0"+time.getMinutes() }`
    secValue.textContent = `${time.getSeconds() > 9 ? time.getSeconds() : "0"+time.getSeconds() }`

    // console.log(time.getDate())
    // console.log(time.getFullYear())
    // console.log(time.getMonth())
    // console.log(time.getTime())
    // console.log(time.getHours())
    // console.log(time.getMinutes())
    // console.log(time.getSeconds())
    // console.log(time.getDay())
    
},[1000])

// setTimeout(()=>{
//     clearInterval(interval);
//     console.log("Clear Interval")
// },2000)