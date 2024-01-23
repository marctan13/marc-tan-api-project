self.onmessage = function (message){
    const urls = [
        `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 151)}`,
        `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 99) + 151}`,
        `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 134) + 251}`,
        `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 106) + 386}`,
        `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 155) + 493}`,
      ];
      self.postMessage(urls)
      console.log(message);
}

export default Worker


