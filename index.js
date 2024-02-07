console.log("ES1_HW_2");

console.log("\nProgram 1:");
function calculateSalary(hoursWorked, hourlyRate) {
  const totalSalary = hourlyRate * hoursWorked;
  return totalSalary;
}

console.log(calculateSalary(20, 100));

console.log("\nProgram 2:");

function calculateBonus(workedHours, marks, salary) {
  let updatedSalary = salary;
  if (workedHours > 25 && marks > 85) {
    updatedSalary = salary + (salary / 100) * 10;
    return updatedSalary;
  } else if (workedHours > 15 && marks > 75) {
    updatedSalary = salary + (salary / 100) * 5;
    return updatedSalary;
  }
  return updatedSalary;
}

console.log(calculateBonus(20, 80, 5000));

console.log("\nProgram 3:");

function calculateFinalAmount(price1, quantity1, price2, quantity2) {
  const totalPriceQuantity1 = price1 * quantity1;
  const totalPriceQuantity2 = price2 * quantity2;
  const totalAmount = totalPriceQuantity1 + totalPriceQuantity2;
  return totalAmount;
}

console.log(calculateFinalAmount(200, 10, 500, 5));

console.log("\nProgram 4:");

function calculateAllowance(age, isStudent, baseAllowance) {
  let updatedBaseAllowance = baseAllowance;
  if (age < 18 && isStudent === true) {
    updatedBaseAllowance = baseAllowance + 100;
    return updatedBaseAllowance;
  } else if (age >= 18 || (age <= 25 && isStudent === true)) {
    updatedBaseAllowance = baseAllowance + 50;
    return updatedBaseAllowance;
  }
  return baseAllowance;
}

console.log(calculateAllowance(16, true, 500));

console.log("\nProgram 5:");

function calculateShippingCost(totalWeight, country, baseCost) {
  let updatedBaseCost = baseCost;
  if (totalWeight <= 1 && country === "Local") {
    updatedBaseCost = baseCost + 10;
    return updatedBaseCost;
  } else if (totalWeight > 1 && country === "International") {
    updatedBaseCost = baseCost + 20;
    return updatedBaseCost;
  }
  return baseCost;
}

console.log(calculateShippingCost(0.5, "Local", 50));
