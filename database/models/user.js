module.exports = function (sequelize ,dataTypes){

    let alias = "user"

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

        apellido: {

            type : dataTypes.STRING ,
            allowNull : false ,

        },

        email: {
            type : dataTypes.STRING ,
            allowNull : false ,


        },
        password: {
            type : dataTypes.STRING ,
            allowNull : false ,


        },
        pais: {
            type : dataTypes.STRING ,
            allowNull : true,

        },
        ciudad: {
            type : dataTypes.STRING ,
            allowNull : true ,
    },
        direccion:{
            type : dataTypes.STRING ,
            allowNull : true ,

        },



    };



    let user = sequelize.define(alias,cols,{

        tableName : "clientes" ,

        timestamps : true ,
        underscored : true ,
        
    })

    user.associate = function(models){

        user.hasOne(models.avatar,{
            
            foreignKey:"cliente_id"
        })
    }

    user.associate = function(models){

        user.hasMany(models.token,{
            
            foreignKey:"cliente_id"
        })
    }


    return user

    
}