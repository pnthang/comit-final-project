import React from 'react'
import {useHistory} from 'react-router-dom'


function Login(props){
    let history = useHistory()
    let [password, setPassword] = React.useState('');

    function handleUsernameChange(event){
        props.setUsername(event.currentTarget.value);
    }

    function handlePasswordChange(event){
        setPassword(event.currentTarget.value);
    }

    function goToHome(){
        history.push('./home')
    }
    return (
        <h1>Login</h1>
        <from>
            <div>
                <label>UserName</label><input type="input" value={props.username} onChange={handleUsernameChange}/>
            </div>
            <div>
                <label>Password</label><input type="password" value={password} onChange={handlePasswordChange}/>
            </div>
            <div>
                <button>Login</button>
            </div>
        </from>
    )
}

export default Login;