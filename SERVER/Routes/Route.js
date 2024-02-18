const express = require ('express')
const router = express.Router();
const { getAll, addBus, getallbus, editProduct, deleteProduct} = require("../Controller/Control");


router.get("/getall",getAll);
router.post("/addBus",addBus)
router.get("/getallbus",getallbus)
router.put("/update",editProduct)
router.delete("/:id",deleteProduct)



module.exports = router;