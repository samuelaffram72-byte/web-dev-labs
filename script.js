const zipPattern = /^\d{5}$/;
const isValidZip = zipPattern.test(zipInput.Value);
console.log(isValidZip); //true or false
