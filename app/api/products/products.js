// backend/products.js
const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const router = express.Router();

router.get("/products", async (req, res) => {
    try {
        // Obtendo todos os produtos ativos
        const products = await stripe.products.list({ active: true });

        // Buscando os preços de cada produto
        const prices = await stripe.prices.list({
            active: true,
            expand: ["data.product"],
        });

        // Combinando produtos e preços
        const productsWithPrices = products.data.map((product) => {
            const productPrices = prices.data.filter(
                (price) => price.product === product.id
            );
            return {
                ...product,
                prices: productPrices,
            };
        });

        res.json(productsWithPrices);
    } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        res.status(500).json({ error: "Erro ao buscar produtos" });
    }
});

module.exports = router;
