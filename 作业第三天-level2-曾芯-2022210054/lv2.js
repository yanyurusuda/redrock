let arr = [1,[2,3],[4,5,[6,7,8]],9];
function flatten(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        result = result.concat(flatten(arr[i]));
      } else {
        result.push(arr[i]);
      }
    }
    return result;
  }
  console.log(flatten(arr));

//   方法二
  function flatten(arr) {
    return arr.reduce((pre, current) => {
      if (Array.isArray(current)) {
        return pre.concat(flatten(current));
      } else {
        return pre.concat(current);
      }
    }, []);
  }

 