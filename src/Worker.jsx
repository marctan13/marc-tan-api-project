import React, { useEffect, useState } from "react";

export default function Worker() {
  const [result, setResult] = useState(null);
  const [worker, setWorker] = useState(null);

  useEffect(() => {
    const myWorker = new Worker('./worker.js');
    myWorker.postMessage(5);
    myWorker.onmessage = function (e) {
        console.log("Received result from worker.js: ", e.data)
      setResult(e.data);
    };
    setWorker(myWorker);
    return () => {
      myWorker.terminate();
    };
  }, []);

  return (
    <div>
      <h2>Result from Worker: {result}</h2>
    </div>
  );
}
