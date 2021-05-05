import type { Member } from "../types";
import { parseWithDate } from "./util";

const memberApiEndpoint = 'http://localhost:8080/member';

export const allMembers = async () => {

    return [];

    //const data = await fetch(`${memberApiEndpoint}/all/`);
    // return parseWithDate(await data.text()) as Member[]; 
}

export const allMembersRegistered = async () => {
    const data = await fetch(`${memberApiEndpoint}/all?registered=true`);
     return parseWithDate(await data.text()) as Member[]; 
}
