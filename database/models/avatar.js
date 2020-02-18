module.exports = function (sequelize ,dataTypes){

    let alias = "avatar"

    let cols = {

        id :{

            type : dataTypes.INTEGER, 
            primaryKey : true ,
            autoIncrement : true , 
            allowNull : false ,
              

        },

        nombre:{
            type : dataTypes.STRING ,
            allowNull : false ,

            

        },

        cliente_id: {

            type : dataTypes.INTEGER ,

        }

        


    };



    let avatar = sequelize.define(alias,cols,{

        tableName : "avatars" ,

        timestamps : false ,
  
        
    })


    return avatar

    
}