function mergeSort(arr) {
  // Base case
  let len = arr.length;
  if (len === 1) {
    return arr;
  } else {
    // Sort left and right halves
    let leftHalf, rightHalf;
    // Even number of elements in array
    if (len % 2 === 0) {
      leftHalf = arr.slice(0, (len / 2));
      rightHalf = arr.slice((len / 2), len);
    } else {
      // Odd number of elements in array
      leftHalf = arr.slice(0, (len - 1) / 2);
      rightHalf = arr.slice((len - 1) / 2, len);
    }

    let sortedLH, sortedRH;
    sortedLH = mergeSort(leftHalf);
    sortedRH = mergeSort(rightHalf);
    // Merging
    let mergedArr = [];
    for (let i = 0, j = 0; i < sortedLH.length && j < sortedRH.length; ) {
      if (sortedLH[i] < sortedRH[j]) {
        mergedArr.push(sortedLH[i]);
        sortedLH.shift();
        if (sortedLH.length === 0) {
          // There are no elements left in left half, add all elements of right half to merged array
          sortedRH.forEach((elem) => {
            mergedArr.push(elem);
          });
          break;
        }
      } else {
        mergedArr.push(sortedRH[j]);
        sortedRH.shift();
        if (sortedRH.length === 0) {
          // There are no elements left in right half, add all elements of left half to merged array
          sortedLH.forEach((elem) => {
            mergedArr.push(elem);
          });
          break;
        }
      }
    }

    return mergedArr;
  }
}

console.log(mergeSort([204, 10, 67, 10045, 2, 954, 3861]));