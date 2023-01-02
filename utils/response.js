async function success(res, code, data) {
  return res.status(code).json({
    success: true,
    data: data,
    error: null,
  });
}

async function error(res, code, error) {
  return res.status(code).json({
    success: false,
    data: null,
    error: error,
  });
}

module.exports = {
  success,
  error,
};
