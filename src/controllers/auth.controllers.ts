import User from "../models/User.models";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
//import { TOKEN_SECRET } from "../config/token"


export const register = async (req, res) => {
    const { full_name, password, address, phone, dni, email, status, roleId } = req.body

    try {

        const passwordHash = await bcrypt.hash(password, 10)


        const newUser = new User({
            full_name,
            password: passwordHash,
            address,
            phone,
            dni,
            email,
            status,
            roleId
        })
        const userSaved = await newUser.save()

        jwt.sign({
            id: userSaved.id,
        }, process.env.TOKEN_SECRET, {
            expiresIn: "1d",
        }, (err, token) => {
            if (err) console.log(err)
            res.cookie('token', token)
            res.send(userSaved);
        })



    } catch (error) {
        console.log(error)
    }

}


export const login = (req, res) => {
    res.send('login')
}