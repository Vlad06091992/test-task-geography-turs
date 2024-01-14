const dateSpan = document.querySelector('.date')
dateSpan.textContent = `${currentMonth} ${currentYear}`

const nextMonthButton = document.querySelector('.nextMonthButton')
const prevMonthButton = document.querySelector('.prevMonthButton')
const todayButton = document.querySelector('.todayButton')


getMonthData()
iterateDaysInCalendar()


const changeMonthHandler = (arg) => {
    setCurrentDate(arg)
    dateSpan.textContent = `${currentMonth} ${currentYear}`
    getMonthData()
}

nextMonthButton.addEventListener('click', () => {
    changeMonthHandler('next')
    iterateDaysInCalendar()
})

prevMonthButton.addEventListener('click', () => {
    changeMonthHandler('prev')
    iterateDaysInCalendar()
})

todayButton.addEventListener('click', () => {
    changeMonthHandler('today')
    iterateDaysInCalendar()
})









