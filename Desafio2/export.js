const ProductManager = require('./Ejercicio2')

const budines = new ProductManager('DB.Json')



const guardarObj = async () => {

// Agregar producto
await budines.addProduct({


            title: 'Apollo',
            description: 'budin citrico',
            price: '1000',
            thumbnail: 'image',
            code: '230',
            stock: '5'

}) 

console.log( await budines.getProducts()); 

// Buscar por ID
budines.getProductById(1)

// Actualizar producto
await budines.updateProduct(2, {

 
            price: '1300',
            stock: '3'

})

console.log( await budines.getProducts()); 

// Eliminar un producto
//await budines.deleteProduct(3) 

}

guardarObj()