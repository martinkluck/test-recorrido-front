export const currentWeekOfYear = (): number => {
  const date = new Date();
  const year = date.getFullYear();
  const day = date.getDate();
  const dayOfYear = new Date(year, 0, 1).getDay();
  const week = Math.ceil(((dayOfYear + day) / 7 - 1) / 4);
  return week;
};

function getWeekNumber(y: number): number {
  const d = new Date(y, 0, 1);
  const isLeap = new Date(y, 1, 29).getMonth() === 1;
  return d.getDay() === 4 || (isLeap && d.getDay() === 3) ? 53 : 52;
}

function weeksInYear(year: number) {
  const month = 11;
  let day = 31,
    week = 0,
    d = new Date(year, month, day);
  do {
    d = new Date(year, month, day--);
    week = getWeekNumber(d.getFullYear());
  } while (week == 1);

  return week;
}

export const arrOfNumberOfWeeks = (): number[] => {
  const weeks = [];
  for (
    let i = currentWeekOfYear();
    i <= weeksInYear(new Date().getFullYear());
    i++
  ) {
    weeks.push(i);
  }
  return weeks;
};

export function getDateOfWeek(w: number, y: number): Date {
  const d = 1 + (w - 1) * 7;

  return new Date(y, 0, d);
}
