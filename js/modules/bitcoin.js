export default class Bitcoin {
  constructor(bitcoinSpan) {
    this.bitcoinSpan = document.querySelector(bitcoinSpan);
  }

  async fetchBtc() {
    try {
      const response = await fetch('https://blockchain.info/ticker');
      const bitcoin = await response.json();
      this.bitcoinSpan.innerText = (100 / bitcoin.BRL.sell).toFixed(4);
    } catch (erro) {
      console.log(erro);
    }
  }

  init() {
    if (this.bitcoinSpan) {
      this.fetchBtc();
    }
    return this;
  }
}
