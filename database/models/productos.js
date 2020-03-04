
module.exports = (sequelize, dataTypes) => {

    let alias = "productos";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        nombre: {
            type: dataTypes.STRING
            

        },
        precio_individual: {
            type: dataTypes.INTEGER
            

        },
        precio_mediana: {
            type: dataTypes.INTEGER

        },
        precio_grande: {
            type: dataTypes.INTEGER

        },
        detalle: {
            type: dataTypes.STRING

        },

        producto: {
            type: dataTypes.STRING

        },

        categoria: {
            type: dataTypes.STRING

        },
        
        imagen: {
            type: dataTypes.STRING
        },    

    };

    let config ={
        tableName: "productos",
        timestamps: false
    }
const productos = sequelize.define (alias, cols, config);

return productos
}
