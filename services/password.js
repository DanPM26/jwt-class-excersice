
const passwordService = class{
    constructor(userService){
        this.PasswordService = userService
    }

    async confirm(email){
        const user = await this.PasswordService.getByEmail(email)
        if(user){
            console.log('Usuario existe')
        } else {
            throw new Error('Usuario no encontrado')
        }
    }
  
    async change(email,newPassword){
        const user = await this.PasswordService.updatePassword(email,newPassword)
        if(user){
            console.log('Se ha logrado cambiar la contraseña')
        } else{
            throw new Error('Ocurrio un error')
        }
    }

}

module.exports = passwordService
