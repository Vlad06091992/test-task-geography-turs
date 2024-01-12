const dateSpan = document.querySelector('.date')
dateSpan.textContent = `${currentMonth} ${currentYear}`

const nextMonthButton = document.querySelector('.nextMonthButton')
const prevMonthButton = document.querySelector('.prevMonthButton')
const todayButton = document.querySelector('.today')

nextMonthButton.addEventListener('click',()=>{
    setCurrentDate('next')
    dateSpan.textContent = `${currentMonth} ${currentYear}`
    getMonthData(currentYear,currentMonthIndex)
    console.log(daysInMonth,firstMondayDate)
})

prevMonthButton.addEventListener('click',()=>{
    setCurrentDate('prev')
    dateSpan.textContent = `${currentMonth} ${currentYear}`
    getMonthData(currentYear,currentMonthIndex)
    console.log(daysInMonth,firstMondayDate)
})

todayButton.addEventListener('click',()=>{
    setCurrentDate('today')
    dateSpan.textContent = `${currentMonth} ${currentYear}`
    getMonthData(currentYear,currentMonthIndex)
    console.log(daysInMonth,firstMondayDate)
})



