function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    if (!weight || !height || weight <= 0 || height <= 0) {
        document.getElementById("bmiResult").textContent =
            "Please enter valid weight and height.";
        return;
    }

    const heightMeters = height / 100;
    const bmi = weight / (heightMeters * heightMeters);

    let category;

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 25) {
        category = "Normal weight";
    } else if (bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obesity";
    }

    document.getElementById("bmiResult").textContent =
        `BMI: ${bmi.toFixed(1)} — ${category}`;
}