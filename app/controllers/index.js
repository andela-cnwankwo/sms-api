const createContact = require('./contact').createContact;
const getContact = require('./contact').getContact;
const getAllContacts = require('./contact').getAllContacts;
const updateContact = require('./contact').updateContact;
const deleteContact = require('./contact').deleteContact;
const createSms = require('./sms').createSms;
const sendSms = require('./sms').sendSms;
const getSms = require('./sms').getSms;
const getAllSms = require('./sms').getAllSms;
const deleteSms = require('./sms').deleteSms;

module.exports = {
    createContact,
    getContact,
    getAllContacts,
    updateContact,
    deleteContact,
    createSms,
    sendSms,
    getSms,
    getAllSms,
    deleteSms
}
