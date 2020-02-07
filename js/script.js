function calculateBmi() {
  const weight = document.getElementById('weight').value;
	const height = document.getElementById('height').value;
 
	if (weight > 0 && height > 0) {	
		let bmi = weight/(height/100*height/100);
		document.getElementById('bmi').value = bmi;
 
		if (bmi < 18.5) {
			document.getElementById('result').value = "You are too thin.";
		}
		if (bmi > 18.5 && bmi < 24.9) {
			document.getElementById('result').value = "You are healthy.";
		}
		if (bmi > 25) {
			document.getElementById('result').value = "You are overweight.";
		}
	}
	  else {
		alert("Please enter something first!")
	}
}

