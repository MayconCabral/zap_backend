module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    userId:{
      type: DataTypes.INTEGER,
      foreignKey: true
    }
  },
  {
    timestamps: false,
    tableName: 'contacts',
    underscored: false,
  });

  Contact.associate = (models) => {
    Contact.belongsTo(models.User,
      { foreignKey: 'userId', as: 'users'});
  };

  return Contact;
};
