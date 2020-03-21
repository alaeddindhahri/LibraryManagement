import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import {SET_CURRENT_USER,ADD_NEW_USER,UPDATE_CURRENT_USER} from './types';
import {GET_ERRORS} from './types';
// Login - Get User Token
export const loginUser = userData =>dispatch=>{
    axios.post('/api/users/login',userData)
        .then(res=>{
            //save to localStorage
            const {token}= res.data;
            //set token to LS
            localStorage.setItem('jwtToken',token);
            //set token to Auth header
            setAuthToken(token);
            //decode token to get user data
            const decoded = jwt_decode(token);
            //set current admin
            dispatch(setCurrentUser(decoded));
        })
        .catch(err=> dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }));
}
//set logged User
export const setCurrentUser=decoded=>{
    return{
        type:SET_CURRENT_USER,
        payload:decoded
    }
}

//logout user
export const logoutUser=()=>dispatch=>{
    // remove token from local storage
    localStorage.removeItem('jwtToken');
    // remove authUser header for future requests
    setAuthToken(false);
    // set current User to {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
    window.location.href = '/';
}

//update user
export const updateUser=(idUser,newData)=>dispatch=>{
    axios.put(`/api/users/update/${idUser}`,newData)
        .then(res=>{
            //logout user after updating info
            // remove token from local storage
            localStorage.removeItem('jwtToken');
            // remove authAdmin header for future requests
            setAuthToken(false);
            // set current user to {} which will set isAuthenticated to false
            dispatch(setCurrentUser({}));
            window.location.href = '/';
        })
        .catch(err=> dispatch({
            type: GET_ERRORS,
            payload: err.data
        }));
}

//add new user
export const addUser = (userData)=>{
    axios.post('/api/users/register',userData)
        .then(console.log("added new user."))
        .catch(err=>dispatch({
            type: GET_ERRORS,
            payload: err.data
        }));
}