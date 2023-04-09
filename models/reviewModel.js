module.exports = (sequelize, DataTypes) => {


    const Review = sequelize.define('product', {
       rating: {
           type: DataTypes.Integer
       },
       description: {
           type: DataTypes.TEXT
       },
    })
    return Review
   }