// const logger = require('../utils/logger')(__filename);
const response = require('../utils/response');
// const { comparePassword } = require('../utils/password');
// const { generateToken, validateToken } = require('../utils/token');
const CONFIG = require('../utils/config');
const { auth } = require('../utils/index');


module.exports = {
    //PurchaseLumpSum
    async PurchaseLumpSum(req, res) {
        try {
            const request_data = {
                "email": req.body.email,
                "debit_amount_type": req.body.debit_amount_type,
                "input_ref_no": req.body.input_ref_no,
                "perpetual_flag": req.body.perpetual_flag,
                "instrm_date": req.body.instrm_date,
                "accountNo": req.body.accountNo,
                "bank_code": req.body.bank_code,
                "fscode": req.body.fscode,
                "rtgs_code": req.body.rtgs_code,
                "branch": req.body.branch,
                "sub_trxn_type": req.body.sub_trxn_type,
                "trxn_acceptance": req.body.trxn_acceptance,
                "payment_mode": req.body.payment_mode,
                "holder_name": req.body.holder_name,
                "ach_exist": req.body.ach_exist,
                "client_callback_url": req.body.client_callback_url,
                "iin": req.body.iin,
                "instrm_amount": req.body.instrm_amount,
                "Return_paymnt_flag": req.body.Return_paymnt_flag,
                "umrn": req.body.umrn,
                "childArr": req.body.childArr
            }

            //return res.json({data:request_data});
            Axios.post(process.env.API_BASE_URL_PROD + '/multi_purchase', request_data, {
                headers: {
                    "Authorization": auth.Authorization,
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
            })
                .then((response) => {
                    console.log('response purchase', response.data);
                    return res.json({ data: response.data });
                })
                .catch((err) => {
                    // console.log('error',err);
                    return res.json({ status: 400 });
                });
        } catch (error) {
            console.log("error from PurchaseLumpSum ", error);
            return response.error(res, 500, error);
        }
    },
}