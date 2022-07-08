let arr = 123;

function findMax(arr) {
  return new Promise((resolve, reject) => {
    if (arr instanceof Array) {
      let max = arr[0];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
          max = arr[i];
        }
      }
      resolve(max);
    } else {
      reject("Not an array!");
    }
  });
}

async function printResult() {
  try {
    const result = await findMax(arr);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

printResult();
