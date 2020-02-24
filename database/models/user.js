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

        },
        ciudad: {
            type : dataTypes.STRING ,
    },
        direccion:{
            type : dataTypes.STRING ,

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


    return user

    
}