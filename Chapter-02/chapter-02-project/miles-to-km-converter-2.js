let miles = 130;

function milesToKM(mile) {
  let km = mile * 1.60934;
  return km;
}

console.log(
  "The distance of " + milesToKM(miles) + " kms is equal to " + miles + " miles"
);
