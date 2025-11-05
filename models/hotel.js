module.exports = (sequelize, DataTypes) => {
    const hotel = sequelize.define("hotel",{
        id : {
            type : DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey : true

        },
        Type_Kamar:{
            type : DataTypes.STRING,
        },
        Kapasitas_Tamu:{
            type : DataTypes.INTEGER,
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

       

