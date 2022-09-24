import Category from '../Models/category.js'

const getCategories = async(req,res)=>{
    try {
      const categories =await Category.find({}).sort({id:-1})  
      res.status(200).json({
        status:"success",
        categories
      })
    } catch (err) {
       console.log(err)
  res.status(402).json({
    status:"failed",
    error:err.message
  })
    }
}
const createCategory = async(req,res)=>{
    const name = req.body.name;
      console.log("name",name)
    try {
        const Isexisting = await Category.findOne({name:name})
        console.log("IsExisting",Isexisting)
        if(Isexisting){
            throw new Error("category exist already")
        }
        const category = await Category.create({
            name:name,
        })

        res.status(200).json({
          status:"success",
          category
        })
    } catch (error) {
        console.log(error)
        res.status(402).json({
            status:"failed",
            err:error.message
        })

    }
}

export {createCategory,getCategories}

