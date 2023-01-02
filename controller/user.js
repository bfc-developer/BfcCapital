// const logger = require('../utils/logger')(__filename);
const Config = require('../utils/config');
const response = require('../utils/response');
const Axios = require('axios');
const { auth } = require('../utils/index');

// const User = require('../model/User');
// const Principal = require('../model/Principal');

module.exports = {
    async userLogin(req, res) {
        try {
            const request_data = {
                "email": req.body.email,
                "password": req.body.password,
            };

            Axios.post(process.env.API_BASE_URL + '/api/web/login', request_data, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
            })
                .then((response) => {
                    // console.log("login", response.data);
                    return res.json({ status: 200, data: response.data });
                })
                .catch(err => {
                    console.log("login err", err);
                    return res.send({ status: 400, massage: "Invalid Credentials" });
                });

        } catch (error) {
            console.log("error from login api ", error)
            return res.status(500).send({ success: false, msg: "some error occured", error })
        }
    },

    async userRegister(req, res) {
        try {
            const request_data = {
                "name": req.body.name,
                "phone": req.body.phone,
                "email": req.body.email,
                "password": req.body.password,
                "c_password": req.body.c_password,
                "type_device": "Web",
            };

            // return res.json({data:req.body.name});
            Axios.post(process.env.API_BASE_URL + '/api/registers', request_data, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
            })
                .then((response) => {
                    // console.log(response.data);
                    return res.json({ status: 200, data: response.data });
                })
                .catch(err => {
                    // console.log(err);  
                    return res.send({ status: 400, massage: "Email Id or Mobile no is Already Exits!" });
                    // res.status(400).json(err)
                });

        } catch (error) {
            console.log("error from login api ", error)
            return res.status(500).send({ success: false, msg: "some error occured", error })
        }
    },

    async forgotPassword(req, res) {
        try {
            const request_data = {
                "name": req.body.name,
                "phone": req.body.phone,
                "email": req.body.email,
                "password": req.body.password,
                "c_password": req.body.c_password,
                "type_device": "Web",
            };

            // return res.json({data:req.body.name});
            Axios.post(process.env.API_BASE_URL + '/api/registers', request_data, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
            })
                .then((response) => {
                    // console.log(response.data);
                    return res.json({ status: 200, data: response.data });
                })
                .catch(err => {
                    // console.log(err);  
                    return res.send({ status: 400, massage: "Email Id or Mobile no is Already Exits!" });
                    // res.status(400).json(err)
                });

        } catch (error) {
            console.log("error from login api ", error)
            return res.status(500).send({ success: false, msg: "some error occured", error })
        }
    },

    async resetPassword(req, res) {
        try {
            const request_data = {
                "email": req.body.email,
                "password": req.body.password,
                "c_password": req.body.cpassword,
            };

            // return res.json(JSON.stringify(request_data));
            Axios.post(process.env.API_BASE_URL + '/api/updatePassword', request_data, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
            })
                .then((response) => {
                    // console.log(response.data);
                    return res.json({ status: 200, data: response.data });
                })
                .catch(err => {
                    console.log("error " + JSON.stringify(err.message));
                    // return res.json({status:422,massage:"Otp not matched"});
                });

        } catch (error) {
            console.log("error from login api ", error)
            return res.status(500).send({ success: false, msg: "some error occured", error })
        }
    },

    async userProfile(req, res) {
        try {
            const request_data = {
                email: req.body.email
            };

            // return res.json(JSON.stringify(request_data)); 
            Axios.get('https://mfprodigy.bfccapital.com/api/persional_details/getUser_profile?email=' + request_data.email, {
                headers: {
                    "Authorization": auth.Authorization,
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
            })
                .then((response) => {
                    // console.log('response User_profile',response);
                    return res.json({ status: 200, data: response.data });
                })
                .catch((err) => {
                    // console.log('error', err);
                    return res.json({ status: 400 });
                });

        } catch (error) {
            console.log("error from login api ", error)
            return res.status(500).send({ success: false, msg: "some error occured", error })
        }
    },
}