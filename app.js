  const updateArray = (array) => {

    const newIds = [];

    array.forEach(item => {
        // New sub array
        const uniqueIds = [];

        // Filter Array and remove duplicated array items
        const unique = array.filter(element => {
  
            const duplicate = uniqueIds.includes(element.id);
        
            if (!duplicate) {
                
                uniqueIds.push(element.id);
                return true;
            }
        });

        // Push sub array to newIds array

        newIds.push(unique);
    })

    return newIds
  
  }

// Tests

// Test 1
const arrOne = [
    {id: 1},
    {id: 2},
    {id: 2},
  ];
  
console.log(updateArray(arrOne));

// Test 2
const arrTwo = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 3},
    {id: 4},
  ];
  
console.log(updateArray(arrTwo));

// Test 3
const arrThree = [
    {id: 1},
    {id: 2},
    {id: 2},
    {id: 2},
    {id: 2},
    {id: 3},
  ];
  
console.log(updateArray(arrThree));

// Test 4
const arrFour = [
    {id: 1},
    {id: 1},
    {id: 2},
    {id: 2},
    {id: 3},
  ];
  
console.log(updateArray(arrFour));

// Test 5
const arrFive = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 5},
  ];
  
console.log(updateArray(arrFive));