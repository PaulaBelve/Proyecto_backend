
const fs = require('fs')

class ProductManager {

    constructor(path) {

        this.path = path
    }
}

getProducts = async () => {

    if (fs.existsSync(this.path)) {
        console.log("The file already exists");
        let readFile = await fs.promises.readFile(this.path, "utf-8");
        let guardarFile = JSON.parse(readFile) // Pasar el el string a Json
        return guardarFile
    } else {
        return []; //Retorna un array vacio
    }


}
// TRAER LOS PRODUCTOS DESDE EL OBJETO JSON - THIS.PATH

/*addProducts = async (title, description, price, thumbnail, code, stock) => {

        if ((title, description, price, thumbnail, code, stock)) {

        if (fs.existsSync(this.path)) {
            let readFile = await fs.promises.readFile(this.path, "utf-8");
            let guardarFile = JSON.parse(readFile)

            const codeDuplicado = guardarFile.find((e) => e.code == code);

            if (codeDuplicado) {

                console.log('el code ya existe')

            } else {

                if (guardarFile.length > 0) {

                    let idProducto = guardarFile[guardarFile.length - 1].id + 1

                    const nuevoProducto = {
                        id: idProducto,
                        title,
                        description,
                        price,
                        thumbnail,
                        code,
                        stock

                    }

                    guardarFile.push(nuevoProducto);
                   

                    await fs.promises.writeFile(
                        this.path,
                        JSON.stringify(guardarFile, null, 2)
                    )
                };


            }};
         };
}

getProductById = async (id) => {

    if(fs.existsSync(this.path)) {

        let readFile = await fs.promises.readFile(this.path, "utf-8");
        let guardarFile = JSON.parse(readFile)

        const idEncontrado = guardarFile.find((path) => path.id == id)
        idEncontrado
        console.log('Se ha encontrado el producto:', idEncontrado)
        
    } else {
        console.log("Not Found, el producto no ha sido encontrado")
    }
} */



const budines = new ProductManager('./DB.Json')


console.log(budines);

getProducts();





/*let guardarProductos = async () => {

    const primerProducto = await product.addProducts({

        title: "Apollo",
        description: "Budin chocolate",
        price: 300,
        thumbnail: "imagen",
        code: "code1",
        stock: 5
    });

    console.log({ primerProducto });

    const segundoProducto = await product.addProducts({

        title: "Venus",
        description: "Budin banana",
        price: 500,
        thumbnail: "imagen",
        code: "code2",
        stock: 5
    });

    console.log({ segundoProducto }); 

  

}


guardarProductos() */


