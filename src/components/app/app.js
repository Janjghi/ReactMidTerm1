import React, {useState} from 'react';
import './app.css';
import Register from  '../register/register';
import Login from '../log-in/log-in';
import CreateUser from '../create-user/create-user';
import ListUsers from '../list-users/list-users';



const App = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginUser = (loggedIn) => {
        setIsLoggedIn(loggedIn);
    }

    const createElement = 
        isLoggedIn ? <CreateUser /> : null;

    return (
        <div>
            < Register />
            <Login loginUser={loginUser}/>
            {createElement}
            <ListUsers />
        </div>
    );
}

export default App;


