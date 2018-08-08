var express=require('express');//express module returns a function 
var bodyParser = require('body-parser');//Body parser for POSt requests
var smtpTransport = require('nodemailer-smtp-transport');
var http=require('http');
'use strict';//node mailer
const nodemailer = require('nodemailer');//node mailer
//which is stord by app
var app=express();
//*************************************************************************************** */

//                    POST Method
//*************************************************************************************** */
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });//Its the middelware

//*************************************************************************************** */

//                    Partial Routing
//*************************************************************************************** */
app.set('view engine','ejs');/// setting a view as ejs
app.use('/assets',express.static('assets'));
//*************************************************************************************** */

//                  Get Methods and Pages/Routing
//*************************************************************************************** */
app.get('/',function(req,res){
    //res.send('This is the Home page');
    res.render('index');
    console.log('User requested for Home page');
});
app.get('/contact',function(req,res){
    //console.log('Query String for this page:'+req.query);
    //res.send('This is the Contact page');
    res.render('contact',{queryObj: req.query});
    console.log('User requested for Contact page (Get method)');
});

//*************************************************************************************** */

//                    POST Method contact page
//*************************************************************************************** */
app.post('/contact',urlencodedParser,function(req,res){
    console.log('User requested for Contact page (Post method), Details are : ');
    console.log(req.body);
    res.render('contactSuccess',{data: req.body});//route to success page on submit
    
});
app.get('/thanks',function(req,res){
    //res.send('This is the Contact page');
    res.render('thanks');
    console.log('User requested for end page');
});
app.get('/profile/:id',function(req,res){
    var data={ age: 25, job:'Software Engineer',hobby:['Coding','Playing','Sleeping']};
    //res.send('You have requested for Id : '+req.params.id);
    //console.log('User Requested for ID : '+req.params.id+' inside profile page ');
    res.render('profile', {person: req.params.id, data:data});
    console.log('User requested for '+req.url+' page');
});
app.listen(3000);


//*************************************************************************************** */

//                    Node Mailer-- Sending mails
//*************************************************************************************** */


var smtpTransport = nodemailer.createTransport(smtpTransport({
    service: 'Gmail',
    auth: {
      user: 'khan.nadeem5811@gmail.com',
      pass: '143@Aleena'
    }
  }));
  
  app.post('/send-email', function(req, res) {
      var mailOptions = {
          from: '"Nadeem New" <khan.nadeem5811@gmail.com>', // sender address
          to: "khan.nadim58@gmail.com", // list of receivers
          subject: 'Form ', // Subject line
          text: req.body.to // plaintext body
  
      };
          smtpTransport.sendMail(mailOptions, function(error, info) {
           if (error) {
               return console.log(error);
           }
           console.log('Message sent: ' + info.response);
       });
  
       res.redirect("/view/contact.ejs");
   });