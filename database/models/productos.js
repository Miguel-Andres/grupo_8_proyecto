module.exports = (sequelize, dataTypes) => {

    let alias = "Productos";
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

        imagen: {

        },

        producto: {
            type: dataTypes.STRING

        },

        categoria: {
            type: dataTypes.STRING

        },

    };

    let config ={
        tableName: "productos",
        timestamps: false
    }
const Productos = sequelize.define (alias, cols, config);

return Productos
}

/*module.exports = (sequelize, dataTypes) => {

    let alias = "movies";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false

        },
        title: {
            type: dataTypes.STRING,
            allowNull: false

        },
        length: {
            type: dataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0

        }

    };

    let config ={
        tableNAme: "movies",
        timestamps: true,
        underscored: true 
    }
const Peliculas = sequelize.define (alias, cols, config);

return Peliculas
}*/
