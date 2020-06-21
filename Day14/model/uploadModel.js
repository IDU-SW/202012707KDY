const fs = require('fs');
let AWS = require("aws-sdk");
const Sequelize = require('sequelize');
const sequelize = new Sequelize('s3', 'admin', 'kimevery0', {
    dialect: 'mysql', host :'idu-aws-mysql.ci0o8f9dum5o.ap-northeast-2.rds.amazonaws.com'
})
AWS.config.loadFromPath(__dirname + "/../aws_config.json")

const Upload = sequelize.define('upload', {
    file_name: Sequelize.STRING,
    url: Sequelize.STRING,
}, { timestamps: false })


class Uploads {
    constructor() {
        try{
            Upload.sync({force:true});
        } catch (err){
            console.error(err);
        }
    }

    async uploadFile(name, url) {
        var image = {
            file_name: name,
            url: url
        }
        let ret = await Upload.create(image)
    
        if (ret) {
            console.log("이미지 업로드 성공");
            image.content = "이미지를 업로드하는데 성공하였습니다."
            return image;
        }
        else {
            console.log("이미지 업로드 실패");
            image.info = "이미지를 업로드하는데 실패하였습니다."
            return image;
        }
    }
}

module.exports = new Uploads();