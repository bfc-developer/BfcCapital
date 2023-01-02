// const logger = require('../utils/logger')(__filename);
const response = require('../utils/response');
// const { comparePassword } = require('../utils/password');
// const { generateToken, validateToken } = require('../utils/token');
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
                    // console.log('error',err);
                    return res.json({ status: 400 });
                });
        } catch (error) {
            console.log("error from getBasketList ", error);
            return response.error(res, 500, error);
        }
    },
}