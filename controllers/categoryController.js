const Category = require('../models/Category')

class categoryController {
    static async createCategory(req,res,next){
        const {namecategory} = req.body
        const categoryData = await Category.findOne({namecategory : namecategory})
        console.log(categoryData)
        if(categoryData) { next({name: 'CATEGORYEXIST'}) }
        else{
        const category = new Category({
            namecategory
        });
        category.save()
        .then(data => {
            res.status(200).json({success : true, data})
        })
        .catch(err => {next({name : 'VALID'})})
        }
    }
    static async getCategory(req,res,next) {
        const {categoryID} = req.params
        try{
            const category = await Category.findById(categoryID)
            res.status(200).json({success : true,data : category})
        }
        catch (e) { next({name: 'PRODUCTNOTFOUND'}) }
    }
    static async listCategory(req,res,next){
        try{
            const category = await Category.find()
            res.status(200).json({success : true, data : category})
        }
        catch (e) { next({name: 'PRODUCTNOTFOUND'}) }
    }
    static async updateCategory(req,res,next){
        const {categoryID} = req.params
        const {namecategory} = req.body
        try{
            const newData = {namecategory}
            for(let key in newData) if(!newData[key]) delete newData[key]
            const category = await Category.findByIdAndUpdate(categoryID,newData,{new: true})
            res.status(200).json({success : true, data : category})
        }
        catch (e) { next({name: 'PRODUCTNOTFOUND'}) }
    }
    static async deleteCategory(req,res,next){
        const {categoryID} = req.params
        try{
            const category = await Category.findByIdAndDelete(categoryID)
            res.status(200).json({success : true, message : 'delete success'})
        }
        catch(e) { next({name: 'PRODUCTNOTFOUND'}) } 
    }
}

module.exports = categoryController