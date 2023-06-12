const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Books
 *   description: The books managing API
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - title
 *         - price
 *         - description
 *       properties:
 *         title:
 *           type: string
 *           description: The auto-generated id of the book
 *         price:
 *           type: number
 *           description: The book title
 *         description:
 *           type: string
 *           description: The book description
 *       example:
 *         title: 7 Habit of Highly Effective People
 *         price: 20
 *         description: This is very nice book
 */

router.get('/', shopController.getIndex);

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Returns the list of all the books
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: The list of the books
 *         content:
 *           text/html:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 */

router.get('/products', shopController.getProducts);

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Get the book by id
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 *     responses:
 *       200:
 *         description: The book description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       404:
 *         description: The book was not found
 */

router.get('/products/:productId', shopController.getProduct);

module.exports = router;
