// tsk1

function calculateDistance(x1, x2) {
  return Math.abs(x2 - x1);
}

console.log(calculateDistance(0, 5));

export { calculateDistance };

// tsk2

function calculateSegmentProduct(A, B, C) {
  return Math.abs((C - A) * (C - B));
}

console.log(calculateSegmentProduct(0, 5, 2));

export { calculateSegmentProduct };

// tsk3

function calculateKilobytes(fileSizeInBytes) {
  return Math.floor(fileSizeInBytes / 1024);
}

console.log(calculateKilobytes(2048));

export { calculateKilobytes };

// tsk4

function calculateDigitSum() {

}

export { calculateDigitSum };
