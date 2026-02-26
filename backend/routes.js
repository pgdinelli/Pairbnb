import express from 'express';
import { connectDb } from './config/db.js';
import User from './models/userModel.js';
import bcrypt from 'bcryptjs';

const router = express.Router();
const bcryptSalt = bcrypt.genSaltSync()

// Rotas de usuário
router.get('/users', async (req, res) => {
    connectDb();

    try {
        const userDoc = await User.find();
        res.json(userDoc);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.post('/users', async (req, res) => {
    connectDb();

    const { name, email, password } = req.body;
    const encryptedPassword = bcrypt.hashSync(password, bcryptSalt);

    try {
        const newUserDoc = await User.create({
            name,
            email,
            password: encryptedPassword,
        });
        res.json(newUserDoc);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.post('/users/login', async (req, res) => {
    connectDb();

    const {email, password} = req.body;

    try {
        const userDoc = await User.findOne({email});
        if(!userDoc) res.status(400).json('Usuário não encontrado!');

        const isPasswordValid = bcrypt.compareSync(password, userDoc.password);
        const {name, _id} = userDoc;

        isPasswordValid ? res.json({name, email, _id}) : res.status(400).json('Senha inválida!');
    } catch (error) {
        res.status(500).json(error);
    }
});

export default router;