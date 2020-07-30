const request = require('request');
const process = require('process');

const apiUrl = 'https://restcountries.eu/rest/v2';
const args = process.argv;
const countryName = args[2];

if (!countryName) {
  console.log('請輸入國家名稱');
}
request(`${apiUrl}/name/${countryName}`,
  (error, response, body) => {
    if (response.statusCode >= 400 && response.statusCode < 500) {
      console.log(' 找不到國家資訊');
    }

    let data;
    try {
      data = JSON.parse(body);
    } catch (e) {
      console.log(e);
      return;
    }
    // console.log(data) 先看response來確定要取得的資訊
    for (let i = 0; i < data.length; i += 1) {
      console.log('============');
      console.log(`國家: ${data[i].name}`);
      console.log(`首都: ${data[i].capital}`);
      console.log(`貨幣: ${data[i].currencies[0].code}`);
      console.log(`國碼: ${data[i].callingCodes[0]}`);
    }
  });
