import { getInitialData } from '../Utils/api'
import { receiveUsers } from '../Actions/users'
import { receiveTweets } from '../Actions/tweets'
import { setAuthedUser } from '../Actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID = 'Eren_Yeager'

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, tweets }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveTweets(tweets))
        dispatch(setAuthedUser(AUTHED_ID))
        dispatch(hideLoading())
      })
  }
}