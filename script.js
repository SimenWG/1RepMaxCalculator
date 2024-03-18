function calculate1RepMax() {
    var weight = parseFloat(document.getElementById('weight').value);
    var reps = parseFloat(document.getElementById('reps').value);
  
    if (isNaN(weight) || isNaN(reps)) {
      document.getElementById('result').innerHTML = 'Legg til et gyldig verdi for vekt og repetisjoner';
      return;
    }
  
    var weightInPounds = weight * 2.20462;
  
    var oneRepMax = weightInPounds * (1 + (reps / 30));
  
    var oneRepMaxInKgs = oneRepMax / 2.20462;
  
    document.getElementById('result').innerHTML = 'Din Kalkulerte 1 Rep Max Er: ' + oneRepMaxInKgs.toFixed(2) + ' kg';
  }
  