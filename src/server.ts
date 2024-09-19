import express from "express"
import routerUser from "./router/user";
import routerRole from "./router/role";
import db from "./config/db";
import  authRoutes  from "./router/auth.router";

async function conectDB(){
    try {
        await db.authenticate()
        db.sync()
        console.log('La base de datos se conecto correctamente')
    } catch (error) {
        console.log(error)
        console.log('eeror de conexion en la bd')
    }
}

conectDB();

const server=express();
server.use(express.json());

server.use('/api/',authRoutes)
server.use('/api/user', routerUser)
server.use('/api/role', routerRole)


export default server