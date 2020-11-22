/* eslint-disable */
const apiUrl = 'https://api.twitch.tv/kraken'
const clientId = '4t0oc4ozzmq7a4j3zwrpqjira9nrz1'
const accept = 'application/vnd.twitchtv.v5+json'
const appendHtml = `
  <div class="stream">
    <img src="$preview" />
    <div class="stream__data">
      <div class="stream__avatar">
        <img src="$logo" />  
      </div>
      <div class="stream__intro">
        <div class="stream__title">
          $title
        </div>
        <div class="stream__channel">
          $channel           
        </div>
      </div>
    </div>
  </div>`

// 拿到前5熱門的遊戲
function getGames() {
	return fetch(`${apiUrl}/games/top?limit=5`, {
		method: 'GET',
		headers: {
			'Client-ID': clientId,
			Accept : accept,
		},
	}).then(res => {
		return res.json()
	}).catch(err => {
		return err
	})
}

// 拿到遊戲的 streams
function getStreams(name) {
  return fetch(`${apiUrl}/streams?game=${encodeURIComponent(name)}&limit=20`, {
    method: 'GET',
    headers: {
      'Client-ID': clientId,
      Accept : accept,
    },
  }).then(res => {
    return res.json()
  }).catch(err => {
    return err
  })
}

// 放到 navbar上， 把 h1 從 loading 改成顯示 topGames 裡的第一個遊戲名稱
getGames().then(games => {
   // console.log('games', games)
  const topGames = games.top.map(game => game.game.name)
  for(let game of topGames) {
    let element = document.createElement('li')
    element.innerText = game
    document.querySelector('.navbar__topfive').appendChild(element);
  }
  document.querySelector('h1').innerText = topGames[0]
  getStreams(topGames[0]).then(data => {
    appendStreams(data.streams)
  })
})

// 拿到各個 stream 後，新增一個 div 的元素，再放到 .streams 下
function appendStreams(streams) {
  streams.forEach(stream => {
    let element = document.createElement('div')
    let content = appendHtml
      .replace('$preview', stream.preview.large)
      .replace('$logo', stream.channel.logo)
      .replace('$title', stream.channel.status)
      .replace('$channel', stream.channel.name)
    document.querySelector('.streams').appendChild(element)
    element.outerHTML = content
  })
}

// 點擊 navbar 上的每個遊戲去拿到不同的 streams ，這裏 innerHTML 會先清空，所以轉換中間會有白色的頁面短暫出現
document.querySelector('.navbar__topfive').addEventListener('click', e => {
  if (e.target.tagName.toLowerCase() === 'li') {
    const gameName = e.target.innerText;
    document.querySelector('h1').innerText = gameName;
    document.querySelector('.streams').innerHTML = '';
    getStreams(gameName).then(data => {
      // console.log(data)
      appendStreams(data.streams)
    })
  }
})
