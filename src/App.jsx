import { useState } from 'react';
import './App.css';


let arr = []
function App() {
const [data, setData] = useState([])
const [text, setText] = useState(0)
const [inp, setInp] = useState([])


const [size , setSize] = useState(null)
const [abc, setAbc] = useState([])

const getOpt = (event) => {
  const selectedValue = event.target.value;
  setSize(selectedValue);
  setAbc([selectedValue])
}






function getVal(e){
  if(e.target.checked === true){
    console.log(e.target.value)
    setData([...data,e.target.value])
     }else{
    setData(data.filter((item)=> item !== e.target.value))
  }
}
console.log(data);





function getInp(a){
  if(a.target.checked === true){
    console.log(a.target.value)
    setInp([...inp,a.target.value])
     }else{
    setInp(inp.filter((item)=> item !== a.target.value))
  }
}
console.log(inp);

  return (


    <div className="App">
      <h1 className='buy'>Pitsa Buyurtma Qilish</h1>
      <div className="container">

        
        <div className="box">


          <h2>Noni qanday bolsin?</h2>
          <select className='sel' onChange={getOpt} name='non' id='nonn'>
            <option value="Yupqa" >Yupqa</option>
            <option value="Ortacha">Ortacha</option>
            <option value="Qalin">Qalin</option>
          </select>

          

          <h2>Kattaligi</h2>
          <button className='btn1' onClick={()=> setText(25)}>25cm</button>
          <button className='btn1' onClick={()=> setText(30)}>30cm</button>
          <button className='btn1' onClick={()=> setText(35)}>35cm</button>



          <h2>Ustiga nima solaylik?</h2>
          <div className="ok">
          <div className="ab">
          <input type="checkbox" id='Pomidor' value="Pomidor" onClick={getVal} />
          <label htmlFor="Pomidor">Pomidor</label><br /><br />
          <input type="checkbox" id='Kurka' value="Kurka" onClick={getVal} />
          <label htmlFor="Kurka">Kurka goshti</label><br /><br />
          <input type="checkbox" id='Zaytun' value="Zaytun" onClick={getVal} />
          <label htmlFor="Zaytun">Zaytun</label>


          </div>

          <div className="ba">
          <input type="checkbox" id='Tuzlangan bodring' value="Tuzlangan bodring" onClick={getVal} />
          <label htmlFor="Tuzlangan bodring">Tuzlangan bodring</label><br /><br />
          <input type="checkbox" id='Qoziqorin' value="Qoziqorin" onClick={getVal} />
          <label htmlFor="Qoziqorin">Qoziqorin </label><br /><br />
          <input type="checkbox" id='Qazi' value="Qazi" onClick={getVal} />
          <label htmlFor="Qazi">Qazi</label>

          </div>
          </div>


          <h1>Qoshimchalar</h1>


          <div className="ol">

<div className="l">
<input type="checkbox" id='achiq' value="achiq" onClick={getInp} />
          <label htmlFor="achiq "> Achiq</label><br />
          
</div>
          <div className="y">
          <input type="checkbox" id='pishloq' value="pishloq" onClick={getInp} />
          <label htmlFor="pishloq">Pishloq </label><br />
          
          </div>
          </div>


        </div>
      
<div className="k">

</div>

<div className="card">
  <h2>Noni:  
             <h4>
             <ul>
                {abc.map((option) => (
                  <li key={option}>{option}</li>
                ))}
              </ul>
              </h4> 
              </h2>
  <h2>Kattaligi: {text}</h2>
  <h2>Ustida: 
    <h4>
      {data.map((item) =>
      <li key={item}>{item}</li>
      )}
    </h4>
     </h2>
  <h2>Qoshimcha: 
    <h4>
      {inp.map((index)=>
      <li key={index}>{index}</li>
      )}
    </h4>

      </h2>

  <button className='btn2'>BUYURTMA BERISH</button>
</div>


</div>
    </div>
  );
}

export default App;
