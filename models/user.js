module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('User', {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {        
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
        isPassword: true
      }
    },
    courses: {
      type: []
    },
    programs:{
      type:[]
    }
  });
 

  return User;
};
