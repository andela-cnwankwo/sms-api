# sms-api
SMS management API


### Introduction
This API provides an easy way to create contacts and send SMS to created contacts

### Technologies
NodeJS, ExpressJS, PostgreSQL, Sequelize

### How To Use
This can be easily installed locally by following the following steps:
- Clone the repository locally
- Run `npm install` to install node packages
- Add `.env` file from the `.env.sample` specifying your database URL in it
- Run `export DATABASE_URL=your-database-url` to make it temporarily available on the terminal
- Run `sequelize db:migrate` (To migrate the database)
- Run `npm start` to start up the application which can be accessed on the specified port

### Requirements
To be able to use the application locally, the following are required:
- NodeJS
- Node Package Manager (npm)
- Postgresql database
- sequelize prefarrably installed globally using `npm install -g sequelize-cli`

### API Endpoints

<table> 
<tr>
<th> Endpoint </th> <th> Method </th> <th> Action </th> <th> Payload </th>
</tr>
<tr>
<td> /createContact </td> <td> POST </td> <td> create a new contact </td> <td> name(string), phone_number(int) </td>
</tr>
<tr>
<td> /getContact/:id </td> <td> GET </td> <td> Return a given contact with :id</td> <td> none </td>
</tr>
<tr>
<td> /allContacts </td> <td> GET </td> <td> Return all contacts</td> <td> none </td>
</tr>
<tr>
<td> /updateContact/:id </td> <td> UPDATE </td> <td> Update a given contact with :id</td> <td> name(string) phone_number(int) </td>
</tr>
<tr>
<td> /deleteContact/:id </td> <td> DELETE </td> <td> Delete a given contact with :id</td> <td> none</td>
</tr>
<tr>
<td> /createSms </td> <td> POST </td> <td> Create SMS</td> <td> message(string), sender_id(int)</td>
</tr>
<tr>
<td> /sendSms/:id </td> <td> PUT </td> <td> Send SMS with specified :id to the receiver_number</td> <td> receiver_number(int)</td>
</tr>
<tr>
<td> /getSms/:id </td> <td> GET </td> <td> Return SMS with specified :id</td> <td> none </td>
</tr>
<tr>
<td> /allSms </td> <td> GET </td> <td> Return all SMS</td> <td> none </td>
</tr>
<tr>
<td> /deleteSms/:id </td> <td> DELETE </td> <td> Delete SMS with specified :id</td> <td> none </td>
</tr>
</table>

### How To Contribute
To contribute, fork this repository, make required changes and open a pull request.

### Roadmap
[Project Roadmap](https://trello.com/b/wr8dOZkG/sms-api)

### Contributors
- [Ethan Nwankwo](https://github.com/andela-cnwankwo)