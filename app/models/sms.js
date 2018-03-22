module.exports = (sequelize, DataTypes) => {
  var Sms = sequelize.define('Sms', {
    message: DataTypes.STRING,
    status: {
      type: DataTypes.STRING,
      defaultValue: 'created'
    },
    sender_id: DataTypes.INTEGER,
    receiver_id: DataTypes.INTEGER
  }, {});
  Sms.associate = (models) => {
    // Sent messages belong to a contact
    Sms.belongsTo(models.Contact, {
      foreignKey: 'sender_id',
      onDelete: 'CASCADE'
    });

    // Received messages reference a contact
    Sms.belongsTo(models.Contact, {
      foreignKey: 'receiver_id',
      onDelete: 'CASCADE'
    });
  };
  return Sms;
};
