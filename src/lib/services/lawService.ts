
import type { Law, Status, VoteType } from "../types";
import { parseWithDate } from "./util";
import laws from '../data/laws.json';

const lawsApiEndpoint = 'http://localhost:8080/laws';


export const  getLawsPassed = async () => {
     //let data = await fetch(`${lawsApiEndpoint}/passed/`);
     

     
     
     return parseWithDate(JSON.stringify(laws)) as Law[]; 
}

export const getLawsUnvoted = async ( memberId: string ) => {
    let data = await fetch(`${lawsApiEndpoint}/not_voted?userId=${memberId}`);

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
        })

    });

    return parseWithDate(await data.text()) as Law; 
}

export const lawsByStatus = async ( status: Status, page?: number, limit?: number  ) => {
    if(!page && limit) page = 1;
    if(!limit && page) limit = 50;
    
    let data = (page && limit) ? await fetch(`${lawsApiEndpoint}/with_status/${status}?page=${page}&limit=${limit}`)
    : await fetch(`${lawsApiEndpoint}/with_status/${status}`);

    return parseWithDate(await data.text()) as Law[]; 
}
