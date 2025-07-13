import { RESPONSE_CREDENTIALS_ERROR } from "../shared/constants";
import { signToken } from "./jwt";




export const loginAuth = async (username: string, password: string) => {
    console.log('auth.service::loginAuth');
    /* hacer también logico con base de datos */

    
    if (username === 'admin' && password === 'admin') {
        const token = signToken ({ id: 1, role: 'ADMINISTRADOR', username});
        return token ;
    } else {
        return RESPONSE_CREDENTIALS_ERROR;
    }
}