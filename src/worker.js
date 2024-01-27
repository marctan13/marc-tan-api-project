export default function worker(){
onmessage =  function(message) {
  let result = [];
      for(let i = 0; i < 5; i++){
        result.push(message * i);
      postMessage(result);
      }
  console.log(message);
}
}
