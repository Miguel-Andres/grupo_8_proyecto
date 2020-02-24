module.exports= (sequelize,dataTypes) => {

    let alias = "venta"

    let cols = {
        id : {
            type : dataTypes.INTEGER ,
            primaryKey : true ,
            autoIncrement : true,
            allowNULL : false ,

        } ,
        cliente_id : {
            type : dataTypes.INTEGER ,


        },
        producto_id : {
            type : dataTypes.INTEGER ,

        } ,

        
    }

    let config = {

        tableName : "ventas" ,
        timestamps : true ,
        underscored: true ,



    }

    let venta = sequelize.define(alias,cols,config)

  

    return venta
}