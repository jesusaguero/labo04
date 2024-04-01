import { router } from 'express';
import pool from '../database.js';

const router = Router();

router.get('/clientes', async(req,res)=>{
    try{
        const [result] = await pool.query('SELECT * FROM cliente');
        res.render('clientes/clientes',{clientes: result});
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

router.get('/productos', async(req,res)=>{
    try{
        const [result] = await pool.query('SELECT * FROM cliente');
        res.render('clientes/productos',{clientes: result});
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

export default router;