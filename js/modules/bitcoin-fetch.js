export default function initBitcoinFetch() {
  bitcoinFetch('https://blockchain.info/ticker');

  async function bitcoinFetch(url) {
    try {
      const response = await fetch(url);
      const responseJson = await response.json();
      const bitcoin = document.querySelector('.bitcoin');
      bitcoin.innerText = (1000 / responseJson.BRL.sell).toFixed(4);
      console.log(bitcoin)
    } catch(erro) {
      console.log(erro)
    }
  }
}