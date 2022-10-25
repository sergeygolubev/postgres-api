const { v4: uuid } = require("uuid");
const Main = require("../database/Main");

const getAll = async (filterParams) => {
    try {
        let results = await Main.getAll(filterParams);
        console.log(`service: ${results}`);
        return results;
    } catch (error) {
        throw error;
    }
};

module.exports = {
  getAll,
};
