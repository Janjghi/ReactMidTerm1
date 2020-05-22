class ReqResApi {
    _apiBase = 'https://reqres.in/';

    async registerUser(userData) {
        
        const res = await fetch(`${this._apiBase}api/register`, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        return await res.json();
    }

    async logInUser(userData) {
    
        const res = await fetch(`${this._apiBase}api/login`, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        return await res.json();
    }

    
    async createInUser(userData) {
    
        const res = await fetch(`${this._apiBase}api/users`, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        return await res.json();
    }

    async getUsers(page) {
        const res = await fetch(`${this._apiBase}api/users?page=${page}`);
        return await res.json();
    }

    
}


export default ReqResApi;




