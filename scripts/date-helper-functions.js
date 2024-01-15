Date.prototype.daysInMonth = function () {
    return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
};

function getMonthData() {
    const firstDayOfMonth = new Date(currentYear, currentMonthIndex, 1, -1);
    daysInMonth = currentDate.daysInMonth()
    const dayOfWeek = firstDayOfMonth.getDay();
    const daysToAdd = dayOfWeek === 0 ? 1 : 8 - dayOfWeek;
    firstMondayDate = +(new Date(currentYear, currentMonthIndex - 1, daysToAdd).toString().split(' ')[2][1]);
    if (firstMondayDate === 8) {
        firstMondayDate = 1
    }
}

function getFirstDayOfWeekIndex(year, month) {
    const firstDayOfMonth = new Date(year, month, 1);
    let dayOfWeek = firstDayOfMonth.getDay();
    return (dayOfWeek === 0) ? 7 : dayOfWeek;
}


function updateDate() {
    eventDay = null
    currentYear = currentDate.getUTCFullYear();
    currentMonthIndex = currentDate.getUTCMonth();
    currentMonth = monthsRu[currentMonthIndex];
}


const setCurrentDate = (to) => {
    if (to === 'today') {
        currentDate = new Date()
    } else {
        currentDate.setMonth(currentDate.getMonth() + (to === 'next' ? +1 : -1))
    }
    updateDate()
}


function iterateDaysInCalendar() {
    searchInput.value = ''
    getTodayDate()
    let firstDayOfWeekIndex = getFirstDayOfWeekIndex(currentYear, currentMonthIndex);
    for (let i = 1; i <= 42; i++) {
        const el = document.getElementById(`${i}`)
        el.querySelector('.author').textContent = ''
        el.querySelector('.description').textContent = ''
        el.classList.remove('notActiveCell')
        el.classList.remove('todayCell')
        el.classList.remove('activeCell')

        const divEl = el.querySelector('.numberOfMonth');
        divEl.textContent = ''
        divEl.classList.remove('active-months')
        divEl.classList.remove('todayDay')
    }

    let index = 1


    if (firstDayOfWeekIndex > 1) {
        const daysToFill = firstDayOfWeekIndex - 1
        let daysInPrevMonth = new Date(currentYear, currentMonthIndex - 1).daysInMonth()
        for (let i = daysInPrevMonth - daysToFill + 1; i <= daysInPrevMonth; i++) {
            let el = document.getElementById(`${index}`)
            el.classList.add('notActiveCell')
            const divEl = el.querySelector('.numberOfMonth');
            divEl.classList.add('not-active-months')
            divEl.textContent = i.toString()
            index++
            el.appendChild(divEl)
        }
    }

    index = 1

    for (let i = firstDayOfWeekIndex; i <= daysInMonth + firstDayOfWeekIndex; i++) {
        if(eventDay + firstDayOfWeekIndex - 1 === i ){
            let el = document.getElementById(`${i}`)
            el.classList.add('activeCell')
        }
        for (let j = 0; j < events.length; j++) {
            if (events[j].date.month === currentMonthIndex
                && events[j].date.numberOfMonth + firstDayOfWeekIndex - 1 === i &&
                events[j].date.year === currentYear) {

                let el = document.getElementById(`${i}`)
                el.querySelector('.author').textContent = events[j].author
                el.querySelector('.description').textContent = events[j].eventDescription
            }
        }

        if (index > daysInMonth) break
        let el = document.getElementById(`${i}`)
        const divEl = el.querySelector('.numberOfMonth');

        if (i === todayDayIndex) {
            let el = document.getElementById(`${i}`)
            const divEl = el.querySelector('.numberOfMonth');
            if (currentDate.getUTCMonth() === new Date().getUTCMonth() && new Date().getUTCFullYear() === currentYear) {
                divEl.classList.add('todayDay')
                el.classList.add('todayCell')
            }


        }
        divEl.classList.remove('not-active-months')
        divEl.classList.add('active-months')
        divEl.textContent = index.toString()
        index++
        el.appendChild(divEl)
    }

    index = daysInMonth + firstDayOfWeekIndex

    if (index < 42) {
        let nextMonthStart = 1
        for (let i = index; i <= 42; i++) {
            let el = document.getElementById(`${i}`)
            el.classList.add('notActiveCell')
            const divEl = el.querySelector('.numberOfMonth');
            divEl.textContent = nextMonthStart.toString()
            nextMonthStart++
            el.appendChild(divEl)
        }
    }
}

function getTodayDate() {
    const currentDate = new Date();
    const dayOfMonth = currentDate.getDate();
    todayDayIndex = Math.min(Math.max(dayOfMonth, 1), 31)
}

function findDate(arg) {
    const [daySearch,monthSearch,yearSearch] = arg.split(' ')
    let year
    let month
    let numberOfMonth
    events.forEach(el => {
        if (el.author.toLowerCase().indexOf(arg.toLowerCase()) > -1  || el.eventDescription.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
            year = el.date.year
            month = el.date.month
            numberOfMonth = el.date.numberOfMonth
            return
        }

        if(+daySearch === el.date.numberOfMonth && el.date.month === +monthsRuWithDeclination[monthSearch] && +yearSearch === el.date.year ){
            year = el.date.year
            month = el.date.month
            numberOfMonth = el.date.numberOfMonth
        }
    })
    return {month,year,numberOfMonth}
}