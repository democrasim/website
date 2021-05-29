import { token, memberId } from '../util/stores';

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
        let data = await response.json();
        token.set('Bearer ' + data.token);
        memberId.set(data.member.id);
        return data.member;
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

