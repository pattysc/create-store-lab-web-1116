export default function manageUsers(state = {users: []}, action){
  if(action.type === 'ADD_USER'){
    return {users: state.users.concat(action.payload)}
  }else{
    return state
  }
}
