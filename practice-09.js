//given an array of strings, return a composite array containing only words that start with "a", "b", or "g"

const filterStrings = (stringArr) =>
  stringArr.filter(
    (i) => i.charAt(0) == "a" || i.charAt(0) == "b" || i.charAt(0) == "g"
  )

//DON'T keep "a", "b", or "g"
const filterMore = (stringArr) =>
  stringArr.filter(
    (i) => !(i.charAt(0) == "a" || i.charAt(0) == "b" || i.charAt(0) == "g")
  )

const strings = [
  "george",
  "adam",
  "bertram",
  "cole",
  "michael",
  "kevin",
  "gary",
  "billy",
  "aaron",
  "elliot",
  "rami",
]

console.log(filterStrings(strings))

console.log(filterMore(strings))
