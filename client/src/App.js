import {useState} from 'react'
const axios=require("axios")
function App(){
  let [users,setusers]=useState([])

  const loaduser=()=>{
        axios.get("http://localhost:5000/userslist")
        .then(function(res){
          console.log(res)
        })
        .catch(function(err){
          console.log(err)
        })
  }

  return(
    <>
      <button type="button" onClick={loaduser}>Load user</button>
    </>
  )
}
export default App 