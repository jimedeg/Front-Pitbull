const actualyear = 2023;
const locale = 'es-ES';


const weekDays = [...Array(7).keys()]
const intlweekDay = new Intl.DateTimeFormat(locale, { weekday: 'long' });

const weekDaysNames = weekDays.map((weekDayIndex) => {
    const date = new Date(actualYear, 0, weekDayIndex + 1);
    const weekDayName = intlweekDay.format(date);
    return weekDayName;
});

const renderedWeekDays = weekDaysNames.map((weekDayName) => `<li class='day-name'>${weekDayName}</li>`).join('')



const months = [...Array(12).keys()]
const intl = new Intl.DateTimeFormat(locale, { month: 'long' });

const calendar = months.map((monthKey) => {
    const monthName = intl.format(new Date(actualYear, monthKey));

    const daysOfMonth = new Date(actualYear, monthKey + 1, 0).getDate();

    return { 
        monthName,
        daysOfMonth,
        startsOn: 0,
    };
});

const html = calendar.map((monthName) => {
    const days = [...Array(daysOfMonth).keys()]
    const renderedDays = days.map(day => `<li>${day + 1}</li>`).join('')

    const title = ` <h1> ${monthName} ${actualYear} </h1> `

    
    return '${title}<ol>${renderedWeekDays} ${renderedDays}</ol>'
}).join('')

document.querySelector('div').innerHTML = html

console.log(calendar)