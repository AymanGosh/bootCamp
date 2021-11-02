Array.prototype.splice = function (start, deleteCount, ...items) {
  const data = this;

  let resultArray = [];
  var stop = data.length;

  function copy(source, self) {
    for (let index = 0; index < source.length; index++) {
      self[index] = source[index];
    }
    self.length = source.length;
  }

  if (deleteCount) {
    stop = start + deleteCount;
    if (deleteCount < 0) stop = 0;
  }

  for (let i = start; i < stop; i++) {
    const elem = data[i];
    resultArray.push(elem);
  }

  // delete all elements from index to end
  // returns array of deleted elements
  if (!deleteCount && items.length <= 0) {
    var gatherArr = [];
    for (let i = 0; i < start; i++) {
      var elem = data[i];
      gatherArr.push(elem);
    }
    copy(gatherArr, this);
  }

  // remove 1 element
  // returns an array of the deleted element (1 element)
  if (deleteCount && items.length <= 0) {
    var deleteArr = [];
    for (let i = 0; i < data.length; i++) {
      var elem = data[i];
      if (i === start) {
        i = stop - 1;
      } else {
        deleteArr.push(elem);
      }
    }
    copy(deleteArr, this);
  }
  // replace 1 element
  if (items.length > 0 && start != 0 && deleteCount != 0) {
    var gatherArr = [];
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
  // add 1 element
  if (start === 0 && deleteCount === 0 && items.length === 1) {
    var gatherArr = [];
    gatherArr = [...gatherArr, ...items];
    for (let i = 0; i < data.length; i++) {
      gatherArr.push(data[i]);
    }
    copy(gatherArr, this);
  }
  // returns an empty array when no elements are deleted
  if (start != 0 && deleteCount === 0 && items.length != 0) {
    resultArray = [];
  }

  return resultArray;
};
//////////////////////////////////////////////////////////////////////////////////
/*Testing*/

// delete all elements from index to end
let arr = [1, 2, 3, 4, 5];
arr.splice(1);
console.log(arr); // should be [1]

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
