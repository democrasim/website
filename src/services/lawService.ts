
import type { Law, Status, VoteType } from "../types";
import { parseWithDate } from "./util";
import { token } from '../util/stores';

const lawsApiEndpoint = 'http://localhost:8080/laws';


export const  getLawsPassed = async () => {
     let data = await fetch(`${lawsApiEndpoint}/passed/`,{
        
        headers: {
            'Authorization': localStorage.getItem('jwt')
        }
    });
     return parseWithDate(await data.text()) as Law[]; 
}

export const getLawsUnvoted = async ( memberId: string ) => {
    let data = await fetch(`${lawsApiEndpoint}/not_voted?userId=${memberId}`,{
        headers: {
            'Authorization': localStorage.getItem('jwt')
        }
    });

    return parseWithDate(await data.text()) as Law[]; 
}

export const vote = async ( member: string, law: string, type: VoteType, reason: string  ) => {
    let data = await fetch(`${lawsApiEndpoint}/vote`, {
        method: 'POST',
        body: JSON.stringify({
            member,
            law,
            type,
            reason
        }),
        headers: {
            'Authorization': localStorage.getItem('jwt')
        }

    });

    return parseWithDate(await data.text()) as Law; 
}

export const lawsByStatus = async ( status: Status, page?: number, limit?: number  ) => {
    if(!page && limit) page = 1;
    if(!limit && page) limit = 50;
    
    let data = (page && limit) ? await fetch(`${lawsApiEndpoint}/with_status/${status}?page=${page}&limit=${limit}`)
    : await fetch(`${lawsApiEndpoint}/with_status/${status}`, {
        headers: {
            'Authorization': localStorage.getItem('jwt')
        }
    });

    return parseWithDate(await data.text()) as Law[]; 
}
