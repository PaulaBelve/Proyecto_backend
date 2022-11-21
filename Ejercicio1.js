

class ProductManager {


    constructor() {

        this.Product = []
    }

    getNextProductId = () => {

        const count = this.Product.length

        if (count == 0) return 1

        const lastProduct = this.Product[count - 1]
        const lastId = lastProduct.id
        const productId = lastId + 1

        return productId


    }

    getProduct = () => { return this.Product }

    getProductById = (productId) => {

        const idEncontrado = this.Product.find(element => element.id == productId)

        if (idEncontrado) {
            console.log("el producto encontrado es: " , idEncontrado.title)
        } else {
            console.log("Not Found")
        }
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {

        const productos = {

            id: this.getNextProductId(),
            title,
            description,
            price,
            thumbnail,
            code,
            stock

        }

        const codeDuplicado = (element) => element.code == productos.code;

        if (!this.Product.some(codeDuplicado)) {
            this.Product.push(productos)
        } else {
            console.log("el code esta duplicado")
        }

    }

}

const product = new ProductManager()

product.addProduct("Apollo", "Budin chocolate", 300, "image", "code1", "5")
product.addProduct("Apollo", "Budin chocolate", 300, "image", "code1", "5")
product.addProduct("Gea", "Budin coco", 400, "image", "code2", "5")
product.addProduct("Zeus", "Budin frutos rojos", 500, "image", "code3", "5")
product.addProduct("Venus", "Budin banana", 300, "image", "code4", "5")




product.getProductById(3)
product.getProductById(6)



console.log(product.Product);