import React, {useState, useEffect} from 'react'

function ApearsAndDesaper() {
    const [word, setWord] = useState("Hello World!");

    
    
    useEffect(() => {
      if(word){
        const interval = setInterval(() => 
        { 
            setWord("");
        }, 1000);
        return () => clearInterval(interval);
      } else {
        const interval2 = setInterval(() => {
            setWord("Hello World!");
        }, 1000);
        return () => clearInterval(interval2);
      }
    }, [word])
    


  return (
    <div>
      <p>{word}</p>
    </div>
  )
}

export default ApearsAndDesaper;
