const dateSpan = document.querySelector('.date')
dateSpan.textContent = `${currentMonth} ${currentYear}`

const nextMonthButton = document.querySelector('.nextMonthButton')
const prevMonthButton = document.querySelector('.prevMonthButton')
const todayButton = document.querySelector('.today')

getMonthData()
const changeMonthHandler = (arg) => {
    setCurrentDate(arg)
    dateSpan.textContent = `${currentMonth} ${currentYear}`
    getMonthData()
    console.log(daysInMonth,firstMondayDate)
}

nextMonthButton.addEventListener('click',()=>{
  changeMonthHandler('next')
    foo()
})

prevMonthButton.addEventListener('click',()=>{
    changeMonthHandler('prev')
    foo()
})

todayButton.addEventListener('click',()=>{
    changeMonthHandler('today')
    foo()
})

function foo(){

    for(let i = 1; i<= 35; i++){
        const el = document.getElementById(`${i}`)
        const divEl = el.querySelector('div');
        divEl.textContent = ''
    }


    for(let i = 1; i <= 35; i++){
firstMondayDate++
        // console.log(i)
        // console.log(firstMondayDate)

        if(firstMondayDate >= daysInMonth + 2) break

        const el = document.getElementById(`${i}`)
        const divEl = el.querySelector('div');
        divEl.textContent = (firstMondayDate - 1).toString()
        el.appendChild(divEl)
    }
}

foo()



