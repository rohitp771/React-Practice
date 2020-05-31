import React, {useState} from 'react';

export default function UseStateComponent() {
const [name,setName] = useState("Rohit");
const [age,setAge] = useState(28);

  return (
    <div className="App">
      <header className="App-header">
       
        <p>
          Name : <input type="text" value={name} onChange = {e => setName(e.target.value)}></input>
        </p>

        <p>
          Age : {age}
        </p>

        <button onClick={()  => setAge(age+1)}>Increment Age By One</button>

        <p>
        Name : {name} <br/>
        age  : {age}
        </p>
        
      </header>
    </div>
  );
}

