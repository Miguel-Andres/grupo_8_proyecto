module.exports = function (sequelize,dataTypes){
    let alias ="token"

    let cols ={
        id : {
            type :dataTypes.INTEGER,
            primaryKey : true,
            autoIncrement :true ,
            allowNull : false
        },
        cliente_id :{
            type : dataTypes.INTEGER,
          


        },
        token :{
            type : dataTypes.STRING ,
            allowNull : true ,

        }
    }

    let token = sequelize.define(alias,cols,{
        
        tableName :"tokens" ,
        timestamps :false

    })
    token.associate = function(models){

        token.belongsTo(models.user,{
            
            foreignKey:"cliente_id" ,
            as : "user"
        })
    }


    return token

}