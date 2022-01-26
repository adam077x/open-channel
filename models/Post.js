const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Post extends Model {

}

Post.init({
    title: {
        type: DataTypes.STRING
    },
    text: {
        type: DataTypes.STRING
    },
    boardId: {
        type: DataTypes.INTEGER
    }
}, {
    sequelize, 
    modelName: "post"
})

module.exports = Post;