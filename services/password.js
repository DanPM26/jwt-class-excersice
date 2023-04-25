const passwordService = class {
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

   async change(email,password,newPassword){
    const user = await this.PasswordService.changePassword(email,password,newPassword)

    if(user){
       console.log("exito")
    } else {
        throw new Error('Hubo algun error')
    }
   }
}

module.exports = passwordService
