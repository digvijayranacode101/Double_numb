import "./styles.css";
import React, {useState,useEffect, useMemo} from 'react'

export default function App() {

const[number, setnumber]= useState(0)
const[dark, setdark] = useState(false)
const dnum = doubleNumb(number)
const styles= useMemo(()=> { 
  return {
  backgroundColor : dark? 'black': 'grey',
  color:dark? 'grey': 'black',
  display: 'inline'
  }
},[dark])

useEffect(()=>{
  console.log('themechanged')
},[styles])

  return (
    <div >
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input 
      style={{display:'block'}} 
      type='number'
      onChange={(e)=>setnumber(parseInt(e.target.value))} />
      <button onClick={()=>setdark(prevstate=>!prevstate)}>ThemeChange</button>
      <div style={styles} >{dnum}</div>
    </div>
  );
  function doubleNumb(num){
    for(let i=0;i<1999;i++){}
    return num*2
  }
}
