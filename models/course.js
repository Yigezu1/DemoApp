const User = require("./user");
// Creating our User model
module.exports = function(sequelize, DataTypes) {
    var Course = sequelize.define("Course", {
      // The email cannot be null, and must be a proper email before creation
      Title: {
        type: DataTypes.STRING,
        allowNull: false,        
        validate: {
          len:[10]
        }
      },
      // The password cannot be null
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [100]
      }
    });
    return Course;
  };
  