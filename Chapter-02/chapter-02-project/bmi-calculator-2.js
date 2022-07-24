function MeterConvert(inch) {
  let meter = (inch * 2.54) / 100;
  return meter;
}

function KiloConvert(pound) {
  let kilo = pound / 2.2046;
  return kilo;
}

function BMIcalculator(inches, pounds) {
  let yourBMI = KiloConvert(pounds) / MeterConvert(inches) ** 2;
  return yourBMI;
}

console.log("My BMI is " + BMIcalculator(63, 120));
