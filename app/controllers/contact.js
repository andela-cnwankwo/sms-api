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
 * Get all contacts
 * @param {object} req
 * @param {function} res
 * @returns {object} http response object.
 */
const getAllContacts = (req, res) => {
    Contact.findAll({}).then((contacts) => {
        if (contacts) {
          return res.status(200).send({ contacts });
        }
        return res.status(404).send({ message: 'No Contact found' });
      });
  };

/**
 * Update created contact
 * @param {object} req
 * @param {function} res // Object
 * @returns {object} http response object.
 */
const updateContact = (req, res) => {
    const contactName = req.body.name;
    let contactPhoneNumber = req.body.phone_number;
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
      // When phone number is not specified
      if(!req.body.phone_number) {
        contactPhoneNumber = contact.phone_number;
      }
      contact.update({
        name: contactName,
        phone_number: contactPhoneNumber
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
    getAllContacts,
    updateContact,
    deleteContact
}
