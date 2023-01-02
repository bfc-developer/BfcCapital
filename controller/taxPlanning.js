// const logger = require('../utils/logger')(__filename);
const response = require('../utils/response');
// const { comparePassword } = require('../utils/password');
// const { generateToken, validateToken } = require('../utils/token');
const Axios = require('axios');
const CONFIG = require('../utils/config');
const { auth } = require('../utils/index');

module.exports = {
    //BasketList
    async getBasketList(req, res) {
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
                    console.log('error', err);
                    return res.json({ status: 400 });
                });
        } catch (error) {
            console.log("error from getBasketList ", error);
            return response.error(res, 500, error);
        }
    },

    //Product via ISIN
    async product_via_ISIN(req, res) {
        try {

            const request_data = {
                "isin": req.body.isin,
                "amc_code": req.body.amc_code
            };

            Axios.post(process.env.API_BASE_URL_PROD + '/getProductViaIsinAmc', request_data, {
                headers: {
                    "Authorization": auth.Authorization,
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
            })
                .then((response) => {
                    // console.log('response ProductViaISIN', response.data);
                    return res.json({ data: response.data });
                })
                .catch((err) => {
                    console.log('error', err);
                    return res.json({ status: 400 });
                });
        } catch (error) {
            console.log("error from getBasketList ", error);
            return response.error(res, 500, error);
        }
    },

    //AMC LIST
    async AMCList(req, res) {
        try {

            const request_data = {
                "isin": req.body.isin,
                "amc_code": req.body.amc_code
            };

            Axios.post(process.env.API_BASE_URL_PROD + '/getProductViaIsinAmc', request_data, {
                headers: {
                    "Authorization": auth.Authorization,
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
            })
                .then((response) => {
                    // console.log('response ProductViaISIN', response.data);
                    return res.json({ data: response.data });
                })
                .catch((err) => {
                    console.log('error', err);
                    return res.json({ status: 400 });
                });
        } catch (error) {
            console.log("error from getBasketList ", error);
            return response.error(res, 500, error);
        }
    },

    //Mandate List
    async MandateList(req, res) {
        try {

            const request_data = {
                "isin": req.body.isin,
                "amc_code": req.body.amc_code
            };

            Axios.post(process.env.API_BASE_URL_PROD + '/getProductViaIsinAmc', request_data, {
                headers: {
                    "Authorization": auth.Authorization,
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
            })
                .then((response) => {
                    // console.log('response ProductViaISIN', response.data);
                    return res.json({ data: response.data });
                })
                .catch((err) => {
                    console.log('error', err);
                    return res.json({ status: 400 });
                });
        } catch (error) {
            console.log("error from getBasketList ", error);
            return response.error(res, 500, error);
        }
    },

    //Bank List
    async BankList(req, res) {
        try {

            const request_data = {
                email: req.body.email,
                iin: req.body.iin
            };

            //return res.json(JSON.stringify(request_data));
            Axios.post(process.env.API_BASE_URL_PROD + '/getBankMultipleFromNse?email=' + request_data.email + "&iin=" + request_data.iin, {
                headers: {
                    "Authorization": auth.Authorization,
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
            })
                .then((response) => {
                    // console.log('response getbankList',response.data);
                    return res.json({ data: response.data });
                })
                .catch((err) => {
                    console.log('error', err);
                    return res.json({ status: 400 });
                });
        } catch (error) {
            console.log("error from getBasketList ", error);
            return response.error(res, 500, error);
        }
    },

    //insertTransactionDetails
    async InsertTransactionDetails(req, res) {
        try {

            const request_data = {
                "iin": req.body.iin,
                "pan": req.body.pan,
                "mode": req.body.mode,
                "payment_mode": req.body.payment_mode,
                "email": req.body.email,
                "date": req.body.date,
                "amc": req.body.amc,
                "scheme_code": req.body.scheme_code,
                "amount": req.body.amount,
                "folio": req.body.folio,
                "scheme_name": req.body.scheme_name,
            };


            Axios.post(process.env.API_BASE_URL + '/api/insertTransactionDetails', request_data, {
                headers: {
                    "Authorization": auth.Authorization,
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
            })
                .then((response) => {
                    // console.log('response mobileno', response.data);
                    return res.json({ data: response.data });
                })
                .catch(err => {
                    console.log("detailsInsertionKycHolderTbl err", err);
                    return res.send({ status: 400, massage: "Invalid Credentials" });
                });
        } catch (error) {
            console.log("error from getBasketList ", error);
            return response.error(res, 500, error);
        }
    },

    //MULTI_PURCHASE_SIP
    async MultiPurchaseSIP(req, res) {
        try {

            const request_data = {
                "email": req.body.email,
                "sub_trxn_type": "S",
                "trxn_acceptance": "ALL",
                "payment_mode": "M",
                "debit_amount_type": "M",
                "ach_exist": "Y",
                "return_paymnt_flag": "Y",
                "client_callback_url": "API URL",
                "instrm_date": "",
                "transfer_date": "",
                "instrm_amount": req.body.instrm_amount,
                "bank_code": req.body.bank_code,
                "holder_name": req.body.holder_name,
                "accountNo": req.body.accountNo,
                "acoount_type": req.body.acoount_type,
                "branch": req.body.branch,
                "umrn": req.body.umrn,
                "iin": req.body.iin,
                "ach_amt": req.body.ach_amt,
                "ach_fromdate": req.body.ach_fromdate,
                "ach_enddate": req.body.ach_enddate,
                "until_cancelled": req.body.until_cancelled,
                "childArr": req.body.childArr,
            };

            //return res.json({data:request_data});
            Axios.post(process.env.API_BASE_URL_PROD + '/multi_purchase_sip', request_data, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
            })
                .then((response) => {
                    // console.log('response SWP',response.data);
                    return res.json({ data: response.data });
                })
                .catch((err) => {
                    console.log('error', err);
                    return res.json({ status: 400 });
                });

        } catch (error) {
            console.log("error from MultiPurchaseSIP ", error);
            return response.error(res, 500, error);
        }
    },

    //DELETE_TRANSACTION_DETAILS
    async DeleteTransactionDetails(req, res) {
        try {

            const request_data = {
                "email": req.body.email,
                "sub_trxn_type": "S",
                "trxn_acceptance": "ALL",
                "payment_mode": "M",
                "debit_amount_type": "M",
                "ach_exist": "Y",
                "return_paymnt_flag": "Y",
                "client_callback_url": "API URL",
                "instrm_date": "",
                "transfer_date": "",
                "instrm_amount": req.body.instrm_amount,
                "bank_code": req.body.bank_code,
                "holder_name": req.body.holder_name,
                "accountNo": req.body.accountNo,
                "acoount_type": req.body.acoount_type,
                "branch": req.body.branch,
                "umrn": req.body.umrn,
                "iin": req.body.iin,
                "ach_amt": req.body.ach_amt,
                "ach_fromdate": req.body.ach_fromdate,
                "ach_enddate": req.body.ach_enddate,
                "until_cancelled": req.body.until_cancelled,
                "childArr": req.body.childArr,
            };

            //return res.json({data:request_data});
            Axios.post(process.env.API_BASE_URL_PROD + '/multi_purchase_sip', request_data, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
            })
                .then((response) => {
                    // console.log('response SWP',response.data);
                    return res.json({ data: response.data });
                })
                .catch((err) => {
                    console.log('error', err);
                    return res.json({ status: 400 });
                });

        } catch (error) {
            console.log("error from MultiPurchaseSIP ", error);
            return response.error(res, 500, error);
        }
    },

    //SAVE_TRANSACTION_DETAILS
    async SaveTransactionDetails(req, res) {
        try {
            // no controller logic found
            return;

        } catch (error) {
            console.log("error from MultiPurchaseSIP ", error);
            return response.error(res, 500, error);
        }
    },
}