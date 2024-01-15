const dateSpan = document.querySelector('.date')
dateSpan.textContent = `${currentMonth} ${currentYear}`

const nextMonthButton = document.querySelector('.nextMonthButton')
const addButton = document.querySelector('.addButton')
const updateButton = document.querySelector('.updateButton')
const cancelButton = document.querySelector('.cancel')
const prevMonthButton = document.querySelector('.prevMonthButton')
const todayButton = document.querySelector('.todayButton')
const dateInput = document.querySelector('.dateInput')
const eventInput = document.querySelector('.eventInput')
const authorInput = document.querySelector('.authorInput')
const createEventButton = document.querySelector('.createEvent')
const formEvent = document.querySelector('.formEvent')
const searchInput = document.querySelector('.searchInput')

let dateOfEvent
let author
let eventDescription

createEventButton.disabled = true;

const checkStatusAddEventDescriptionButton = () => {
    createEventButton.disabled = !dateOfEvent || !author || !eventDescription;
}
[searchInput,dateInput,eventInput].forEach(el=>el.addEventListener('input',()=>{
    checkStatusAddEventDescriptionButton()
}))

searchInput.addEventListener('input', (e) => {
    searchString = e.target.value
})

dateInput.addEventListener('input', (e) => {
    dateOfEvent = e.target.value
    checkStatusAddEventDescriptionButton()

})

eventInput.addEventListener('input', (e) => {
    eventDescription = e.target.value
    checkStatusAddEventDescriptionButton()

})

authorInput.addEventListener('input', (e) => {
    author = e.target.value
    checkStatusAddEventDescriptionButton()
})

createEventButton.addEventListener('click', () => {
    const [year, month, numberOfMonth] = dateOfEvent.split('-')
    const event = {
        author,
        eventDescription,
        date: {
            year: +year,
            month: +month - 1,
            numberOfMonth: +numberOfMonth
        },
    }
    events.push(event)
    iterateDaysInCalendar()
    formEvent.classList.remove('formEventShow')
    dateInput.value = authorInput.value = eventInput.value = ''
})

addButton.addEventListener('click', () => {
    formEvent.classList.add('formEventShow')
})

updateButton.addEventListener('click', () => {
    if(!searchString){return}
    const {year, numberOfMonth, month} = findDate(searchString)
    if(year && numberOfMonth && (month || month ===0)){
        eventDay = numberOfMonth
        currentDate = new Date(year, month, numberOfMonth)
        currentMonthIndex = month;
        currentMonth = monthsRu[currentMonthIndex];
        currentYear = currentDate.getUTCFullYear()
        dateSpan.textContent = `${currentMonth} ${currentYear}`
        iterateDaysInCalendar()
    }
    searchString = null
})

cancelButton.addEventListener('click', () => {
    formEvent.classList.remove('formEventShow')
})

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







