import express from "express";
import { budines } from "./ProductManager/exports.js";

const app = express()

const PORT = 8080

app.get('/add/products', async (req, res) => {

    try {
        const { limit } = req.query

        const allProducts = await budines.getProducts()

        if (!limit || limit < 1) {

            return res.send({ succes: true, products: allProducts })
        }

        const products = allProducts.slice(0, limit)


        res.send({ succes: true, products })

    } catch (error) {

        console.log("error")

        res.send({ succes: false, error: "ha ocurrido un error" })


    }

});

app.get('/add/products/:id', async (req, res) => {

    try {
        const { id: paramId } = req.params

        const id = Number(paramId)


        if (Number.isNaN(id) || id <= 0) {

            return res.send({ succes: false, error: 'ingresar un número valido' })
        }

        const product = await budines.getProductById(id)

        if (!product) {

            return res.send({ succes: false, error: 'el producto no ha sido encontrado' })
        }

        return res.send({ succes: true, product })

    } catch (error) {
        console.log('error')

        res.send({ succes: false, error: 'error!' })

    };

});

app.listen(PORT, () => console.log(`server running on port ${PORT}`))