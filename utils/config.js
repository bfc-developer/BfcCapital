const CONFIG = {};
CONFIG.DOMAIN_NAME = "";
CONFIG.API_URL = "";
CONFIG.SCHEMAS = {
  USER: 'User'
};


CONFIG.ROUTES = {
  AUTH: "/auth",
  BASE_ROUTE: "/api",
  SIPROUTE: "/sip",
  ELSSROUTE: "/elss",
  EMIROUTE: "/emi",
  SNAPSHOT: "/snapshot",
  PORTFOLIO_API_DATA: "/portfolio_api_data",
  USER_PROFILE: "/User_profile",
  PORTFOLIO: "/portfolio",
  USER_PROFILE_MEMBERLIST: "/userProfileMemberList",
  GET_IIN_STATUS: "/getIINStatus",
  GET_IIN_DETAILS_WMS: "/GETIINDETAILSWMS",
  GET_BASKET_LIST: "/getBasketList",
  PAN_VERIFY: "/pen_verify",
  GET_OCCUPATIONS: "/getoccupations",
  GET_IIN: "/GETIIN",
  GET_INCOME: "/getIncome",
  ACCOUNT_TYPE: "/accountType",
  PRODUCT_VIA_ISIN: "/ProductViaISIN",
  BANK_LIST: "/bank_list",
  GET_COUNTRY: "/get_Country",
  GET_RELATIONSHIP_MASTER: "/getRelationshipMaster",
  STATE_BY_PINCODE: "/StateCitybyPincode",
  ADDITIONAL_IIN_PERSONAL_DETAILS: "/additional_iin_personalDetails",
  ADDITIONAL_IIN_ADDRESS_DETAILS: "/additional_iin_address_details",
  ADDITIONAL_IIN_DECLARATION_JOURNEY_PC: "/additional_iin_declaration_journy_pc",
  ADDITIONAL_IIN_GET_NOMINEE: "/additional_iin_get_nomine",
  ADDITIONAL_IIN_CREATE: "/additional_iinCreate",
  INSERT_TRANSACTION_DETAILS: "/insertTransactionDetails",
  MULTI_PURCHASE_SIP: "/multi_purchase_sip",
  DELETE_TRANSACTION_DETAILS: "/deleteTransactionDetails",
  SAVE_TRANSACTION_DETAILS: "/saveTransactionDetails",
  AMC_LIST: "/amclist",
  PURCHASE: "/purchase",
  MANDATE_LIST: "/mandateList",
  GET_BANK_LIST: "/getbankList",
  USER_LOGIN: "/login",
  USER_REGISTER: "/user-register",
  USER: "/user",
  RESET_PASSWORD: "/reset-password",
  FORGOT_PASSWORD: "/forgot-password",
  FD: "/fd",
  LUMPSUM: "/lumpsum",
  MARRIAGE: "/marrige",
  EDUCATION: "/education",
  RETIREMENT: "/retirment",
  PORTFOLIO_DETAIL_API: "/portfolioDetailApi"
};


CONFIG.ERROR_CODES = {
  NO_FILES_TO_UPLOAD: 400, // Bad Request
  INTERNAL_SERVER_ERROR: 500,
  FILE_NOT_FOUND: 404,
};
CONFIG.RESPONSE_STATUS = {
  SUCCESS: "S",
  FAIL: "F",
  ERROR: "E",
};

CONFIG.SUCCESS_RESPONSE = 200;

module.exports = CONFIG;
