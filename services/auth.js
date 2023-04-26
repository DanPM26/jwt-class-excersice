const bcrypt = require('bcrypt')

const authService = class{
    constructor(userService){
        this.UserService = userService
    }

    async login(email,password){
        const user = await this.UserService.getByEmail(email)
        console.log("Usuario recuperado: ", user);
        if(user){
            const isPasswordMatch = await bcrypt.compare(password, user.password);
            console.log("Comparación de contraseñas: ", isPasswordMatch);
            return user.toObject();
        } else if(!user){
            throw new Error('usuario no encontrado')
        } else {
            throw new Error('No autorizado')
        }
    }

    
}

module.exports = authService