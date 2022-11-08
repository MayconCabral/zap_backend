module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'users',
    underscored: false,
  });

  User.associate = (models) => {
    User.hasMany(models.Contact,
      { foreignKey: 'userId', as: 'contacts'})
  }

  return User;
};
