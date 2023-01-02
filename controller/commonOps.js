const Config = require('../utils/config')

const response = require('../utils/response');
const { auth } = require('../utils/index');
// const { hashPassword, comparePassword } = require('../utils/password');


module.exports = {
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
}