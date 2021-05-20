import { token } from '../util/stores';

const apiEndpoint = 'http://localhost:8080/';


export const login = async ( phone : string, code : string ) => {

    let response = await fetch(apiEndpoint + 'login', {
        method: 'POST',
        body: JSON.stringify({
            phone,  
            code
        })
    })

    if(response.ok) {
        token.set(response.headers['Authorization']);
        return await response.json();
    } else {
        throw new Error('login failed');
    }
}

export const sendCode = async ( phone : string ) => {
    let response = await fetch(apiEndpoint + 'code/wa/?mobile=' + phone)

    if(!response.ok) {
        throw new Error('wa service offline');
    }
}

