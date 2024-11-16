function quickSort(arr) {
  quickSort_c(arr, 0, arr.length - 1);
}

function quickSort_c(arr, p, r) {
  if (p >= r) return;
  let q = partition(arr, p, r);
  quickSort_c(arr, p, q - 1);
  quickSort_c(arr, q + 1, r);
}

function partition(arr, p, r) {
  let i = p;
  let j = p;
  while (j < r) {
    if (arr[j] < arr[r]) {
      swap(arr, j, i);
      i++;
    }
    j++;
    console.log(arr);
  }
  swap(arr, i, j);
  return i;
}

function swap(arr, i, r) {
  let temp = arr[i];
  arr[i] = arr[r];
  arr[r] = temp;
}

var s = [32, 12, 56, 78, 76, 45, 36];
quickSort(s);
console.log(s);
