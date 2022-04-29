import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    CLEAR_ERRORS,
} from '../constants/userConstants'
import axios from "axios";
export const login = (login_type, country, username, IsReload, account, password) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST });
        const config = {
            headers: {
                'Application': 'json'
            },
            mode: 'no-cors',
        }

        const { data } = await axios.post(
            // 'http://daycare.uveoustech.com/api/_Account/Login', { mode: 'cors' },
            'http://daycare.uveoustech.com/api/_Account/LoginJwt', { mode: 'cors' },
            // 'https://taximoh.com/panel/api/login/user-login',
            // { login_type, country, username, password },
            { account, password, IsReload },
            config
        )
        dispatch({ type: LOGIN_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: LOGIN_FAIL, payload: error.response.data.message })
        console.log(error)
    }

}
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
}