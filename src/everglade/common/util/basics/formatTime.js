const daysOfTheWeek = [
    'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
]

const formatTime = targetTime => {
    const targetDate = new Date(targetTime)
    const currDate = new Date()

    const diffDays = Math.ceil(Math.abs(currDate - targetDate) / (1000 * 60 * 60 * 24))

    var weekDay = ""
    if (diffDays < 7) {
        if (diffDays === 1 && currDate.getDate() === targetDate.getDate()) 
            weekDay = "Today at"
        else
            weekDay = daysOfTheWeek[targetDate.getDay()] + " at"
    } 
    else
        weekDay = (targetDate.getMonth() + 1) + '/' + targetDate.getDate() + '/' + targetDate.getFullYear() 

    var timeSuffix = 'AM'
    var time = "" + targetDate.getHours()

    if (targetDate.getHours() > 12) {
        time = targetDate.getHours() - 12
        timeSuffix = "PM" 
    }

    time += ":" + (targetDate.getMinutes() < 10 ? "0" + targetDate.getMinutes() : targetDate.getMinutes())

    return weekDay + " " + time + " " + timeSuffix
}

export default formatTime