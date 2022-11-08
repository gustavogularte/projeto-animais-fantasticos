export default function bitcoinFetch(url, target) {
  async function btcFetch() {
    try {
      const response = await fetch(url);
      const responseJson = await response.json();
      const bitcoin = document.querySelector(target);
      bitcoin.innerText = (1000 / responseJson.BRL.sell).toFixed(4);
    } catch (erro) {
      console.log(erro);
    }
  }
  return btcFetch();
}
