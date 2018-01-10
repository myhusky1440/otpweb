/**
 * Created by Administrator on 2018/1/10 0010.
 */
// import
let jsotp = require('jsotp');

// Create TOTP object
let totp = jsotp.TOTP('yueshenghuyueshenghuyueshenghu34');

setInterval(function () {
  let temp = totp.now(); // => 432143
  let test = temp.toString();
  let flag = totp.verify(test);
  console.log(temp,typeof temp,flag);
},2000)
