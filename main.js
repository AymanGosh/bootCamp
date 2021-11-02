Array.prototype.splice = function (start, deleteCount, ...items) {
  const data = this;

  // we collect the splice array here
  let resultArray = [];
  var stop = data.length;

  // this function copies array to the this array. Since we cannot directly re-assign the this array.
  function copy(source, self) {
    for (let index = 0; index < source.length; index++) {
      self[index] = source[index];
    }
    self.length = source.length;
  }

  // if deleteCount is defined
  if (deleteCount) {
    // we add it to start. This gives us the index we will stop in the data array.
    stop = start + deleteCount;

    // if deleteCount is negative, we splice no array
    if (deleteCount < 0) stop = 0;
  }

  // we loop cut the array
  for (let i = start; i < stop; i++) {
    const elem = data[i];
    resultArray.push(elem);
  }

  // remove 1 element
  if (!deleteCount && items.length <= 0) {
    var gatherArr = [];
    for (let i = 0; i < start; i++) {
      var elem = data[i];
      gatherArr.push(elem);
    }
    copy(gatherArr, this);
  }

  // if deleteCount is defined but items is empty
  if (deleteCount && items.length <= 0) {
    var deleteArr = [];
    // we get elements before the start index and after the stop index, these elements. We use the 'copy' function to set them to 'this' array
    for (let i = 0; i < data.length; i++) {
      var elem = data[i];
      if (i === start) {
        i = stop - 1;
      } else {
        deleteArr.push(elem);
      }
    }
    // we set the elements collected in the deleteArr array to this this array. Direct assignment 'this = deleteArr' would throw error
    copy(deleteArr, this);
  }

  // if there is something in the items array
  if (items.length > 0 && start != 0 && deleteCount != 0) {
    var gatherArr = [];
    // we get the elements before start index and elements after the stop index, then we push the elements in items array in between them.
    for (let i = 0; i < data.length; i++) {
      var elem = data[i];
      if (i === start) {
        gatherArr = [...gatherArr, ...items];
        i = stop - 1;
      } else {
        gatherArr.push(elem);
      }
    }
    copy(gatherArr, this);
  }

  // if we want to add just 1 elment
  if (start === 0 && deleteCount === 0 && items.length === 1) {
    var gatherArr = [];
    gatherArr = [...gatherArr, ...items];
    for (let i = 0; i < data.length; i++) {
      gatherArr.push(data[i]);
    }
    copy(gatherArr, this);
  }

  if (start != 0 && deleteCount === 0 && items.length != 0) {
    resultArray = [];
  }

  // we return the spliced elements
  return resultArray;
};

// delete all elements from index to end
let arr = [1, 2, 3, 4, 5];
arr.splice(1);
console.log(arr); //should be [1]

// returns array of deleted elements
arr = [1, 2, 3];
let deleted = arr.splice(1);
console.log(deleted); //should be [2,3]

//////////////////////////////////////////////////////////////////////////////////////

// remove 1 element
arr = [1, 2, 3];
arr.splice(0, 1);
console.log(arr); //should be [2,3]

// returns an array of the deleted element (1 element)
arr = [1, 2, 3];
deleted = arr.splice(1, 1);
console.log(deleted); //should be [2]

////////////////////////////////////////////////////////////////////////////////////
// add 1 element
arr = [1, 2, 3];
arr.splice(0, 0, 0);
console.log(arr); //should be [0,1,2,3]

// replace 1 element
arr = [1, 2, 3];
arr.splice(1, 1, 55);
console.log(arr); //should be [1,55,3]

// returns an empty array when no elements are deleted
arr = [1, 2, 3];
deleted = arr.splice(1, 0, 5);
console.log(deleted); //should be []
