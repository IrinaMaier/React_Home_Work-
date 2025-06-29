import React from 'react';

const initialState = {
    users:['Alice', 'Charlie', 'Eve','Irina'],
    filter:''
};

const userReducer=(state=initialState, action)=>{
    switch(action.type){
        case 'SET_FILTER':
            return{
                ...state,
                filter:action.payload
            };
            default:
                return state;
    }
}

export default userReducer