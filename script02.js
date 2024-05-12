const str = "khkhka";

function sliceStr(str) {
  let newStr = str.split("");
  for (let i = 0; i < newStr.length; i++) {
    let j = str.replace(newStr[i], '');
    checkPalindrome(j, newStr[i])
  }
}

function checkPalindrome(str, delStr) {
  let rev = str.split("").reverse().join("");
  if (rev == str) {
    console.log("Sau khi xoá " + delStr + " thì chuổi là plaindrome :" + str);
    return true;
  }
}

sliceStr(str)