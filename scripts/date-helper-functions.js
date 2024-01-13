Date.prototype.daysInMonth = function () {
    return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
};

function getMonthData() {
    const firstDayOfMonth = new Date(currentYear, currentMonthIndex, 1,-1);
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

    for (let i = 1; i <= 42; i++) {
        const el = document.getElementById(`${i}`)
        const divEl = el.querySelector('div');
        divEl.textContent = ''
        divEl.classList.remove('active-months')
    }

    let index = 1
    for (let i = getFirstDayOfWeekIndex(currentYear, currentMonthIndex); i <= daysInMonth + getFirstDayOfWeekIndex(currentYear, currentMonthIndex); i++) {
        if (index > daysInMonth) break
        let el = document.getElementById(`${i}`)
        const divEl = el.querySelector('div');
        divEl.classList.add('active-months')
        divEl.textContent = index.toString()
        index++
        el.appendChild(divEl)
    }
}

