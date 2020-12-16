function firstAnagram(str1, str2) {
  for (let i = 0; i < str1.length; i++) {
    const el = str1[i];
    if (el !== str2.slice(str2.length - 1)) {
      return false;
    }
  }
  return true;
}

console.log(firstAnagram("gizmo", "sally"));    // => false
console.log(firstAnagram("elvis", "lives"));    // => true

function secondAnagram(str1, str2) {
  // Code goes here ....
}


function thirdAnagram(str1, str2) {
  // Code goes here ....
}


function fourthAnagram(str1, str2) {
  // Code goes here ....
}
