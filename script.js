// selecting elements using DOM
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const message = document.getElementById("message");
const result = document.getElementById("result");
const calculateBtn = document.getElementById("calculateBtn");

// BMI categories stored in ARRAY of OBJECTS
const bmiCategories = [
    {
        min: 0,
        max: 18.5,
        category: "Underweight",
        advice: "Increase nutritious food intake and maintain a healthy diet."
    },
    {
        min: 18.5,
        max: 25,
        category: "Normal weight",
        advice: "Excellent! Maintain your healthy lifestyle."
    },
    {
        min: 25,
        max: 30,
        category: "Overweight",
        advice: "Try regular exercise and balanced meals."
    },
    {
        min: 30,
        max: Infinity,
        category: "Obese",
        advice: "Consult a health professional and follow a healthy routine."
    }
];
 
// Event Listener

calculateBtn.addEventListener("click", calculateBMI);

// Main Function

function calculateBMI() {

    // Clear previous output
    message.textContent = "";
    result.innerHTML = "";

    // Get user inputs
    const weight = Number(weightInput.value);
    const heightCm = Number(heightInput.value);

    // Input Validation
    if (!weight || !heightCm) {
        message.textContent = "Please enter both weight and height.";
        return;
    }

    if (weight <= 0 || heightCm <= 0) {
        message.textContent = "Values must be greater than zero.";
        return;
    }

    if (weight > 300 || heightCm > 250) {
        message.textContent = "Please enter realistic values.";
        return;
    }

    // BMI Calculation
    const heightM = heightCm / 100;
    const bmi = weight / (heightM * heightM);

    // Find BMI Category using ARRAY
    let category = "";
    let advice = "";

    for (let item of bmiCategories) {
        if (bmi >= item.min && bmi < item.max) {
            category = item.category;
            advice = item.advice;
            break;
        }
    }

    // Display Result (DOM Manipulation)
    result.innerHTML = `
        <h3>Your BMI Result</h3>
        <p><strong>BMI:</strong> ${bmi.toFixed(1)}</p>
        <p><strong>Category:</strong> ${category}</p>
        <p><strong>Advice:</strong> ${advice}</p>
    `;

    // Reset Inputs
    weightInput.value = "";
    heightInput.value = "";
}
