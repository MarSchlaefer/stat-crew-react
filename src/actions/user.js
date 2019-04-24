export const loginUser = (username, password) => {
    return (dispatch) => { //thunk
        dispatch({ type: 'AUTHENTICATING_USER' })
        fetch(`http://localhost:3000/api/v1/login`, { //move this to adapter
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username: username,
                    password: password
                }
            })
        }).then(resp => {
            if (resp.ok) {
                return resp.json()
            } else {
                throw resp
            }
        }).then(JSONResp => {
            console.log('%c INSIDE THEN', 'color: pink', JSONResp)
            localStorage.setItem('jwt', JSONResp.jwt)
            dispatch({ type: 'SET_CURRENT_USER', payload: JSONResp.user })
        }).catch(resp => resp.json().then(e => dispatch({ type: 'FAILED_LOGIN', payload: e.message })))
    }
}

export const fetchCurrentUser = () => {
    return (dispatch) => {
        dispatch(authenticatingUser()) //tells app we are fetching
        fetch(`http://localhost:3000/api/v1/profile`, { //move this to adapter
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwt')}`
            }
        })
        .then(resp => resp.json())
        .then((JSONResp) => dispatch(setCurrentUser(JSONResp.user)))
    }
}

export const setCurrentUser = (userData) => ({
    type: 'SET_CURRENT_USER',
    payload: userData
  })
  
  export const failedLogin = (errorMsg) => ({
    type: 'FAILED_LOGIN',
    payload: errorMsg
  })
  
  // tell our app we're currently fetching
  export const authenticatingUser = () => ({ type: 'AUTHENTICATING_USER' })