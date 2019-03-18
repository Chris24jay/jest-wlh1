export function update(a, b) {
  if (a && b) {
    return a + b;
  } else {
    return 'pass something in you idiot'
  }
}


export function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 0;
  } else {
    return a + b;
  }
}
