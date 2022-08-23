 const mongoose = require ('mongoose');
const ProductSchema =new mongoose.Schema({
    
    quantity: {
          type: Number,
          required: true,
        },
 
    QtyPiece:
    {
        type:String,
        required:true,
    },
    QtyPieceForOneElement:
    {
        type:String,
        required:true
    }
,
    productName:{
        type:String,
        required:true
    },
    productprice:
    {
        type:Number,
        required:true
    },
    StrikePrice:{
        type:Number,
        required:true,
    },
    Brand:{
        type:String,
        required:true
    },
    Date:
    {
        type:String,
        required:true
    },
    image:
    {
      type:String,
      required:true  
    },
    category:{
        type:String,
        required:true  
    }
});
module.exports =  mongoose.model('Productbb', ProductSchema);