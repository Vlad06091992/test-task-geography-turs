const dateSpan = document.querySelector('.date')
dateSpan.textContent = `${currentMonth} ${currentYear}`

const nextMonthButton = document.querySelector('.nextMonthButton')
const prevMonthButton = document.querySelector('.prevMonthButton')
const todayButton = document.querySelector('.today')

nextMonthButton.addEventListener('click',()=>{
    setCurrentDate('next')
    dateSpan.textContent = `${currentMonth} ${currentYear}`
    console.log(getMonthData(currentYear,currentMonthIndex))
})

prevMonthButton.addEventListener('click',()=>{
    setCurrentDate('prev')
    dateSpan.textContent = `${currentMonth} ${currentYear}`
    console.log(getMonthData(currentYear,currentMonthIndex))
})

todayButton.addEventListener('click',()=>{
    setCurrentDate('today')
    dateSpan.textContent = `${currentMonth} ${currentYear}`
    console.log(getMonthData(currentYear,currentMonthIndex))
})


