const toto = 'Easy Redux user 55+'

export const userReducer = (state = null, action) =>{
    switch (action.type){
        case 'LOGIN':
            return action.payload
        case 'LOGOUT' :
            return action.payload
        default:
            return state
    }
}
//Store ที่ 1 
// = () =>{} Arrow Function