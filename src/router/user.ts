import {Router} from "express"
import { postUser } from "../handlers/user";
const routerUser= Router();


routerUser.post('/',postUser)



export default routerUser