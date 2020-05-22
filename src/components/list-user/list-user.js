import React, {useState, useEffect}  from 'react';
import ReqResApi from '../../services/service';


const ListUsers = ({ loginUser }) => {

    const reqResApi = new ReqResApi();

    const [users, setUsers] = useState([]);

    useEffect(() => {
        reqResApi.getUsers(1)
        .then((res) => {
            setUsers(res.data);
            console.log(users);
        })
    }, []);


    return (
        <div className="country-sum">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">email</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                    </tr>
                </thead>
                <tbody>
                   
                </tbody>
            </table>
        </div>
    );
}

export default ListUsers;