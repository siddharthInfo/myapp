import React,{useState} from 'react'

function FormVal() {
const[username,setUsername] = useState('');
const[message, setMessage] = useState('');
const[topic, setTopic] = useState('');

function handleChangeUsername(event){
  setUsername(event.target.value)
}
function handleMessageChange(event){
    setMessage(event.target.value)
}
function handleTopicChange(event){
  setTopic(event.target.value)
}
function handleSubmit(event){
alert(`${username} ${message} ${topic}`)}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
            <label>Username</label>
            <input type="text" value={username} 
            onChange = {handleChangeUsername} required></input>
            <label>Address</label>
            <textarea value = {message}
            onChange = {handleMessageChange} required></textarea>
        </div>
        <div>
            <label>Topic</label>
            <select value={topic}
            onChange = {handleTopicChange}
            required>
                <option value ="react">React</option>
                <option value ="angular">angular</option>
                <option value ="Vue">Vue</option></select>
        </div>
        <button type = "submit">Submit</button>
      </form>
    </div>
  )
}


export default FormVal
