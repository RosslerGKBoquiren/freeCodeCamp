function golfScore(par, strokes) {
    if (strokes == 1) {
      return "Hole-in-one!";
    } else if (strokes <= par - 2) {
      return "Eagle";
    } else if (strokes == par -1) {
      return "Birdie"
    } else if (strokes == par) {
      return "Par";
    } else if (strokes == par + 1) {
      return "Bogey";
    } else if (strokes == par + 2) {
      return "Double Bogey"; 
    } else if (strokes >= par + 3) {
      return "Go Home!";
    } else {
      return "Change Me";
    }
  }


// To pass the code, the function should return the following:

// golfScore(4, 1) should return the string Hole-in-one!
// golfScore(4, 2) should return the string Eagle
// golfScore(5, 2) should return the string Eagle
// golfScore(4, 3) should return the string Birdie
// golfScore(4, 4) should return the string Par
// golfScore(1, 1) should return the string Hole-in-one!
// golfScore(5, 5) should return the string Par
// golfScore(4, 5) should return the string Bogey
// golfScore(4, 6) should return the string Double Bogey
// golfScore(4, 7) should return the string Go Home!
// golfScore(5, 9) should return the string Go Home!