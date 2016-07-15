var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  var new_array = [element, ...array]
  return new_array
}

function descructivelyAddElementToBeginningOfArray(array, element) {
   array.unshift(element)
   return array
}

function addElementToEndOfArray(array, element) {
  var new_array = [...array, element]
  return new_array
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function removeElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromEndOfArray(array) {
  array.pop()
  return array
}
