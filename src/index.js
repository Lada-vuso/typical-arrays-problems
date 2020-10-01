
exports.min = function min (array) {
  if (array !== undefined) {
    if (array.length !== 0) {
      let result = Math.min(...array);
      return result;
    } else return 0;
  } else return 0;
};

exports.max = function max (array) {
  if (array !== undefined) {
    if (array.length !== 0) {
      let result = Math.max(...array);
      return result;
    } else return 0;
  } else return 0;
};
 

exports.avg = function avg (array) {
  if (array !== undefined) {
    if (array.length !== 0) {
      let result = array.reduce((a, b) => a+b) / array.length;
      return result;
    } else return 0;
  } else return 0;
};