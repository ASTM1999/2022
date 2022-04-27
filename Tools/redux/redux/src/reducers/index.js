import { combineReducers } from "redux";
import { itReducer } from "./itReducer"; //เพราะ export ออกมาเป็นตัวแปลเลยต้องอยู่ใน ปีกกา
import { userReducer} from "./userReducer";

// index ไว้รวบรวม Store
const rootReducer = combineReducers({
    user: userReducer,
    it: itReducer
})

export default rootReducer