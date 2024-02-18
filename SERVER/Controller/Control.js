const express = require ('express')
const jsonwebtoken = require('jsonwebtoken')
const custom = require('../Models/model')
const Item = require ('../Models/busmod')






const getAll = async(req,res)=>{
    try{
        const Logied = await custom.find({})
    res.status(200).json({Logied})
    }catch(error){
    res.status(500).json({msg:error})
    }
}
const bcrypt = require("bcrypt")



//addPro

const addBus = async(req,res)=>{
    const{categories,Poname,image,price} = req.body;
    try{
        const Bus = ({
        
           categories:req.body.categories,
            Poname:req.body.Poname,
            image:req.body.image,
            price:req.body.price,

        });
        let result = await Item.create({
            
            categories:categories,
            Poname:Poname,
            image:image,
            price:price,
            
        });
        res.status(200).send({success:true, msg:"Success",data:Bus});
    } catch (error){
        res.status(400).send({success:false,msg:error.message});
    }
}

const getallbus = async(req,res)=>{
    try{
        const Getbus = await Item.find({})
    res.status(200).json({Getbus})
    }catch(error){
    res.status(500).json({msg:error})
    }
}
const editProduct = async(req,res)=>{
    const {id} = req.params;
    try {
        const product = await Item.findOneAndUpdate(req.params.id, req.body);
        res.json(product);
    } catch (error) {
        return next(error);
    }
}

const deleteProduct = async(req,res)=>{
    console.log(req.params.id)
    try {
        const {id} = req.params;
        const product = await Item.findByIdAndDelete(id);
        if (!product) {
          return res
            .status(404)
            .json({ message: `cannot find any product with  ${id}` });
        }
        res.status(200).json(product);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};






module.exports={
    getAll,
    addBus,
    getallbus,
    editProduct,
    deleteProduct,
  

}
