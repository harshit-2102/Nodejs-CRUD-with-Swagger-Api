const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

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

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

/**
 * @swagger
 * /admin/add-product:
 *   post:
 *     summary: Create a new book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: The book was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       500:
 *         description: Some server error
 */

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

router.get('/edit-product/:productId', adminController.getEditProduct);

router.post('/edit-product', adminController.postEditProduct);

router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router;
