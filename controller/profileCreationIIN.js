// const logger = require('../utils/logger')(__filename);
const response = require('../utils/response');
// const { comparePassword } = require('../utils/password');
// const { generateToken, validateToken } = require('../utils/token');
const CONFIG = require('../utils/config');
const { auth } = require('../utils/index');

module.exports = {
    //Profile/IIN Creation
    async profileCreationIIN(req, res) {
        try {
            const request_data = {
                "transaction_type": req.body.transaction_type,
                "anchoring": req.body.anchoring,
                "constellation": req.body.constellation,
            };

            // return res.json(JSON.stringify(request_data));
            Axios.post(process.env.API_BASE_URL_PROD + '/getBasketList', request_data, {
                headers: {
                    "Authorization": auth.Authorization,
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
            })
                .then((response) => {
                    // console.log('response getBasketList',response.data);
                    return res.json({ data: response.data });
                })
                .catch((err) => {
                    // console.log('error',err);
                    return res.json({ status: 400 });
                });
        } catch (error) {
            console.log("error from getBasketList ", error);
            return response.error(res, 500, error);
        }
    },

    //Get IIN
    async getIIN(req, res) {
        try {
            const request_data = {
                "tax_status": req.body.tax_status,
                "hold_nature": req.body.hold_nature,
                "fh_pan": req.body.fh_pan,
                "jh1_pan": req.body.jh1_pan,
                "jh2_pan": req.body.jh2_pan,
                "guardian_pan": req.body.guardian_pan,
                "investor_name": req.body.investor_name,
                "email": req.body.email,
            };

            // console.log('GETIIN', request_data);

            Axios.post('https://mfprodigy.bfccapital.com/prodigyfinallive/GETIIN', request_data, {
                headers: {
                    "Authorization": auth.Authorization,
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
            })
                .then((response) => {
                    console.log('response getIinstatus', response);
                    return res.json({ data: response.data });
                })
                .catch(err => console.log(err));
        } catch (error) {
            console.log("error from getIIN ", error);
            return response.error(res, 500, error);
        }
    },

    //Get getoccupations
    async getoccupations(req, res) {
        try {
            Axios.get(process.env.API_BASE_URL + '/api/nse/getOccupation', {
                headers: {
                    "Authorization": auth.Authorization,
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
            })
                .then((response) => {
                    // console.log('response',response.data);
                    return res.json({ data: response.data });
                })
                .catch(err => console.log(err));
        } catch (error) {
            console.log("error from getIIN ", error);
            return response.error(res, 500, error);
        }
    },

    //Get Income
    async getIncome(req, res) {
        try {
            Axios.get(process.env.API_BASE_URL + '/api/persional_details/getIncome', {
                headers: {
                    "Authorization": auth.Authorization,
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
            })
                .then((response) => {
                    // console.log('response',response.data);
                    return res.json({ data: response.data });
                })
                .catch(err => console.log(err));

        } catch (error) {
            console.log("error from getIIN ", error);
            return response.error(res, 500, error);
        }
    },

    //Account Type
    async accountType(req, res) {
        try {

            Axios.get(process.env.API_BASE_URL + '/api/persional_details/getAccountType', {
                headers: {
                    "Authorization": auth.Authorization,
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
            })
                .then((response) => {
                    // console.log('response',response.data);
                    return res.json({ data: response.data });
                })
                .catch(err => console.log(err));

        } catch (error) {
            console.log("error from accountType ", error);
            return response.error(res, 500, error);
        }
    },

    //BANK_LIST
    async bankList(req, res) {
        try {

            //return res.json(JSON.stringify(request_data));
            Axios.get(process.env.API_BASE_URL_PROD + '/getNSEBank', {
                headers: {
                    "Authorization": auth.Authorization,
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
            })
                .then((response) => {
                    // console.log('response',response.data.data);
                    return res.json({ status: 200, data: response.data });
                })
                .catch((err) => console.log(err));


        } catch (error) {
            console.log("error from accountType ", error);
            return response.error(res, 500, error);
        }
    },

    // GET_COUNTRY
    async getCountry(req, res) {
        try {

            //return res.json(JSON.stringify(request_data));
            Axios.get(process.env.API_BASE_URL + '/api/persional_details/getCountry', {
                headers: {
                    "Authorization": auth.Authorization,
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
            })
                .then((response) => {
                    // console.log('response',response.data.data);
                    return res.json({ status: 200, data: response.data });
                })
                .catch((err) => console.log(err));


        } catch (error) {
            console.log("error from accountType ", error);
            return response.error(res, 500, error);
        }
    },

    // GET_RELATIONSHIP_MASTER
    async getRelationshipMaster(req, res) {
        try {

            Axios.get(process.env.API_BASE_URL_PROD + '/getRelationshipMaster')
                .then((response) => {
                    return res.json({ data: response.data });
                })
                .catch(err => {
                    return res.send({ status: 400, massage: "Invalid Credentials" });
                });

        } catch (error) {
            console.log("error from accountType ", error);
            return response.error(res, 500, error);
        }
    },

    // STATE_BY_PINCODE
    async statByPINCode(req, res) {
        try {
            const request_data = {
                "pincode": req.body.pincode,
            };

            //return res.json(JSON.stringify(request_data));
            Axios.post(process.env.API_BASE_URL + '/api/persional_details/getStateCitybyPincode', request_data, {
                headers: {
                    "Authorization": auth.Authorization,
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
            })
                .then((response) => {
                    // console.log('response',response.data.data);
                    return res.json({ status: 200, data: response.data });
                })
                .catch((err) => console.log(err));


        } catch (error) {
            console.log("error from accountType ", error);
            return response.error(res, 500, error);
        }
    },

    // ADDITIONAL_IIN_PERSONAL_DETAILS
    async additionalIINPersonalDetails(req, res) {
        try {
            const request_data = {
                "pan_card": req.body.pan,
                "email": req.body.email,
                "phone": req.body.phone,
                "dob": req.body.dob,
                "birth_place": req.body.pob,
                "occupation": req.body.occupation,
                "income_range": req.body.inc_range,
                "resident_status": req.body.resident,
                "phone": req.body.mobileNo,
                "parent_email": req.body.parent_email,
                "name": req.body.name,
                "guardian_name": req.body.guardian_name,
                "guardian_dob": req.body.guardian_dob,
                "tax_status": req.body.tax_status,
                "holding_nature": req.body.holding_nature,
                "relation_with_admin": req.body.relation_with_admin
            };
            // console.log('response userIincreationController', request_data);
            Axios.post(process.env.API_BASE_URL + '/api/userIincreationController/user_profile_creation', request_data, {
                headers: {
                    "Authorization": auth.Authorization,
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
            })
                .then((response) => {
                    // console.log('response userIincreationController', response.data);
                    return res.json({ data: response.data });
                })
                .catch(err => console.log(err));

        } catch (error) {
            console.log("error from additionalIINPersonalDetails ", error);
            return response.error(res, 500, error);
        }
    },

    // ADDITIONAL_IIN_ADDRESS_DETAILS
    async additionalIINAddressDetails(req, res) {
        try {
            if (req.body.resident == '0') {
                const request_data = {
                    "user_id": req.body.user_id,
                    "city": req.body.ncity,
                    "state": req.body.nstate,
                    "locality": req.body.nlandmark,
                    "address": req.body.naddress,
                    "country": req.body.ncountry,
                    "pincode": req.body.npin,
                    "nri_city": req.body.nri_city,
                    "nri_state": req.body.nri_state,
                    "nri_locality": req.body.nri_landmark,
                    "nri_addr1": req.body.nri_address,
                    "nri_country": req.body.nri_country,
                    "nri_pincode": req.body.nri_pin
                };

                // return res.json(JSON.stringify(request_data));
                Axios.post(process.env.API_BASE_URL + '/api/userIincreationController/address_details_pc', request_data, {
                    headers: {
                        "Authorization": auth.Authorization,
                        "Access-Control-Allow-Origin": "*",
                        "Content-Type": "application/json"
                    },
                })
                    .then((response) => {
                        // console.log('response',response.data);
                        return res.json({ data: response.data });
                    })
                    .catch(err => console.log(err));

            } else {

                const request_data = {
                    "user_id": req.body.user_id,
                    "city": req.body.city,
                    "state": req.body.state,
                    "locality": req.body.landmark,
                    "address": req.body.address,
                    "country": req.body.country,
                    "pincode": req.body.pin,
                    "nri_city": "",
                    "nri_state": "",
                    "nri_locality": "",
                    "nri_addr1": "",
                    "nri_country": "",
                    "nri_pincode": ""
                };

                // return res.json(JSON.stringify(request_data));
                Axios.post(process.env.API_BASE_URL + '/api/userIincreationController/address_details_pc', request_data, {
                    headers: {
                        "Authorization": auth.Authorization,
                        "Access-Control-Allow-Origin": "*",
                        "Content-Type": "application/json"
                    },
                })
                    .then((response) => {
                        // console.log('response',response.data);
                        return res.json({ data: response.data });
                    })
                    .catch(err => console.log(err));

            }

        } catch (error) {
            console.log("error from additionalIINPersonalDetails ", error);
            return response.error(res, 500, error);
        }
    },

    // ADDITIONAL_IIN_DECLARATION_JOURNEY_PC
    async additionalIINDeclarationJoiurneyPC(req, res) {
        try {
            const request_data = {
                "user_id": req.body.user_id,
                "exposedPolitically": req.body.not_politically,
                "othertaxpayer": req.body.tax_payer,
            };

            //  return res.json(JSON.stringify(request_data));
            Axios.post(process.env.API_BASE_URL + '/api/userIincreationController/declaration_journy_pc', request_data, {
                headers: {
                    "Authorization": auth.Authorization,
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
            })
                .then((response) => {
                    // console.log('response',response.data);
                    return res.json({ data: response.data });
                })
                .catch(err => console.log(err));

        } catch (error) {
            console.log("error from additionalIINDeclarationJoiurneyPC ", error);
            return response.error(res, 500, error);
        }
    },

    // ADDITIONAL_IIN_GET_NOMINEE
    async additionalIINgetNominee(req, res) {
        try {
            const request_data = {
                "user_id": req.body.user_id,
            };

            // return res.json(JSON.stringify(request_data));
            Axios.get(process.env.API_BASE_URL + '/api/userIincreationController/allNominee_pc/' + req.body.user_id, {
                headers: {
                    "Authorization": auth.Authorization,
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
            })
                .then((response) => {
                    // console.log('response',response.data);
                    return res.json({ data: response.data });
                })
                .catch(err => console.log(err));
        } catch (error) {
            console.log("error from additionalIINgetNominee ", error);
            return response.error(res, 500, error);
        }
    },

    //ADDITIONAL_IIN_CREATE
    async additionalIICreate(req, res) {
        try {

            const request_data = {
                "user_id": req.body.user_id,
            };

            // return res.json(JSON.stringify(request_data));
            Axios.post(process.env.API_BASE_URL + '/api/userIincreationController/CreateCustomer_pc', request_data, {
                headers: {
                    "Authorization": auth.Authorization,
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
            })
                .then((response) => {
                    // console.log('response IIN',response.data);
                    return res.json({ data: response.data });
                })
                .catch(err => console.log(err));
        } catch (error) {
            console.log("error from additionalIINgetNominee ", error);
            return response.error(res, 500, error);
        }
    },
}