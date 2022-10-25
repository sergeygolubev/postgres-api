const mainService = require("../services/mainService");

const getAll = async (req, res) => {
  const { filter } = req.query;
  try {
    let allRecords = await mainService.getAll(filter);
      console.log(`controller: ${allRecords}`);
      res.send({ status: "OK", data: allRecords });
    }
  catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getAll,
};
