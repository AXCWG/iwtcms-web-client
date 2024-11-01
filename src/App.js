import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './App.css';
import { useEffect, useState } from 'react';



function App() {
  
  // const [socket, setSocket]=useState(null)
  const {send, last} = useSocketIO("ws://127.0.0.1:25566")
  // setSocket(new WebSocket(["ws://127.0.0.1:25566"]))
  function stupidassiterator() {
    let pending = ""
    for (let i = 0; i < 40; i++) {
      pending += "pending\n"
    }
    return pending
  }
  const [loginInfo, setLoginInfo] = useState({
    host: "",
    password: ""
  })
  const [io, setIo]=useState({
    retrieve: "",
    append: "",
  })
  function loginToServer() {
    // setSocket(new WebSocket(loginInfo.host))
    // socket.onmessage = ({data})=>{
    //   console.log('message: ', data)
    // }
  }
  function sendToServer(){
    socket.send(io.append);

  }
  return (
    <>
      <div className='container mt-5'>
        <div className='p-5 rounded-3' style={{ maxWidth: "700px", backgroundColor: "#F8F8F8", borderStyle: "solid", borderColor: "#E8E8E8", borderWidth: "1px", margin: "auto", }}>
          <input className='form-control' placeholder='Host' onChange={(e) => {
            setLoginInfo({
              ...loginInfo,
              host: e.target.value
            })
          }} value={loginInfo.host}></input>
          <input className='form-control mt-3' placeholder='Password' onChange={(e) => {
            setLoginInfo({
              ...loginInfo,
              password: e.target.value
            })
          }} value={loginInfo.password}></input>
          <button className='btn btn-primary w-100 mt-3' onClick={loginToServer}>Connect</button>
          <input className='form-control mt-5'></input>
          <button className='btn btn-primary w-100 mt-3' onClick={sendToServer}>Send</button>
          <textarea disabled={true} rows={20} className='w-100 mt-3 form-control ' value={stupidassiterator()}></textarea>
        </div>
      </div>
    </>
  );
}

export default App;
