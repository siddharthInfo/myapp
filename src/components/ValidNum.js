import React,{useState} from 'react'

function ValidNum() {
    const [user,setUser] = useState("");
    const [password , setPassword] = useState("");
    const [userErr, setUserErr] = useState(false);

    function loginhandler(e){
      if(user.length < 3){
        alert("type correct values")
    }
    else if(password.length < 6){
        alert("incorrect password")
    } else{
        e.preventDefault()
    }
    }

    function userhandler(e){
    let item = e.target.value;
    if(item.length < 3){
        setUserErr(true)
    } else{
        setUserErr(false)
    }
    setUser(item)
    }

    function passhandler(e){
     let pass = e.target.value;
     if(pass.length < 6){
        setUserErr(true)
     }else{
        setUserErr(false)
     }
    setPassword(pass)
    }

  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={loginhandler}>
            <input type="text" placeholder = "Enter your name" onChange={userhandler}></input>
                {userErr ? <span> not less than 3</span> : "" } 
                <br></br>
                <input type ="text" placeholder ="Enter password" onChange={passhandler}></input>
                {userErr ? <span> not less than 6</span> : "" } 
                <br></br>
                <button type = "submit">Login</button>
        </form>
      
    </div>
  )
}

export default ValidNum
