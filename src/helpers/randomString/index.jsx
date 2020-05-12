export default (iterations) => {
  let letters = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let result = ''
  for (let i = 0; i <= iterations; i++) {
    result += letters[Math.floor(Math.random()*letters.length)];
  }
  return result
}
