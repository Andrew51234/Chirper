import { getInitialData } from "../Utils/api";
import { receiveUsers } from "./users";
import { receiveTweets } from "./tweets";
import { setAuthedUser } from "./authedUser";

const AUTHED_ID = 'IKEEPMOVINGFORWARD'

export function handleInitialData () {
    return(dispatch) =>{
        return getInitialData()
        .then(({users, tweets})=>{
            dispatch(receiveUsers(users))
            dispatch(receiveTweets(tweets))
            dispatch(setAuthedUser(AUTHED_ID))
        })
    }
}