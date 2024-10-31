import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './App.css';
import { useState } from 'react';

function App() {
  function stupidassiterator(){
    let pending = ""
    for(let i=0; i<40; i++){
      pending+="pending\n"
    }
    return pending
  }
  const [loginInfo, setLoginInfo] = useState({
    host: "", 
    password : ""
  })
  function loginToServer(){
    
  }
  return (
    <>
      <div className='container mt-5'>
        <form className='p-5 rounded-3, ' style={{ maxWidth: "700px", backgroundColor: "#F8F8F8", borderStyle: "solid", borderColor: "#E8E8E8", borderWidth: "1px", margin: "auto", }}>
          <input className='form-control' placeholder='Host'></input>
          <input className='form-control mt-3' placeholder='Password'></input>
          <button className='btn btn-primary w-100 mt-3'>Connect</button>
          <button className='btn btn-primary w-100 mt-5'>Send</button>
          <textarea disabled={true} rows={20}  className='w-100 mt-3 form-control '  value={stupidassiterator()}></textarea>
        </form>
      </div>
    </>
  );
}

export default App;
