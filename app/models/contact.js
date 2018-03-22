module.exports = (sequelize, DataTypes) => {
  var Contact = sequelize.define('Contact', {
    name: DataTypes.STRING,
    phone_number: DataTypes.STRING
  }, {});
  Contact.associate = (models) => {
    //A contact can send many messages
    Contact.hasMany(models.Sms, {
      foreignKey: 'sender_id'
    });
    
    // A contact can receive many messages
    Contact.hasMany(models.Sms, {
      foreignKey: 'receiver_id'
    });
  };
  return Contact;
};
