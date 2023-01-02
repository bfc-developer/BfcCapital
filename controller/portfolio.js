const { log } = require("winston");
const getMachine = require('../utils/fdCalculator').getMachine;
const response = require('../utils/response');
const Axios = require('axios');
const { auth } = require('../utils/index');

module.exports = {
    //Snapshot
    async Snapshot(req, res) {
        try {

            if (req.body == null || req.body == undefined) {
                return response.error(res, 400, { msg: "Empty body" })
            }

            const data = {
                "name": req.body.name,
                "pan": req.body.pan
            };

            // return res.json({data:JSON.stringify(request_data)});
            Axios.post(process.env.API_URL_WMS + '/api/snapshot', data, {
                headers: {
                    "Authorization": auth.Authorization,
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
            })
                .then((response) => {
                    // console.log('response snapshot',response.data.data.portfolio_data);
                    return res.json({ data: response.data });
                })
                .catch((err) => {
                    return res.json({ status: 400 });
                });
        } catch (error) {
            console.log("error from SipCalculator ", error);
            return response.error(res, 500, error);
        }
    },

    //PortfolioData
    async PortfolioData(req, res) {
        try {

            if (req.body == null || req.body == undefined) {
                return response.error(res, 400, { msg: "Empty body" })
            }

            const request_data = {
                "pan": req.body.pan_card,
            };

            Axios.post(api_url_wms + '/api/portfolio_api_data', request_data, {
                headers: {
                    "Authorization": auth.Authorization,
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
            })
                .then((response) => {
                    // console.log('response portfolio',response.data);
                    return res.json({ data: response.data });
                })
                .catch((err) => {
                    return res.json({ status: 400 });
                });
        } catch (error) {
            console.log("error from LumpSumCalculator ", error);
            return response.error(res, 500, error);
        }
    },

    //Portfolio
    async portfolio(req, res) {
        try {

            if (req.body == null || req.body == undefined) {
                return response.error(res, 400, { msg: "Empty body" })
            }
            const request_data = {
                "pan": req.body.pan_card,
            };

            Axios.post(process.env.API_URL_WMS + '/api/portfolio_api_data', request_data, {
                headers: {
                    "Authorization": auth.Authorization,
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
            })
                .then((response) => {
                    // console.log('response portfolio',response.data);
                    return res.json({ data: response.data });
                })
                .catch((err) => {
                    return res.json({ status: 400 });
                });

        } catch (error) {
            console.log("error from FDCalculator ", error);
            return response.error(res, 500, error);
        }
    },

    //User Member List
    async UserMemberList(req, res) {
        try {

            if (req.body == null || req.body == undefined) {
                return response.error(res, 400, { msg: "Empty body" })
            }

            const request_data = {
                "pan": req.body.pan,
            };
            // console.log("userProfileMemberList", request_data.pan);
            Axios.post(process.env.API_BASE_URL_WMS + '/api/userProfileMemberList', request_data, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
            }).then((response) => {
                // console.log("userProfileMemberList", response.data);
                return res.json({ status: 200, data: response.data });
            }).catch(err => {
                console.log("login err", err);
                return res.send({ status: 400, massage: "Invalid Credentials" });
            });

        } catch (error) {
            console.log("error from emi Calculator ", error);
            return response.error(res, 500, error);
        }
    },

    //ELSS calculator
    async getIINStatus(req, res) {
        try {
            const request_data = {
                "Pan_No": req.body.pan_numbers,
            };

            Axios.post(process.env.API_BASE_URL_PROD + '/getIINStatus', request_data, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
            })
                .then((response) => {
                    //  console.log('response getIINStatus',response.data);
                    return res.json({ data: response.data });
                })
                .catch(err => console.log(err));

        } catch (error) {
            console.log("error from elss Calculator ", error);
            return response.error(res, 500, error);
        }
    },

    //IIN Details WMS
    async IINDetailsWMS(req, res) {
        try {
            const request_data = {
                "iin": req.body.iin,
                "email": req.body.email
            };

            Axios.post(process.env.API_BASE_URL_PROD + '/GETIINDETAILSWMS', request_data, {
                headers: {
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
            console.log("error from elss Calculator ", error);
            return response.error(res, 500, error);
        }
    },

    //PORTFOLIO_DETAIL_API

    async portfolioDetailAPI(req, res) {
        try {

            if (req.body == null || req.body == undefined) {
                return response.error(res, 400, { msg: "Empty body/params" })
            }

            const data = {
                "name": req.body.name,
                "pan": req.body.pan,
                "guard_pan": req.body.guard_pan
            };

            // return res.json({data:JSON.stringify(request_data)});
            Axios.post('https://mfprodigy.bfccapital.com/wmsapi/api/portfolio_detailapi_data', data, {
                headers: {
                    "Authorization": auth.Authorization,
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
            })
                .then((response) => {
                    // console.log('response portfolioDetailApi',response.data.data.portfolio_data);
                    return res.json({ data: response.data });
                })
                .catch((err) => {
                    return res.json({ status: 400 });
                });

        } catch (error) {
            console.log("error from elss Calculator ", error);
            return response.error(res, 500, error);
        }
    },
}