const createContact = require('./contact').createContact;
const getContact = require('./contact').getContact;
const updateContact = require('./contact').updateContact;
const deleteContact = require('./contact').deleteContact;
const createSms = require('./sms').createSms;
const sendSms = require('./sms').sendSms;
const getSms = require('./sms').getSms;
const deleteSms = require('./sms').deleteSms;

module.exports = {
    createContact,
    getContact,
    updateContact,
    deleteContact,
    createSms,
    sendSms,
    getSms,
    deleteSms
}
