import { SET_USER_INFO } from "./actions"

const initialState ={
  name:'John Sim',
  status:'online'
};
const userReducers=(state=initialState, action)=>{
  switch (action.type){
    case SET_USER_INFO:
       if (!action.payload) return state;
      
      const allowedUpdates = {
        name: typeof action.payload.name === 'string' ? action.payload.name : state.name,
        status: typeof action.payload.status === 'string' ? action.payload.status : state.status
      };
      
      return{
        ...state,
        ...allowedUpdates
      };
      default:
        return state;
  }
}
export default userReducers