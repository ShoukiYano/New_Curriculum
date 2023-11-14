// 問題1: 引数で受け取った配列の要素をすべて合計し、その結果を返す関数sumArrayを作成してください。
function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

console.log(sumArray([1, 2, 3])); // 6が表示される


// ＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿

// 問題2: 引数で受け取った配列の中で最大の数値を返す関数findMaxを作成してください。
function findMax(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

console.log(findMax([1, 3, 2])); // 3が表示される

// ＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿

// 問題3: 引数で受け取った配列の中から特定の要素が存在するかどうかを確認し、存在する場合はその位置のインデックスを、存在しない場合は-1を返す関数findElementを作成してください。
function findElement(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return i;
        }
    }
    return -1;
}

console.log(findElement([1, 2, 3], 2)); // 1が表示される
console.log(findElement([1, 2, 3], 4)); // -1が表示される

// ＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿

// 問題4: 引数で受け取った配列の要素を逆順にして新しい配列を返す関数reverseArrayを作成してください。
function reverseArray(array) {
    let reversed = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversed.push(array[i]);
    }
    return reversed;
}

console.log(reverseArray([1, 2, 3])); // [3, 2, 1]が表示される

// ＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿

// 問題5: 引数で受け取った配列から特定の要素を除外した新しい配列を返す関数excludeElementを作成してください。
function excludeElement(array, elementToExclude) {
    let filteredArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== elementToExclude) {
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
}

console.log(excludeElement([1, 2, 3, 2, 4], 2)); // [1, 3, 4]が表示される

// ＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿

// 問題6: 引数で受け取った配列の中から奇数のみを含む新しい配列を返す関数filterOddNumbersを作成してください。
function filterOddNumbers(array) {
    let oddNumbers = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            oddNumbers.push(array[i]);
        }
    }
    return oddNumbers;
}

console.log(filterOddNumbers([1, 2, 3, 4, 5])); // [1, 3, 5]が表示される

// ＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿

// 問題7: 引数で受け取った文字列の配列を一つの文字列に結合して返す関数concatStringsを作成してください。
function concatStrings(array) {
    let result = '';
    for (let i = 0; i < array.length; i++) {
        result += array[i];
    }
    return result;
}

console.log(concatStrings(['Hello', ' ', 'World', '!'])); // 'Hello World!'が表示される

// ＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿

// 問題8: 引数で受け取った配列から重複する要素を削除し、重複のない要素だけを含む新しい配列を返す関数removeDuplicatesを作成してください。
function removeDuplicates(array) {
    let uniqueArray = [];
    for (let i = 0; i < array.length; i++) {
        if (uniqueArray.indexOf(array[i]) === -1) {
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
}

console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 4])); // [1, 2, 3, 4]が表示される

// ＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿

// 問題9: 引数で受け取った二次元配列の全ての要素を合計して返す関数sumMatrixを作成してください。
function sumMatrix(matrix) {
    let total = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            total += matrix[i][j];
        }
    }
    return total;
}

console.log(sumMatrix([[1, 2], [3, 4]])); // 10が表示される

// ＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿

// 問題10: 引数で受け取った配列の中で最小の数値を返す関数findMinを作成してください。
function findMin(array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

console.log(findMin([4, 2, 6, 1, 3])); // 1が表示される
