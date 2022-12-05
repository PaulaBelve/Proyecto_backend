
const fs = require('fs')

class ProductManager {

    constructor(path) {

        this.path = path
    }

    getProducts = async () => {

        if (fs.existsSync(this.path)) {
            console.log("el archivo existe");
            let readFile = await fs.promises.readFile(this.path, "utf-8");
            let guardarFile = JSON.parse(readFile) // Pasar el el string a Json
            return guardarFile
        } else {
            return []; //Retorna un array vacio
        }


    }


    getNexId = list => {

        const count = list.length

        return (count > 0) ? list[count - 1].id + 1 : 1


    }

    writeFile = list => {

        return fs.promises.writeFile(this.path, JSON.stringify(list))
    }


    addProduct = async (obj) => {

        const list = await this.getProducts()

        const id = this.getNexId(list)
        obj.id = id

        list.push(obj)

        await this.writeFile(list)


    }

    getProductById = async (id) => {

        if (fs.existsSync(this.path)) {

            let readFile = await fs.promises.readFile(this.path, "utf-8");
            let guardarFile = JSON.parse(readFile)

            const idEncontrado = guardarFile.find((path) => path.id == id)
            idEncontrado
            console.log('Se ha encontrado el producto:', idEncontrado)

        } else {
            console.log("Not Found, el producto no ha sido encontrado")
        }
    }



    updateProduct = async (id, obj) => {

        if ((id, obj)) {

            if (fs.existsSync(this.path)) {

                let readFile = await fs.promises.readFile(this.path, "utf-8");
                let guardarFile = JSON.parse(readFile)

                const idActualizado = guardarFile.find((path) => path.id == id)
                if (idActualizado) {

                    const list = guardarFile.map((path) => {

                        if (path.id == id) {
                            return { ...path, ...obj }

                        }
                        return path

                    })
                    await this.writeFile(list, null, 2)

                } else {console.log ('el id a actualizar no se ha encontrado')}
            } else {console.log ('no se encuentra el producto para agregar')}

        }
    }

    deleteProduct = async (id) => {

        if (fs.existsSync(this.path)) {

            if (id) {
                let readFile = await fs.promises.readFile(this.path, "utf-8");
                let guardarFile = JSON.parse(readFile)
                const eliminarProducto = guardarFile.splice((id) => 3, 1)
                const list = eliminarProducto

                await this.writeFile(list)

                console.log('Se ha eliminado el producto')

            } else { console.log('no se ha podido eliminar el producto') }


        }
        else {
            console.log('el array se encuentra vacio para eliminar un producto')

        }

    }

}

module.exports = ProductManager




       

               

                    














