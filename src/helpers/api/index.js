import axios from "axios";
import dotenv from 'dotenv'

dotenv.config()

export const api = axios.create({
    baseURL: 'https://api.acessorias.com',
    headers: {
        'Authorization': process.env.API_KEY
    }
})