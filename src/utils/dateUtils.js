export const getDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

export const getFirstDay = (year, month) => {
  return new Date(year, month, 1).getDay();
};

export const getCalendarDays = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth();

  const days = getDaysInMonth(year, month);
  const firstDay = getFirstDay(year, month);

  const calendar = [];

  for (let i = 0; i < firstDay; i++) {
    calendar.push(null);
  }

  for (let i = 1; i <= days; i++) {
    calendar.push(new Date(year, month, i));
  }

  return calendar;
};