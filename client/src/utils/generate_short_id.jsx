import { v4 as uuidv4 } from 'uuid';

export const genID=()=>{
    return uuidv4().split("-")[0];
}