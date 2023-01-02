

module.exports = {
    //SIP calculator
    async contact(req, res) {
        try {
          console.log("rajkumar",req.body);

            // return res.status(200).json({ msg: "Calculated successfully", totalSaving: getMachine(Math.round(totalSaving)), gainss: getMachine(Math.round(gainss)), mainresults: getMachine(Math.round(mainresults)), totalMonth: getMachine(Math.round(totalMonth)) });
        } catch (error) {
            console.log("error  ", error);
            // return response.error(res, 500, error);
        }
    },
}