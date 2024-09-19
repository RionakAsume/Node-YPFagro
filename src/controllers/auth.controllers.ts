import User from "../models/User.models";


export const register = async (req, res) => {
    const { fullName, password, address, phone, dni, email, roleId } = req.body

    try {
        const newUser = new User({
            fullName,
            password,
            address,
            phone,
            dni,
            email,
            roleId
        })
        const userSaved=await newUser.save()
        res.send(userSaved)
    } catch (error) {
        console.log(error)
    }
    
}


export const login = (req, res) => {
    res.send('login')
}