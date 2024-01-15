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
    if (!dateOfEvent || !author || !eventDescription) {
        createEventButton.disabled = true;
    } else {
        createEventButton.disabled = false;
    }
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


const events = [{
    "author": "Женя",
    "eventDescription": "полить цветы",
    "date": {
        "year": 2024,
        "month": 7,
        "numberOfMonth": 31
    }
},{
    author: "Анатолий",
    eventDescription: "Купить машину",
    date: {
        year: 2023,
        month: 10,
        numberOfMonth: 12
    }
}, {
    author: "Влад",
    eventDescription: "Купить хлеб",
    date: {
        year: 2024,
        month: 0,
        numberOfMonth: 16
    }
}, {
    author: "Даша",
    eventDescription: "Купить молока",
    date: {
        year: 2024,
        month: 3,
        numberOfMonth: 18
    }
}, {
    author: "Игорь",
    eventDescription: "Купить пива",
    date: {
        year: 2024,
        month: 6,
        numberOfMonth: 6
    }
}]

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









