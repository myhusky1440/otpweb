/**
 * Created by Administrator on 2018/1/10 0010.
 */
// import
let jsotp = require('jsotp');

// Create HOTP object
let hotp = jsotp.HOTP('BASE32ENCODEDSECRET32');
hotp.at(0); // => 432143
hotp.at(1); // => 231434
hotp.at(2132); // => 242432

// Verify with a counter
hotp.verify(242432, 2132); // => true
hotp.verify(242432, 2133); // => false

setInterval(function () {
  let num = parseInt(Math.random()*10000);
  let dp = hotp.at(num);
  let vertify = hotp.verify('624363', 146);
  // let vertify = hotp.verify(dp, num)
  console.log(num,typeof num,dp,vertify);
},2000)
