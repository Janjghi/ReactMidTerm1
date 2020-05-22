import React, {useState}  from 'react';
import './register.css';
import ReqResApi from '../../services/service';


const Register = () => {

    const reqResApi = new ReqResApi();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    }


    const onSubmit = (event) => {
        event.preventDefault();
        reqResApi.registerUser({email, password})
        .then((res) => {
            console.log(res);
        });
    }

    return (
        <form className="item-add-form" onSubmit={onSubmit}>
                <h3>Register</h3>
                <input type="text" 
                    className="form-control" 
                    placeholder="Enter email"
                    onChange={onEmailChange}
                    value={email}
                    />
                <input type="password" 
                    className="form-control" 
                    placeholder="Enter password"
                    onChange={onPasswordChange}
                    value={password}
                    />
                <button 
                    className="btn btn-primary"
                    >
                Register</button>
        </form>

    );
}

export default Register;