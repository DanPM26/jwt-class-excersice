const bcrypt = require('bcrypt')

const userService = class {
    constructor(userModel){
        this.Model = userModel
    }

    getByEmail(email){
     return this.Model.findOne({email})
    }

    async create(userData){
        const newUser = new this.Model(userData)
        await newUser.save()
         delete newUser.password
        return newUser.toObject()

    }

    async updatePassword(email,newPassword) {
        try {
            const user = await this.Model.findOne({ email })
         
          if (!user) {
            throw new Error(`No se encontró el usuario `)
        }

        // if (newPassword == null || newPassword == undefined) {
        //     throw new Error('No se proporcionó información de la contraseña');
        //   }

        if (newPassword === undefined) {
            console.log('La variable newPassword no tiene un valor definido.');
            // aquí puedes agregar cualquier código adicional que sea necesario
        }

          console.log('Nueva contraseña:', newPassword)
          
          
         const saltRounds = 10
         const newPass = await bcrypt.hash(newPassword, saltRounds)
       
       
         await this.Model.updateOne({ email }, { password: newPass })
      
         console.log('Contraseña actualizada')

        } catch (error) {
          console.error(`Error al actualizar la contraseña: ${error.message}`)
          throw error
        }
      }
      
      
}
 
module.exports = userService