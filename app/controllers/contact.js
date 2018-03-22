//  Defines various services for the role object

const db = require('../models');

const Contact = db.Contact;

/**
 * create a new contact
 * @param {object} req
 * @param {function} res 
 * @returns {object} http response object
 */
const createContact = (req, res) => {
  const newContact= req.body;
  Contact.findOrCreate({
    where: {
      name: newContact.name,
      phone_number: newContact.phone_number
    },
    defaults: {
        name: newContact.name,
        phone_number: newContact.phone_number
    }
  })
    .spread((contact, created) => {
      if (!created) {
        return res.status(409).send({ message: 'Contact already exist' });
      }
      return res.status(201).send(contact);
    });
};

/**
 * Get created contact
 * @param {object} req
 * @param {function} res
 * @returns {object} http response object.
 */
const getContact = (req, res) => {
    Contact.find({
      where: {
        id: req.params.id
      },
      attributes: [
        'id', 'name', 'phone_number'
      ]
    }).then((contact) => {
      if (!contact) {
        return res.status(404).send({ message: 'Contact not found' });
      }

      return res.status(200).send(contact);
    });
  };

/**
 * Update created contact
 * @param {object} req
 * @param {function} res // Object
 * @returns {object} http response object.
 */
const updateContact = (req, res) => {
    Contact.find({
      where: {
        id: req.params.id
      },
      attributes: [
        'id', 'name', 'phone_number'
      ]
    }).then((contact) => {
      if (!contact) {
        return res.status(404).send({ message: 'Contact not found' });
      }
      contact.update({
        name: req.body.name,
        phone_number: req.body.phone_number
      }).then(() => res.status(200).send({ message: 'Contact Updated!' }));
    });
};

/**
 * Delete a contact
 * @param {object} req
 * @param {function} res
 * @returns {promise} http response.
 */
const deleteContact = (req, res) => {
    Contact.find({
      where: {
        id: req.params.id
      }
    })
    .then((contact) => {
      if (!contact) {
        return res.status(404).send({ message: 'Contact Not found' });
      }
    }).then(() => {
      Contact.destroy({
        where: {
          id: req.params.id
        }
      }).then(() => res.status(200).send({ message: 'Contact Removed' }));
    });
  };

module.exports = {
    createContact,
    getContact,
    updateContact,
    deleteContact
}
