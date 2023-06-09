export function cToF(celsius: number) {
  return +((celsius * 9) / 5 + 32).toFixed(1);
}

// export function fToC(fahrenheit: number) {
//   return (((fahrenheit - 32) * 5) / 9).toFixed(1);
// }

export function kmhToMph(kmh: number) {
  return +(kmh / 1.609).toFixed(1);
}

export function mmToIn(mm: number) {
  return +(mm / 25.4).toFixed(2);
}
