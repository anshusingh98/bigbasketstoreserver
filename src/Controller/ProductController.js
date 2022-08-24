const Product = require("../Models/products");
exports.createProduct = async(req,res,next) =>{
    //Admin controller---  create Product
const product = await Product.create(req.body);
res.status(201).json({
    success:true,
    product
})
}

//get filtered product
exports.getfilteredProduct =  async (req,res)=>{
    try {
        const productCategory = req.params.category;
if (productCategory==="Allproducts")
    {
        const products =await Product.find()
    
    res.status(200).json({success:true,
        products
    })
    }
else{

    const products =await Product.find({category:productCategory})
    
    res.status(200).json({success:true,
        products
    })

}
        
    } catch (error) {
        
console.log(error);    }
    
}