/*
Inventory UpdatePassed
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item
quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should 
be in alphabetical order by item.
*/

function updateInventory(arr1, arr2) {
    // if item exist in inventry already just add up its quantity
        arr1.forEach(function(product1){
            arr2.forEach(function(product2){
                if(product1[1] === product2[1]){
                    product1[0] = product1[0] + product2[0];
                }
            });
        });
    //Case item does not exist in inventory already, get its name and quantity and insert in the inventory
        let indexOfItemsToInsert; 
        let curNames = arr1.map(([x,y]) => y)
        let newNames = arr2.map(([x,y]) => y)
    
        newNames.forEach(function(product){
          if(curNames.indexOf(product) < 0){
              indexOfItemsToInsert = newNames.indexOf(product)
              arr1.push(arr2[indexOfItemsToInsert])
          }
        })
    //Put the inventory in alphabetical order 
        return arr1.sort(function(a,b){
            if(a[1] < b[1]){
                return -1
            }
            if(a[1] > b[1]){
                return 1
            }
        })
    }
    
    
    // Example inventory lists
    var curInv = [
        [21, "Bowling Ball"],
        [2, "Dirty Sock"],
        [1, "Hair Pin"],
        [5, "Microphone"]
    ];
    
    var newInv = [
        [2, "Hair Pin"],
        [3, "Half-Eaten Apple"],
        [67, "Bowling Ball"],
        [7, "Toothpaste"]
    ];
    

    console.log(updateInventory(curInv, newInv))
/*
[
  [ 88, 'Bowling Ball' ],
  [ 2, 'Dirty Sock' ],
  [ 3, 'Hair Pin' ],
  [ 3, 'Half-Eaten Apple' ],
  [ 5, 'Microphone' ],
  [ 7, 'Toothpaste' ]
]
*/
console.log(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []))
/*
[
  [ 21, 'Bowling Ball' ],
  [ 2, 'Dirty Sock' ],
  [ 1, 'Hair Pin' ],
  [ 5, 'Microphone' ]
]
*/

console.log(updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]))
/*
[
  [ 67, 'Bowling Ball' ],
  [ 2, 'Hair Pin' ],
  [ 3, 'Half-Eaten Apple' ],
  [ 7, 'Toothpaste' ]
]
*/
console.log(updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], 
[1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]))
/*
[
  [ 1, 'Bowling Ball' ],
  [ 0, 'Dirty Sock' ],
  [ 1, 'Hair Pin' ],
  [ 1, 'Half-Eaten Apple' ],
  [ 0, 'Microphone' ],
  [ 1, 'Toothpaste' ]
]
*/
  