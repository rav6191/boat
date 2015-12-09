/**
 * ProductController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `ProductController.addProduct()`
   */
  addProduct: function (req, res) {
    Product.add({
      name:req.param('name'),
      price:req.param('price'),
      category:req.param('category')
    },function(err,product){
        if (err) {return res.negotiate(err);}
        console.log(product);
        return res.json(product);
    });

  },


  /**
   * `ProductController.removeProduct()`
   */
  removeProduct: function (req, res) {
    Product.remove({
      name:req.param('name')
    },function(err,product){
        if (err) {return res.negotiate(err);}
        console.log(product);
        return res.json(product);
    });
  },


  /**
   * `ProductController.getProduct()`
   */
  getProduct: function (req, res) {
    Product.find({
      name:req.param('name')
    },function(err,products){
        if (err) {return res.negotiate(err);}
        console.log(products);
        return res.json({result:products});
    });
  },


  /**
   * `ProductController.updateProduct()`
   */
  updateProduct: function (req, res) {
    Product.update({
      name:req.param('name'),
      price:req.param('price'),
      category:req.param('category')
    },function(err,product){
        if (err) {return res.negotiate(err);}
        console.log(product);
        return res.json(product);
    });
  }
};

