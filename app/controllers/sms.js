//  Defines various services for the role object
const db = require('../models');

const sequelize = db.sequelize;

const Sms = db.Sms;

/**
 * send an sms
 * @param {object} req
 * @param {function} res // Object
 * @returns {object} http response object
 */
const createSms = (req, res) => {
  const newSms = req.body;
  Sms.findOrCreate({
    where: {
        message: newSms.message,
        status: 'created',
        sender_id: newSms.sender_id
    },
    defaults: {
        message: newSms.message,
        status: 'created',
        sender_id: newSms.sender_id
    }
  })
    .spread((sms, created) => {
      if (!created) {
        return res.status(409).send({ message: 'SMS already exist' });
      }
      return res.status(201).send(sms);
    });
};

/**
 * send an sms
 * @param {object} req
 * @param {function} res // Object
 * @returns {object} http response object
 */
const sendSms = (req, res) => {
  const receipient_id = req.body.receiver_id;
    Sms.find({
        where: {
          id: req.params.id
        },
        attributes: [
          'id', 'status', 'receiver_id'
        ]
      }).then((sms) => {
        if (!sms) {
          return res.status(404).send({ message: 'SMS not found' });
        }
        // check if SMS is already sent
        if (sms.status === 'sent') {
          return res.status(404).send({ message: 'SMS already sent' });
        }
        sms.update({
          status: 'sent',
          receiver_id: receipient_id
        }).then(() => res.status(200).send({ message: 'SMS Sent!' }));
      })
      .catch(function (err) {
        return res.status(500).send({ message: err });
      });
  };


/**
 * Get created sms
 * @param {object} req
 * @param {function} res
 * @returns {object} http response object.
 */
const getSms = (req, res) => {
    Sms.find({
      where: {
        id: req.params.id
      },
      attributes: [
        'id', 'message', 'status', 'sender_id', 'receiver_id'
      ]
    }).then((sms) => {
      if (!sms) {
        return res.status(404).send({ message: 'SMS not found' });
      }

      return res.status(200).send(sms);
    });
};

/**
 * Get created sms
 * @param {object} req
 * @param {function} res
 * @returns {object} http response object.
 */
const getAllSms = (req, res) => {
    Sms.findAll({}).then((sms) => {
        if (sms) {
          return res.status(200).send({ sms });
        }
        return res.status(404).send({ message: 'No SMS found' });
      });
};

/**
 * Delete an sms
 * @param {object} req
 * @param {function} res
 * @returns {promise} http response.
 */
const deleteSms = (req, res) => {
    const reqId = req.body.id;
    Sms.find({
      where: {
        id: req.params.id
      }
    })
    .then((sms) => {
      if (!sms) {
        return res.status(404).send({ message: 'SMS not found' });
      }
      const smsStatus = sms.status;
      // check if it's sent and hence can only be deleted by receiver
      if(sms.status === 'sent' && reqId !== sms.receiver_id) {
            return res.status(400).send({ message: 'Sent SMS cannot be deleted' });
        } else if(sms.status !== 'sent' && reqId !== sms.sender_id) {
            return res.status(401).send({ message: 'Cannot delete SMS' });
        }
    }).then(() => {
        Sms.destroy({
        where: {
          id: req.params.id
        }
      }).then(() => res.status(200).send({ message: 'SMS deleted' }));
    });
  };

module.exports = {
    createSms,
    sendSms,
    getSms,
    getAllSms,
    deleteSms
}
