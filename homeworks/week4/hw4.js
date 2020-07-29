const request = require('request');

const apiUrl = 'https://api.twitch.tv/kraken';
const clientId = '4t0oc4ozzmq7a4j3zwrpqjira9nrz1';

const options = {
  url: `${apiUrl}/games/top`,
  headers: {
    Accept: 'application/vnd.twitchtv.v5+json',
    'Client-ID': clientId,
  },
};
/* eslint-disable consistent-return */
function callback(error, response, body) {
  let data;
  try {
    data = JSON.parse(body);
  } catch (e) {
    return console.log(e);
  }
  // console.log(data);
  // console.log(data.top);
  const topChart = data.top;

  for (let i = 0; i < topChart.length; i += 1) {
    console.log(`觀看人數為：${topChart[i].viewers}，遊戲名稱：${topChart[i].game.name}`);
  }
}


request(options, callback);
