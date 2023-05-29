export function cToF(celsius: number) {
  return (celsius * 9) / 5 + 32;
}

export function fToC(fahrenheit: number) {
  return ((fahrenheit - 32) * 5) / 9;
}
