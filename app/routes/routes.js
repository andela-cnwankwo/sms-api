const createContact = require('../controllers').createContact;
const getContact = require('../controllers').getContact;
const getAllContacts = require('../controllers').getAllContacts;
const updateContact = require('../controllers').updateContact;
const deleteContact = require('../controllers').deleteContact;
const createSms = require('../controllers').createSms;
const sendSms = require('../controllers').sendSms;
const getSms = require('../controllers').getSms;
const getAllSms = require('../controllers').getAllSms;
const deleteSms = require('../controllers').deleteSms;

const Routes = (router) => {
    // create contacts
    router.route('/createContact')
            .post(createContact);
  
    // get contact
    router.route('/getContact/:id')
            .get(getContact);

    // get all contacts
    router.route('/allContacts')
            .get(getAllContacts);

    // update contact
    router.route('/updateContact/:id')
            .put(updateContact);

    // delete contact
    router.route('/deleteContact/:id')
            .delete(deleteContact);

    // create sms
    router.route('/createSms')
            .post(createSms);
  
    // send sms
    router.route('/sendSms/:id')
            .put(sendSms);

    // get sms
    router.route('/getSms/:id')
            .get(getSms);
        
    // get all sms
    router.route('/allSms')
            .get(getAllSms);

    // delete sms
    router.route('/deleteSms/:id')
            .put(deleteSms);
  };
  
  module.exports = Routes;
