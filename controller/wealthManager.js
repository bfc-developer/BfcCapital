const { log } = require("winston");
const response = require('../utils/response');
const express = require("express");
const { auth } = require('../utils/index');
const ForWealthManager = require("../Models/WealthManagerModel");
const nodemailer = require("nodemailer");
// const path = require("path");
const MailCredientail = require("../credentials/mail");

const fs = require('fs');
const upload = require("express-fileupload");
const app = express();
app.use(upload());

module.exports = {
    async WealthManager(req, res) {
console.log(req.body);

        try {
            console.log("raj ", req.files.Cv);
            var email = req.body.Email;
            let x = Math.floor((Math.random() * 10000));
            var file = req.files.Cv;
            let filename = file.name;
            let date = new Date().toJSON().slice(0, 10)
            date = date.replace(/-/g, '')
            filename = email + date + x + filename;
            file.mv('./allResumes/' + filename)
            file.mv('../client/public/mailAttachment/' + filename)

            var myData = new ForWealthManager({
                Name: req.body.Name,
                Mobile: req.body.Mobile,
                Email: req.body.Email,
                PostAppliedFor: req.body.PostAppliedFor,
                Cv: filename
            });
            myData.save()
                .then(item => {
                    res.send("item saved to database");
                    {/* Mail Start for User */ }
                    var emailcontent = ` <p>Hi <strong> ${req.body.Name}</strong>,</p>
                      <p>Thank you for applying for (${req.body.PostAppliedFor}) opening in BFC Capital. Your request has been received and acknowledged at our end. Our HR Department will get in touch with you shortly.</p>
                      
                      <br><br>
                      <p>This is an auto-generated mail. Please do not reply to the same. If you have a query, you can reach us at hrd@bfccapital.com.</p>
                          <br><br>
                      <p><strong>Thanks & Regards</strong></p>
                      <p><strong>Team BFC Capital</strong></p>
                      `;
                      var transporter = nodemailer.createTransport({
                        host: MailCredientail.MAIL_HOST,
                        port: MailCredientail.MAIL_PORT,
                        secureConnection: false,
                        auth: {
                            user: MailCredientail.MAIL_USERNAME,
                            pass: MailCredientail.MAIL_PASSWORD
                        }
                    });


                    transporter.sendMail({
                        from: "BFC Capital <"+MailCredientail.MAIL_FROM_ADDRESS+">", // sender address
                        to: req.body.Email, // list of receivers
                        subject: "Welcome to BFC Capital", // Subject line
                        text: req.body.PostAppliedFor, // plain text body
                        html: emailcontent, // html body
                    }).then(info => {
                        console.log({ info });
                    }).catch(console.error);

                    // mail sending for Admin *****************
                    var emailcontent = ` <p>Hi,</p>
                    <p>We have received the Job application from <strong>Mr./Mrs. ${req.body.Name}</strong> for current (<strong>${req.body.PostAppliedFor}</strong>) opening position.</p>
                    <p>CV/Resume is also enclosed herewith.</p>
                    
                    <p>Listed below are his/her contact details.</p>
                    <p>Email Id:- ${req.body.Email}</p>
                    <p>Contact No:- ${req.body.Mobile}</p>
                  </br> <img src="cid:filename" />
                    
                     `;
                     var transporterAdmin = nodemailer.createTransport({
                        host: MailCredientail.MAIL_HOST,
                        port: MailCredientail.MAIL_PORT,
                        secureConnection: false,
                        auth: {
                            user: MailCredientail.MAIL_USERNAME,
                            pass: MailCredientail.MAIL_PASSWORD
                        }
                    });


                    transporterAdmin.sendMail({
                        from: "BFC Capital <"+MailCredientail.MAIL_FROM_ADDRESS+">", // sender address
                        to: 'HRD@bfccapital.com', // list of receivers
                        subject: "New job Application From " + req.body.Name, // Subject line
                        text: req.body.PostAppliedFor, // plain text body
                        html: emailcontent, // html body
                        attachments: [
                            {
                                filename: filename,
                                path: process.env.LOCAL_DOMAIN + "/mailAttachment/" + filename,
                                cid: "filenameo",
                            }
                        ]
                    }).then(info => {
                        console.log({ info });
                    }).catch(console.error);

                })


        } catch (error) {
            console.log("error", error);
            return response.error(res, 500, error);
        }


    }
}