import type { Member } from '../types';
import { token, memberId } from '../util/stores';
import { apiCall } from './util';

const apiEndpoint = 'http://localhost:8080/';


export const login = async ( phone : string, code : string ) => {

    try {

    let data = await apiCall<{ token: string, member: Member }>('POST','login/', { 
        phone,
        code
     }, false,
     'Login Failed');

     token.set('Bearer ' + data.token);
    memberId.set(data.member.id);

    } catch(e) {

    }
}

export const sendCode = async ( phone : string ) => {
    await apiCall('GET' ,'code/wa/?mobile=' + phone, {}, false, 'WhatsApp Service Offline');
}

