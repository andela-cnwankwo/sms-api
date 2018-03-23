module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Sms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      message: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING,
        defaultValue: 'created'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      sender_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Contacts',
          key: 'id',
          as: 'sender_id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      receiver_number: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Contacts',
          key: 'phone_number',
          as: 'receiver_number'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
    }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Sms')
};