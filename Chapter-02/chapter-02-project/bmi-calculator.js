let heightInInch = 63;
let weightInPound = 130;

let heightInCm = heightInInch * 2.54;
let weightInKg = weightInPound / 2.2046;

let bmi = weightInKg / (heightInCm / 100) ** 2;

console.log("Height(in cm):" + heightInCm);
console.log("Weight(in kg):" + weightInKg);
console.log("BMI:" + bmi);
