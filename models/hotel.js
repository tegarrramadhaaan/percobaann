module.exports = (sequelize, DataTypes) => {
    const film = sequelize.define("hotel",{
        id : {
            type : DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey : true

        },
        Type_Kamar:{
            type : DataTypes.STRING,
        },
        Kapasitas_Tamu:{
            type : DataTypes.STRING,
        },
        lantai:{
            type : DataTypes.STRING,
        },
        fasilitas:{
            type : DataTypes.INTEGER,
        },
         Tanggal_pesan:{
            type : DataTypes.STRING,
        }
      });
    return hotel;
};

       

