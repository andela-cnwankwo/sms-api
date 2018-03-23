module.exports = (sequelize, DataTypes) => {
  var Sms = sequelize.define('Sms', {
    message: DataTypes.STRING,
    status: {
      type: DataTypes.STRING,
      defaultValue: 'created'
    },
    sender_id: DataTypes.INTEGER,
    receiver_number: DataTypes.STRING
  }, {});
  Sms.associate = (models) => {
    // Sent messages belong to a contact
    Sms.belongsTo(models.Contact, {
      foreignKey: 'sender_id',
      onDelete: 'CASCADE'
    });

    // Recieved messages belong to a contact
    Sms.belongsTo(models.Contact, {
      foreignKey: 'receiver_number',
      onDelete: 'CASCADE'
    });
  };
  return Sms;
};
