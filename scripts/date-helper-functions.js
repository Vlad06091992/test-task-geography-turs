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
    dayOfWeek = (dayOfWeek === 0) ? 7 : dayOfWeek;
    return dayOfWeek;
}

function updateDate() {
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
    getTodayDate()

    for (let i = 1; i <= 42; i++) {
        const el = document.getElementById(`${i}`)
        el.querySelector('.author').textContent = ''
        el.querySelector('.description').textContent = ''
        el.classList.remove('notActiveCell')
        el.classList.remove('todayCell')
        const divEl = el.querySelector('.numberOfMonth');
        divEl.textContent = ''
        divEl.classList.remove('active-months')
        divEl.classList.remove('todayDay')
    }

// debugger


    let index = 1
    let firstDayOfWeekIndex = getFirstDayOfWeekIndex(currentYear, currentMonthIndex);

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
        //currentMonthIndex -- index итерируемого месяца
        //i -- день в итерируемом месяце

        for(let j = 0; j < events.length;j++){
            console.log(events[j].date.month)
            console.log(events[j].date.numberOfMonth)


            if(events[j].date.month === currentMonthIndex && events[j].date.numberOfMonth === i){
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
            if (currentDate.getUTCMonth() === new Date().getUTCMonth() &&   new Date().getUTCFullYear() === currentYear) {
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
            const divEl = el.querySelector('div');
            divEl.classList.add('not-active-months')
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