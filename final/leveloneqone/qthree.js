function Byear() {
    var ageInput = document.getElementById("ageInput").value;
    var currentYear = new Date().getFullYear();
    var birthYear = currentYear - ageInput;
    var generation;
  
    if (birthYear >= 1946 && birthYear <= 1964) {
      generation = "You are a member of the Baby Boomer Generation!";
    } else if (birthYear >= 1965 && birthYear <= 1980) {
      generation = "You are part of Generation X!";
    } else if (birthYear >= 1981 && birthYear <= 1996) {
      generation = "You belong in the Y Generation!";
    } else if (birthYear >= 1997 && birthYear <= 2012) {
      generation = "Generation Z is your generation!";
    } else if (birthYear >= 2013 && birthYear <= 2025) {
      generation = "You are part of Generation Alpha.";
    } else {
      generation = "Sorry - your generation is not listed.";
    }
    document.getElementById("result").innerHTML = generation;
  }
  