const { log } = require("winston");
const nodemailer = require("nodemailer");
const response = require('../utils/response');
const express = require("express");
const { auth } = require('../utils/index');
const ForVertualRelation = require('../Models/VertualRelationManagerModel');
const upload = require("express-fileupload");
const MailCredientail = require("../credentials/mail");

const app = express();
app.use(upload());


module.exports = {
    async userData(req, res) {
        // const allProducts = await ForVertualRelation.findOne({ 'Email': req.body.Email })
        // console.log("allProducts   ", allProducts);
        //  if(allProducts != null)return res.status(400).json({msg:"Email Allready Registered !"})
        try {
            console.log("raj ", req.files.Cv);
            console.log("__dirname ", __dirname);
            var email = req.body.Email.slice(0, -4);
            let x = Math.floor((Math.random() * 10000));
            var file = req.files.Cv;
            let filename = file.name;
            let date = new Date().toJSON().slice(0, 10)
            date = date.replace(/-/g, '')
            filename = email + date + x + filename;
            file.mv('./allResumes/' + filename)
            file.mv('../client/public/mailAttachment/' + filename)
            var myData = new ForVertualRelation({
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
                     <p>This is an auto-generated mail. Please do not reply to the same.If you have a query, you can reach us at hrd@bfccapital.com.</p>
                         <br><br>
                     <p><strong>Thanks & Regards</strong></p>
                     <p><strong>Team BFC Capital</strong></p>
                     `;
                    // const transporter = nodemailer.createTransport({
                    //     service: 'gmail',
                    //     auth: {
                    //         user: 'rajkumarbfcsofttech@gmail.com',
                    //         pass: 'dmpycgstaxmxdbif',
                    //     },
                    // });
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
                        from: 'rajkumarbfcsofttech@gmail.com', // sender address
                        to: req.body.Email, // list of receivers
                        subject: "Welcome to BFC Capital", // Subject line
                        text: req.body.PostAppliedFor, // plain text body
                        html: emailcontent, // html body
                    }).then(info => {
                        console.log({ info });
                    }).catch(console.error);
                })
            // mail sending for Admin *****************
            var emailcontent = ` <p>Hi,</p>
                    <p>We have received the Job application from <strong>Mr./Mrs. ${req.body.Name}</strong> for current (<strong>${req.body.PostAppliedFor}</strong>) opening position.</p>
                    <p>CV/Resume is also enclosed herewith.</p>
                    
                    <p>Listed below are his/her contact details.</p>
                    <p>Email Id:- ${req.body.Email}</p>
                    <p>Contact No:- ${req.body.Mobile}</p>
                    </br></br> <img src="cid:filename" />

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
                from:  "BFC Capital <"+MailCredientail.MAIL_FROM_ADDRESS+">", // sender address
                to: "HRD@bfccapital.com", // list of receivers
                subject: "BFC Capital ", // Subject line
                text: req.body.Subject, // plain text body
                html: emailcontent, // html body


                attachments: [
                    {
                        filename: filename,
                        path:  process.env.LOCAL_DOMAIN + "/mailAttachment/" + filename,
                        cid: "filenameo",
                    }
                ]
            })

            

            
                .then(info => {
                    console.log({ info });
                }).catch(err => { console.log("err from transponder ", err) });


        } catch (error) {
            console.log("error", error);
            return response.error(res, 500, error);
        }
    }
}

