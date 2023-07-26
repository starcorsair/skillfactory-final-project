import { getToken } from "./tokens";

export const checkAuthentification = (userData, userStatus) => {
    if(userData && userStatus === 'fulfilled'){
        return true
    }else if(!userData && userStatus === 'pending' && getToken()){
        return true
    }else if(!userData && userStatus === 'rejected'){
        return false
    }else if(!userData && userStatus === 'idle'){
        return false
    }
};