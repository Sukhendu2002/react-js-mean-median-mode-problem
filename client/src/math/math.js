const calmean = (data) => {
  const sum = data.reduce((acc, curr) => acc + curr, 0);
  const mean = sum / data.length;
  //return upto 6 decimal places
  return Math.round(mean * 1000000) / 1000000;
};

const calmedian = (data) => {
  const sortedData = data.sort((a, b) => a - b);
  const median = sortedData[Math.floor(sortedData.length / 2)];
  return Math.round(median * 1000000) / 1000000;
};

const calmode = (data) => {
  //calculate the mode of the data array;
  let i = 0;
  let maxCount = 0;
  let mode = 0;
  while (i < data.length) {
    let count = 0;
    let j = 0;
    while (j < data.length) {
      if (data[i] === data[j]) {
        count++;
      }
      j++;
    }
    if (count > maxCount) {
      maxCount = count;
      mode = data[i];
    }
    i++;
  }
  return Math.round(mode * 1000000) / 1000000;
};

const calsd = (arr) => {
  let mean =
    arr.reduce((acc, curr) => {
      return acc + curr;
    }, 0) / arr.length;

  arr = arr.map((k) => {
    return (k - mean) ** 2;
  });
  let sum = arr.reduce((acc, curr) => acc + curr, 0);

  let variance = sum / arr.length;
  //return upto 6 decimal places
  return Math.round(Math.sqrt(variance) * 1000000) / 1000000;

};

export { calmean, calmedian, calmode, calsd };
