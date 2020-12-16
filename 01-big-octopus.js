function quadraticBiggestFish(fishes) {

  for (let i = 0; i < fishes.length - 1; i++) {
    let fish1 = fishes[i];
    for (let j = i + 1; j < fishes.length; j++) {
      let fish2 = fishes[j];
      if (fish1.length > fish2.length) {
        fishes[j] = fishes[i];
      }
    }
  }
  return fishes[fishes.length - 1];
}

 nlognBiggestFish = (fishes) => fishes.sort((a, b) => a.length - b.length)[fishes.length - 1]
 
 function linearBiggestFish(fishes) {
   let largestFish = fishes[0]
   for (let i = 1; i < fishes.length; i++) {
     if (fishes[i].length > largestFish.length) largestFish = fishes[i];
   }
   return largestFish;
 }
  
 tilesArray = ["up", "right-up", "right", "right-down", "down", "left-down", "left", "left-up"]
 function slowDance(direction, tilesArray) {
   
  }

tilesObj = {
  "up": 0,
  "right-up": 1,
  "right": 2,
  "right-down": 3,
  "down": 4,
  "left-down": 5,
  "left": 6,
  "left-up": 7
}
// function fastDance(direction, tilesObj) {
//   // Code goes here ....
// }
