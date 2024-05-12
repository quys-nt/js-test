const str = "caiac";

function sliceStr(str) {
  let newStr = str.split("");
  let rev = newStr.slice().reverse().join("");
  if (rev === str) {
    console.log("Chuỗi " + str + " hiện tại đã là palindrome.");
  }

  for (let i = 0; i < newStr.length; i++) {
    let j = str.slice(0, i) + str.slice(i + 1);
    if (checkPalindrome(j)) {
      console.log(str + " có thể thành palindrome, sau khi xoá " + newStr[i] + " : " + j);
      return true;
    }
  }

  console.log("Không có cách nào để xoá ký tự và tạo thành palindrome.");
  return false;
}

function checkPalindrome(str) {
  let rev = str.split("").reverse().join("");
  return rev === str;
}

sliceStr(str);