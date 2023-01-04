import axios from 'axios';

const initialState = {
    userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,
};

export default function userReducer(state = initialState, action) {
    switch(action.type) {
        case 'USER_SIGNIN':
            return { ...state, userInfo: action.payload };
        case 'USER_SIGNOUT':
            return { ...state, userInfo: null };
        default:
            return state;
    }
}

export const userSigninAction = (email, password) => async (dispatch, getState) => {

    try {
        const { data } = await axios.post("http://localhost:4000/api/admin/signin", {
            email,
            password
        });

        dispatch({ type: 'USER_SIGNIN', payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));

    } catch (error) {
        console.log(error);
    }
};

export const userSignoutAction = () => async (dispatch, getState) => {
    dispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
};