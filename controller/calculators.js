const { log } = require("winston");
const getMachine = require('../utils/fdCalculator').getMachine;
const response = require('../utils/response');
const axios = require('axios');
const { auth } = require('../utils/index');

module.exports = {
    //SIP calculator
    async SipCalculator(req, res) {
        try {
            if (req.body == null || req.body == undefined) {
                return response.error(res, 400, { msg: "Empty body" })
            }
            console.log("ASddd");

            const { monthlySavings, investmentPeriod, expectedRateReturn } = req.body;

            var monthlyRate = expectedRateReturn / 12 / 100;
            var months = investmentPeriod * 12;
            var futureValue = 0;
            // var futureValue = (monthlySavings * (1 + monthlyRate) * ((Math.pow((1 + monthlyRate), months)) - 1) / monthlyRate);
            var futureValue = monthlySavings * (Math.pow(1 + monthlyRate, months) - 1) / monthlyRate;

            var mainresults = futureValue.toFixed(2)
            var totalSaving = monthlySavings * months
            var gains = (mainresults - monthlySavings * months).toFixed(2)
            var totalMonth = investmentPeriod
            var a = parseInt(totalSaving)
            var g = parseInt(gains)
            var gainss = a + g
            // console.log("aaaaaaaaaas", a + g);
            const data = {
                totalSaving,
                gainss,
                mainresults,
                investmentPeriod,
                totalMonth

            };

            return res.status(200).json({ msg: "Calculated successfully", totalSaving: getMachine(Math.round(totalSaving)), gainss: getMachine(Math.round(gainss)), mainresults: getMachine(Math.round(mainresults)), totalMonth: getMachine(Math.round(totalMonth)) });
        } catch (error) {
            console.log("error from SipCalculator ", error);
            return response.error(res, 500, error);
        }
    },

    //LUMPSUM calculator
    async LumpSumCalculator(req, res) {
        try {

            if (req.body == null || req.body == undefined) {
                return response.error(res, 400, { msg: "Empty body" })
            }

            const { investment, period, returnValue } = req.body;

            var i = (returnValue / 100) / 12;

            var lumpsums = investment * Math.pow((1 + returnValue / 100), period);
            var lumpsum = parseInt(lumpsums).toFixed()
            // var lumpsum = parseInt(lumpsums)
            console.log("lumpsum", lumpsum)
            var gains = lumpsum - investment

            const data = {
                investment: getMachine(investment),
                period: getMachine(period),
                lumpsum: getMachine(lumpsum),
                gains: getMachine(gains)
            };
            res.status(200).json({
                msg: "Calculated Succesfully",
                data: data
            });

            // return res.status(200).json({ msg: "Calculated successfully", totalSaving: getMachine(Math.round(totalSaving)), gainss: getMachine(Math.round(gainss)), mainresults: getMachine(Math.round(mainresults)), totalMonth: getMachine(Math.round(totalMonth)) });
        } catch (error) {
            console.log("error from LumpSumCalculator ", error);
            return response.error(res, 500, error);
        }
    },

    //FD calculator
    async FDCalculator(req, res) {
        try {

            if (req.body == null || req.body == undefined) {
                return response.error(res, 400, { msg: "Empty body" })
            }

            const { investAmount, investmentDuration, intrestRate, compoundingPeriod } = req.body;

            var p = investAmount;
            var t = investmentDuration;
            var r = intrestRate;
            var n = compoundingPeriod;
            var pric = p;
            var amt = ""; var inest = "";
            for (var i = 1; i <= t; i++) {
                // var str1 = "<tr><td>" + i + "</td><td>" + pric + "</td>";
                var val1 = 1 + r / (100 * n);
                var val2 = (1 * n / 1);
                amt = pric * Math.pow(val1, val2);
                inest = amt - pric;
                pric = amt.toFixed(0);
                // var str2 = "<td>" + inest.toFixed(0) + "</td><td>" + amt.toFixed(0) + "</td></tr>";
                // var res = str1.concat(str2);
                // $('#tbody').append(res);
            }
            // console.log("amt", amt);

            return res.status(200).json({
                msg: "Calculated Succesfully",
                data: getMachine(Math.round(amt))
            });

        } catch (error) {
            console.log("error from FDCalculator ", error);
            return response.error(res, 500, error);
        }
    },

    //EMI calculator
    async EMICalculator(req, res) {
        try {
            console.log("dd", req.body);
            if (req.body == null || req.body == undefined) {
                return response.error(res, 400, { msg: "Empty body" })
            }

            const { loanAmount, rateIntrest, tanureYear } = req.body;

            // console.log("reqqqs", req.body);
            axios.post('https://mfapi.advisorkhoj.com/calc/getEMICalcResult?loan_amount=' + loanAmount + '&interest_rate=' + rateIntrest + '&loan_tenure_type=month&loan_tenure=' + (tanureYear * 12) + '&key=3cd5b774-7cf6-4d0d-8bab-967f8a56797d').then((result) => {

                console.log(result.data);
                return res.json({ status: 200, loan_amount: getMachine(result.data.loan_amount), emi: getMachine(result.data.emi), total_interest: getMachine(result.data.total_interest), total_amount: getMachine(result.data.total_amount) });
            }).catch(err => {
                console.log("error from  emi calculator ", err);
                return response.error(res, 400, err);
            })

        } catch (error) {
            console.log("error from emi Calculator ", error);
            return response.error(res, 400, error);
        }
    },

    //ELSS calculator
    async ELSSCalculator(req, res) {
        try {
            const { investment, period } = req.body;

            // console.log("ELSSCalculator req body ", req, "period ", period)

            if (req.body == null || req.body == undefined) {
                return response.error(res, 400, { msg: "Empty body" })
            }

            if (investment > 150000) {
                var taxInvestment = 150000;
            } else {
                var taxInvestment = investment;
            }
            var taxValue = (parseFloat(taxInvestment) * parseFloat(period)) / 100;
            var taxValuePercent = (parseFloat(taxValue) * 4) / 100;
            var finalValue = taxValue + taxValuePercent;

            // console.log("finalValue", finalValue);

            return res.status(200).json({
                msg: "Calculated Succesfully",
                data: getMachine(Math.round(finalValue))
            });

        } catch (error) {
            console.log("error from elss Calculator ", error);
            return response.error(res, 500, error);
        }
    },

    //MarrigeCalculator
    async MarrigeCalculator(req, res) {
        console.log(req.body);
        const { childAgeToday, childAgeAfterMarried, inflationRate, amountRequirmentWedToday, annualSaving, rateReturn } = req.body;

        try {

            // calculation inflation*********************
            var n = parseInt(childAgeAfterMarried) - parseInt(childAgeToday);
            var i = 0.01 * inflationRate;
            var log = (1 + i);
            var pow = Math.pow(log, n);
            var inflaction = (amountRequirmentWedToday * (Math.pow((1 + i), (childAgeAfterMarried - childAgeToday))));
            //  var inflaction =getMachine( Math.round(inflaction))
            // console.log("inflaction ", getMachine( Math.round(inflaction)));
            console.log("inflaction ", (inflaction));

            //future value********************************

            var i2 = 0.01 * rateReturn;

            var as_p = annualSaving / 12;
            var as_i = i2;
            var as_n = n * 12;
            var as_log = (1 + as_i);
            var as_pow = Math.pow(as_log, as_n) - 1;

            var investment = as_p; //principal amount
            var annualRate = rateReturn;
            var monthlyRate = annualRate / 12 / 100;  //Rate of interest
            var years = childAgeAfterMarried - childAgeToday;
            var months = years * 12;  //Time period
            var futureValue = 0; //Final Value

            var futureValue = investment * (Math.pow(1 + monthlyRate, months) - 1) / monthlyRate;
            console.log("futurevalue", futureValue);

            //Additional funds required to mee*******************

            var af = parseInt(inflaction) - parseInt(futureValue);
            console.log("avv", af);
            var ot_i = i;
            var ot_n = n * 12;

            var ot_log = (1 + ot_i);
            var ot_pow = Math.pow(ot_log, ot_n);
            var oti = af * (1 / ot_pow);

            var time = (childAgeAfterMarried - childAgeToday) * 12;
            var rate_tmp = (rateReturn * (0.01 * 0.08333333333333333));
            var lumpsum = (af * (1 / (Math.pow((1 + rate_tmp), time))));
            console.log("Additional funds", lumpsum);

            axios.post('https://mfapi.advisorkhoj.com/calc/getTargetAmountSIPCalcResult?wealth_amount=' + Math.trunc(af) + '&inflation_rate=0&expected_return=' + (rateReturn) + '&period=' + years + '&key=3cd5b774-7cf6-4d0d-8bab-967f8a56797d').then((result) => {

                // var sip_amount=result.data.sip_amount
                return res.json({ status: 200, inflaction: getMachine(Math.round(inflaction)), futureValue: getMachine(Math.round(futureValue)), af: getMachine(Math.round(af)), lumpsum: getMachine(Math.round(lumpsum)), data: getMachine(Math.round(result.data.sip_amount)) })

            })
        } catch (error) {
            console.log("error from MarrigeCalculator Calculator ", error);
            return response.error(res, 500, error);
        }
    },

    //EducationCalculator
    async EducationCalculator(req, res) {
        try {

            const {
                childAge, collegeAge, educationTime, currentCost, expReturnRate, inflationRate
            } = req.body

            var yearleft = collegeAge - childAge;

            var rate = expReturnRate * 0.01;

            var i = 0.01 * inflationRate;

            var FV = currentCost * (Math.pow((1 + i), yearleft));

            var er = expReturnRate * 0.01;
            var ei = inflationRate * 0.01;

            var Tot = (1 + er) / (1 + ei) - 1;

            var nomialRate = 12.0 * (Math.pow((1 + rate), (1 / 12.0)) - 1);

            var postinfaltion = Tot * 100;


            var totalAmtRequired = (FV * ((1 - (Math.pow((1 + Tot), (-educationTime)))) / Tot));
            // console.log("totaleducatipn", totalAmtRequired);
            var lumpsum = (totalAmtRequired * (1 / (Math.pow((1 + nomialRate), yearleft))));


            axios.post('https://mfapi.advisorkhoj.com/calc/getTargetAmountSIPCalcResult?wealth_amount=' + Math.trunc(totalAmtRequired) + '&inflation_rate=0&expected_return=' + (nomialRate * 100) + '&period=' + yearleft + '&key=3cd5b774-7cf6-4d0d-8bab-967f8a56797d').then((result) => {

                // console.log(" result.data.sip_amount", result.data.sip_amount, lumpsum);

                return res.json({ status: 200, data: getMachine(Math.round(result.data.sip_amount)), totalAmtRequired: getMachine(Math.round(totalAmtRequired)), lumpsum: getMachine(Math.round(lumpsum)) })

            })
        } catch (error) {
            console.log("error from MarrigeCalculator Calculator ", error);
            return response.error(res, 500, error);
        }
    },

    //RetirmentCalculator
    async RetirmentCalculator(req, res) {
        try {

            const {
                childAge, retirementAge, currentLifestyle, inflationRate, currentSaving, existingCorpus, expectedPreRetirment, expectedPostRetirment, lifeExpectancyPostRetirment
            } = req.body


            var nomialRate = 12.0 * (Math.pow((1 + (expectedPreRetirment * 0.01)), (1 / 12.0)) - 1);


            // Calculation Year to retiremen
            var retirement_yr = parseInt(retirementAge) - parseInt(childAge);
            // var retirement_yr = retirement_yr.toFixed(0)
            // console.log("retirement_yr", retirement_yr);

            var i = 0.01 * inflationRate;
            var n = retirement_yr;
            var log = (1 + i);
            var pow = Math.pow(log, n);
            //var fv = monthly_expenses*pow;

            let fv = (currentLifestyle * (Math.pow((1 + i), (retirementAge - childAge))));
            // fv = Math.round(fv)
            // console.log("retirmentPost", fv);


            let infRate = 0.01 * inflationRate;
            let inflation = infRate;
            let post_ret = 0.01 * expectedPostRetirment;

            let adjusted = (1 + post_ret) / (1 + inflation) - 1;
            //var adjusted_rate = adjusted/12;
            let adjusted_rate = adjusted.toFixed(12);
            adjusted_rate = parseFloat(adjusted_rate);
            let adj_rate = adjusted_rate / 12;


            i = (1 + adj_rate);

            n = -(lifeExpectancyPostRetirment * 12);
            pow = 1 - Math.pow(i, n);
            let corpus_ach = 0;

            if (adj_rate == 0) {
                corpus_ach = 0
            } else {
                corpus_ach = (fv * pow) / adj_rate;
            }


            var adjustedRate_post = ((1 + post_ret) / ((1 + infRate)) - 1);//part 2
            //console.log("fu-"+fv);
            var futureSaving = (fv * ((1 - (Math.pow((1 + (adjustedRate_post / 12)), (-lifeExpectancyPostRetirment * 12)))) / (adjustedRate_post / 12)));
            corpus_ach = Math.round(corpus_ach)

            // console.log("corpus_ach", corpus_ach);


            var pre_ret = 0.01 * expectedPreRetirment;
            var n = retirement_yr * 12;
            var log = (1 + pre_ret);
            var pow = Math.pow(log, n) - 1;
            var corpus_per_mon = currentSaving * (pow / pre_ret);

            //var SIP = investment * (Math.pow(1 + monthlyRate, months) - 1) / monthlyRate
            var investment = currentSaving;
            var monthlyRate = expectedPreRetirment / 12 / 100;
            var months = (retirementAge - childAge) * 12;
            var corpus_month = investment * (Math.pow(1 + monthlyRate, months) - 1) / monthlyRate;
            var corpus_month = Math.round(corpus_month)

            // console.log("corpus_month", corpus_month);

            var pre_ret = 0.01 * expectedPreRetirment;
            var log = (1 + pre_ret);
            var n = 1 / 12.0;
            var pow = Math.pow(log, n);
            var nom = 12.0 * (pow - 1);

            //var n = retirement_yr;
            var logg = (1 + parseFloat(nom));
            var pow = Math.pow(logg, retirement_yr);
            var corpus_exist = existingCorpus * pow;
            var corpus_exist = Math.round(corpus_exist)

            // console.log("corpus_exist", corpus_exist);

            var shortfall_amt = corpus_ach - (parseFloat(corpus_month) + parseFloat(corpus_exist))
            var shortfall_amt = Math.round(shortfall_amt)

            // console.log("shortfall_amt", shortfall_amt);

            //    console.log("retirementAge",shortfall_amt.toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            var rate = nom * 100;

            axios.post('https://mfapi.advisorkhoj.com/calc/getTargetAmountSIPCalcResult?wealth_amount=' + parseInt(shortfall_amt) + '&inflation_rate=0&expected_return=' + (nomialRate * 100) + '&period=' + retirement_yr + '&key=3cd5b774-7cf6-4d0d-8bab-967f8a56797d').then((result) => {

                // console.log(" result.data.sip_amount", result.data.sip_amount);

                return res.json({
                    status: 200, data: getMachine(Math.round(result.data.sip_amount)), retirement_yr, fv: getMachine(Math.round(fv)), corpus_ach: getMachine(Math.round(corpus_ach)), corpus_month: getMachine(Math.round(corpus_month)), corpus_exist: getMachine(Math.round(corpus_exist)), shortfall_amt: getMachine(Math.round(shortfall_amt))
                })

            })
        } catch (error) {
            console.log("error from RetirmentCalculator Calculator ", error);
            return response.error(res, 500, error);
        }
    },
}