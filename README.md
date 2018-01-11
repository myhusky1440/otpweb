# otpweb

> optweb

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## jsotp
_________
jsotp是一个用来生成用来生成及验证一次性密码的js模块，一次性密码通常用来在web应用或者其他登录系统中作为二步验证或多步验证使用。

该模块基于 RFC4226 （HOTP：基于计数器的一次性密码算法）和 RFC6238（TOTP：基于时间的一次性密码算法）实现
