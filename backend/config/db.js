import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const { DB_URL } = process.env;

export const connectDb = async () => {
    try {
        await mongoose.connect(DB_URL);
        console.log("Conexão com o banco realizada com sucesso!");
    } catch (error) {
        console.log("ERRO AO CONECTAR COM O BANCO! ", error);
    }
};