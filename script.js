const metricRadio = document.getElementById("metric");
const imperialRadio = document.getElementById("imperial");
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const heightInput2 = document.getElementById("height2");
const weightInput2 = document.getElementById("weight2");
const resultOutput = document.getElementById("result");

metricRadio.checked = true;

function calculateBMI() {
  let heightCm = parseFloat(document.getElementById("height").value);
  let weightKg = parseFloat(document.getElementById("weight").value);
  let heightFeet = parseFloat(document.getElementById("height").value);
  let heightInches = parseFloat(document.getElementById("height2").value);

  let weightStones = parseFloat(document.getElementById("weight").value);
  let weightPounds = parseFloat(document.getElementById("weight2").value);
  let bmi;

  let heightFeetInches = heightFeet * 12;
  let heightInchesTotal = heightFeetInches + heightInches;

  let weightStonesPounds = weightStones * 14;
  let weightPoundsTotal = weightStonesPounds + weightPounds;

  if (metricRadio.checked) {
    if (
      (isNaN(heightCm) && isNaN(weightKg)) ||
      heightCm <= 0 ||
      weightKg <= 0
    ) {
      result.innerHTML = "Please enter a valid height and weight!";
      return;
    } else if (isNaN(heightCm) || heightCm <= 0) {
      result.innerHTML = "Please enter a valid height!";
      return;
    } else if (isNaN(weightKg) || weightKg <= 0) {
      result.innerHTML = "Please enter a valid weight!";
      return;
    }
  } else if (imperialRadio.checked) {
    if (
      (isNaN(heightFeet) &&
        isNaN(heightInches) &&
        isNaN(weightStones) &&
        isNaN(weightPounds)) ||
      (heightFeet <= 0 &&
        heightInches <= 0 &&
        weightStones <= 0 &&
        weightPounds <= 0)
    ) {
      result.innerHTML = "Please enter a valid height and weight!";
      return;
    } else if (
      isNaN(heightFeet) &&
      isNaN(heightInches) &&
      isNaN(weightPounds)
    ) {
      result.innerHTML =
        "Please write a valid height, and write 0 in the empty field if you have written the stones.";
      return;
    } else if (
      isNaN(weightStones) &&
      isNaN(heightFeet) &&
      isNaN(heightInches)
    ) {
      result.innerHTML =
        "Please write a valid height and 0 in the empty field if you have written the pounds.";
      return;
    } else if (
      (isNaN(heightFeet) && isNaN(heightInches)) ||
      (heightFeet <= 0 && heightInches <= 0)
    ) {
      result.innerHTML = "Please enter a valid height!";
      return;
    } else if (
      isNaN(heightFeet) &&
      isNaN(weightStones) &&
      isNaN(weightPounds)
    ) {
      result.innerHTML =
        "Please write a valid weight and 0 in the empty field if you have written the inches.";
      return;
    } else if (
      isNaN(heightInches) &&
      isNaN(weightPounds) &&
      isNaN(weightStones)
    ) {
      result.innerHTML =
        "Please write a valid weight and 0 in the empty field if you have written the feet.";
      return;
    } else if (
      (isNaN(weightStones) && isNaN(weightPounds)) ||
      (weightStones <= 0 && weightPounds <= 0)
    ) {
      result.innerHTML = "Please enter a valid weight!";
      return;
    } else if (
      (isNaN(heightFeet) && isNaN(weightStones)) ||
      (isNaN(heightInches) && isNaN(weightPounds))
    ) {
      result.innerHTML =
        "Please write a valid height and weight, or 0 in the empty fields!";
      return;
    } else if (
      isNaN(heightFeet) ||
      isNaN(heightInches) ||
      isNaN(weightStones) ||
      isNaN(weightPounds)
    ) {
      result.innerHTML =
        "Please write a valid height and weight, or 0 in the empty field!";
      return;
    }
  }

  if (metricRadio.checked) {
    bmi = weightKg / ((heightCm * heightCm) / 10000);
  } else if (imperialRadio.checked) {
    bmi = (weightPoundsTotal / (heightInchesTotal * heightInchesTotal)) * 703;
  }

  result.innerHTML = "Your BMI is: " + bmi.toFixed(2) + "<br>";

  if (bmi < 18.5) {
    result.innerHTML += "Underweight";
  } else if (bmi < 25) {
    result.innerHTML += "Normal weight";
  } else if (bmi < 30) {
    result.innerHTML += "Overweight";
  } else if (bmi < 35) {
    result.innerHTML += "Obese (Class I)";
  } else if (bmi < 40) {
    result.innerHTML += "Obese (Class II)";
  } else {
    result.innerHTML += "Obese (Class III)";
  }
}

function expandContainer() {
  let container = document.getElementById("container");
  container.style.height = "400px";
}

function handleRadioChange() {
  if (metricRadio.checked) {
    heightInput.placeholder = "cm";
    weightInput.placeholder = "kg";
  } else if (imperialRadio.checked) {
    heightInput.placeholder = "Feet";
    heightInput2.placeholder = "Inches";
    weightInput.placeholder = "Stones";
    weightInput2.placeholder = "Pounds";
  }
}

metricRadio.addEventListener("change", handleRadioChange);
imperialRadio.addEventListener("change", handleRadioChange);

function hide() {
  if (metricRadio.checked) {
    document.getElementById("height2").style.display = "none";
    document.getElementById("weight2").style.display = "none";
  } else if (imperialRadio.checked) {
    document.getElementById("height").style.display = "inline-block";
    document.getElementById("height2").style.display = "inline-block";
    document.getElementById("weight").style.display = "inline-block";
    document.getElementById("weight2").style.display = "inline-block";
  }
}

metricRadio.addEventListener("change", hide);
imperialRadio.addEventListener("change", hide);

function resetForm() {
  if (metricRadio.checked || imperialRadio.checked) {
    heightInput.value = "";
    heightInput2.value = "";
    weightInput.value = "";
    weightInput2.value = "";
    resultOutput.innerHTML = "";
  }
}
metricRadio.addEventListener(resetForm);
imperialRadio.addEventListener(resetForm);
