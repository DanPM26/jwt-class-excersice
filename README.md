# Backend Login

1. Inicia creando una carpeta donde contendrá tu proyecto backend login 
2. Crea un package.json porque descargaremos varias dependencias 
3. Las dependencias a ocupar son : 
- express
- nodemon -D
- cors 
- mongoose 
- bcrypt
- jsonwebtoken 
4. Instancia el servidor con sus respectivos puertos dentro del archivo index.js
5. Una vez instanciando el puerto, configurando el arranque de nodemon desde el package.json. Crea una carpeta donde contendra un archivo (usualmente llamada db) que contendrá un archivo con nombre mongodb.js
6. Agrega tus credencial para contectarte a la base de datos de Mongodb 
7. En tu carpeta raíz añade una nueva carpeta con el nombre Model. Dentro de esta carpeta, añade un archivo con el nombre de esquema de datos vas a manejar. En este ejemplo le colocaré el nombre de 'users.js'
8. Una vez añadido el modelaje y que la base de datos este correctamente conectada. Crea dentro de la carpeta raíz de tu proyecto una carpeta llamada Services (recuerda que es similar a los controlladores, solo que aquí se provee el servicio de almacenar los datos de usuario).
9. Dentro de esta carpeta contendra un archivo llamado users.js
10. Dentro de este archivo Services > users.js. Instancia una clase constructora, el cúal se va a encargar de crear y guardar los usuarios dentro de tu base datos. 
``` Javascript
services > user.js

const userService = class {
    constructor(userModel){
        this.Model = userModel
    }
    async create(userData){
        const newUser = new this.Model(userData)
        await newUser.save()
        //delete newUser.password
        return newUser.toObject()
    }
}

module.exports = userService
```
11. Una vez realizado la clase constructora de usuarios, crea una carpeta llamada 'apis' y un archivo llamado 'users.js'. Esta contendrá el ruteo de tus endpoints. No te olvides instanciar la clase que acabamos de crear en: Services > users.js, a su vez de enviar los datos de tus rutas con un model.exports, añadidas en un archivo index.js dentro de esta misma carpeta.
``` Javascript
apis > users.js 

const userModel = require('../models/users')
const userService = require('../services/users')

const UserService = new userService(userModel)

router.post('/', async(req,res)=>{
    const body = req.body
    const user = await UserService.create(body)
    console.log(user)
    res.status(200).send(user)
})

module.exports = router
```

``` Javascript
apis > index.js 

const userRouter = require('./users')
router.use('/users', userRouter)
```
12. Localiza tus rutas en el archivo index.js de tu carpeta raíz. No te olvides  que estas rutas las colocas dentro de un middleware el cúal las localizara a todas bajo una ruta es decir: 
``` Javascript
index.js 

const apiRouter = require('./apis')
app.use('/api/v1', apiRouter)
```
13. Realiza las pruebas en tu postman 

## Generar Token y verificar token

14. Una vez comprobado que la ruta y el almacenamiiento de datos esté correcto, se añade al Model la encriptación de datos a través de la libreria de bcrypt 
``` Javascript
Model > users.js 

const bcrypt = require('bcrypt')

userSchema.pre('save', function(next){
 console.log('------>',this.email, this.password)
 const hashedPassword = bcrypt.hashSync(this.password, 12)
 this.password = hashedPassword

 next()
})

const userModel = model('users', userSchema)
module.exports = userModel

```






