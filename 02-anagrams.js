function firstAnagram(str1, str2) {
  for (let i = 0; i < str1.length; i++) {
    const el = str1[i];
    let targetIdx = str2.indexOf(el)
    if (targetIdx === -1) return false;
    else if (el === str2[targetIdx]) {
      str2 = str2.slice(0, targetIdx) + str2.slice(targetIdx + 1)
    }
  }
  return str2.length === 0
}

// console.log(firstAnagram("gizmo", "sally"));    // => false
// console.log(firstAnagram("elvis", "lives"));    // => true

secondAnagram = (str1, str2) => {
  return str1.split('').sort((a, b) => a - b).join('') == str2.split('').sort((a, b) => a - b).join('')
}


console.log(secondAnagram("gizmo", "sally"));    // => false
console.log(secondAnagram("elvis", "lives"));    // => true


function thirdAnagram(str1, str2) {
  // Code goes here ....
}


function fourthAnagram(str1, str2) {
  // Code goes here ....
}
