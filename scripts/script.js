const dateSpan = document.querySelector('.date')
dateSpan.textContent = `${currentMonth} ${currentYear}`

const nextMonthButton = document.querySelector('.nextMonthButton')
const prevMonthButton = document.querySelector('.prevMonthButton')
const todayButton = document.querySelector('.todayButton')
const dateInput = document.querySelector('.dateInput')
const eventInput = document.querySelector('.eventInput')
const authorInput = document.querySelector('.authorInput')
const createEventButton = document.querySelector('.createEvent')

let dateOfEvent
let author
let eventDescription
// dateInput.addEventListener('change', (e) => {
//     dateOfEvent = e.target.value
//     console.log(dateOfEvent)
// })
//
// eventInput.addEventListener('change', (e) => {
//     eventDescription = e.target.value
//     console.log(eventDescription)
// })
//
// authorInput.addEventListener('change', (e) => {
//     author = e.target.value
//     console.log(author)
// })

// createEventButton.addEventListener('click', () => {
//     const [year, month, numberOfMonth] = dateOfEvent.split('-')
//     const event = {
//         author,
//         eventDescription,
//         date: {
//             year:+year,
//             month:+month - 1,
//             numberOfMonth:+numberOfMonth
//         },
//     }
//     console.log(event)
// })


const events = [{
    author: "Влад",
    eventDescription: "Купить хлеб",
    date: {
        year: 2024,
        month: 0,
        numberOfMonth: 16
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









