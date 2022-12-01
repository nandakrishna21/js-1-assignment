var str = '1234';
console.log(str);
var strReverse = str.split('');
var rev = [];
for (var n = strReverse.length-1; n >= 0; n--) {
  rev.push(strReverse[n]);
}
console.log(rev.join(''));