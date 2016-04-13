var des = require('./crypto_des.js')

var encode = des.encode('This is test.', 'JiwLYG=-');
console.log(encode)
