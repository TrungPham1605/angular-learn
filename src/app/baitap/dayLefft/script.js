const nowTime = new Date();
const currentMonth = nowTime.getMonth();
const currentYear = nowTime.getFullYear();
const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
const currentDayOfMonth = nowTime.getDate();
const daysLeft = lastDayOfMonth - currentDayOfMonth;

document.getElementById('days-left').textContent = `${daysLeft} ngày còn lại`;
