export function cToF(celsius: number) {
  return (celsius * 9) / 5 + 32;
}

export function fToC(fahrenheit: number) {
  return ((fahrenheit - 32) * 5) / 9;
}

export function checkTime(i: number): string {
  if (i < 10) {
    return '0' + i.toString();
  } // add zero in front of numbers < 10
  return i.toString();
}

export function hourTo12(hour: number) {
  return hour + (24 % 12) || 12;
}
