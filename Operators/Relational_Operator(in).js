let car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2022
  };
  
  // Checking if a property exists using the 'in' operator
  let hasMake = 'make' in car;
  let hasColor = 'color' in car;
  
  // Outputting the results
  console.log('Has make property:', hasMake); // Output: true
  console.log('Has color property:', hasColor); // Output: false
  
