const decToBinary = (dec) => {
  if (dec >= 0) {
    return dec.toString(2);
  } else {
    return (~dec).toString(2);
  }
};

console.log(decToBinary(17));
