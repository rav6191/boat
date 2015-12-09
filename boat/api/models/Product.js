/**
* Product.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	name:{
  		type:'string',
  		unique:true
  	},
  	price:{
  		type:'float',
  	},
  	category:{
  		type:'string',
  		enum:['electronics','food','textile']
  	}

  },

  add: function(input,cb){
  	Product.create({
  		name:input.name,
  		price:input.price,
  		category:input.category
  	}).exec(cb);
  },

  update: function(input,cb){
  	Product.update({name:input.name},{price:input.price,category:input.category}).exec(cb);
  },
  find: function(input,cb){
  	Product.find({name:input.name}).exec(cb);
  },
  remove: function(input,cb){
  	Product.destroy({name:input.name}).exec(cb);
  }
};

