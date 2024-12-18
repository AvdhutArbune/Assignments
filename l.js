let obj = [
    { name: "Alice", age: 20, marks: { math: 85, science: 90, english: 88 } },
    { name: "Avdhut", age: 21, marks: { math: 88, science: 99, english: 98 } },
    { name: "Vikas", age: 22, marks: { math: 81, science: 80, english: 89 } }
  ];
  
  obj.push({ name: "Vijay", age: 23, marks: { math: 80, science: 80, english: 85 } });
  
  // Loop through the array
  for (let i = 0; i < obj.length; i++) {
    console.log(`${obj[i].name}'s marks:`);
  
    // Use a `for-in` loop to iterate through the properties of the marks object
    for (let subject in obj[i].marks) {
      console.log(`${subject}: ${obj[i].marks[subject]}`);
    }
  }

  