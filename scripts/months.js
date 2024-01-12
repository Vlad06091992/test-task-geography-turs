Date.prototype.daysInMonth = function () {
    return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
};

const monthsRu = {
    0: 'Январь',
    1: 'Февраль',
    2: 'Март',
    3: 'Апрель',
    4: 'Май',
    5: 'Июнь',
    6: 'Июль',
    7: 'Август',
    8: 'Сентябрь',
    9: 'Октябрь',
    10: 'Ноябрь',
    11: 'Декабрь'
};


const monthsEn = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
};

let currentDate = new Date()
let currentYear = currentDate.getUTCFullYear()
let currentMonthIndex = currentDate.getUTCMonth()
let currentMonth = monthsRu[currentMonthIndex]
let daysInMonth
let firstMondayDate

function getMonthData(year, month) {
    const firstDayOfMonth = new Date(year, month, 1);
    daysInMonth = currentDate.daysInMonth()
    const dayOfWeek = firstDayOfMonth.getDay();
    const daysToAdd = dayOfWeek === 0 ? 1 : 9 - dayOfWeek;
    firstMondayDate = +(new Date(year, month - 1, daysToAdd).toString().split(' ')[2][1]);
    if (firstMondayDate === 8) {
        firstMondayDate = 1
    }
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











// Date.prototype.daysInMonth = function () {
//     return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
// };
//
// const monthsRu = {
//     0: 'Январь',
//     1: 'Февраль',
//     2: 'Март',
//     3: 'Апрель',
//     4: 'Май',
//     5: 'Июнь',
//     6: 'Июль',
//     7: 'Август',
//     8: 'Сентябрь',
//     9: 'Октябрь',
//     10: 'Ноябрь',
//     11: 'Декабрь'
// };
//
//
// const monthsEn = {
//     0: 'January',
//     1: 'February',
//     2: 'March',
//     3: 'April',
//     4: 'May',
//     5: 'June',
//     6: 'July',
//     7: 'August',
//     8: 'September',
//     9: 'October',
//     10: 'November',
//     11: 'December'
// };
//
// let currentDate = new Date()
// let currentYear = currentDate.getUTCFullYear()
// let currentMonthIndex = currentDate.getUTCMonth()
// let currentMonth = monthsRu[currentMonthIndex]
// let daysInMonth
// let firstMondayDate
//
// function getMonthData(year, month) {
//     const firstDayOfMonth = new Date(year, month, 1);
//     daysInMonth = currentDate.daysInMonth()
//     const dayOfWeek = firstDayOfMonth.getDay();
//     const daysToAdd = dayOfWeek === 0 ? 1 : 9 - dayOfWeek;
//     firstMondayDate = +(new Date(year, month - 1, daysToAdd).toString().split(' ')[2][1]);
//     if (firstMondayDate === 8) {
//         firstMondayDate = 1
//     }
// }
//
// function updateDate() {
//     currentYear = currentDate.getUTCFullYear();
//     currentMonthIndex = currentDate.getUTCMonth();
//     currentMonth = monthsRu[currentMonthIndex];
// }
//
//
// const setCurrentDate = (to) => {
//
//     if (to === 'today') {
//         currentDate = new Date()
//     } else {
//         currentDate.setMonth(currentDate.getMonth() + (to === 'next' ? +1 : -1))
//     }
//     updateDate()
// }
//
//
//
//
//
//
//
