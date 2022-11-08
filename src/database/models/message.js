module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    sender: DataTypes.STRING,
    message: DataTypes.STRING,
    receiver: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      get() {
        return this.getDataValue('createdAt')
                .toLocaleString('pt-br')
      }
    }
  },
  {
    timestamps: true,
    createdAt: true,
    updatedAt: false,
    tableName: 'messages',
    underscored: false,
  })

  return Message;
}
