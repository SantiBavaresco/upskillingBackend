const axios = requier("axios")
const films = require("./characters.json")

module.exports = {
    list: async () => {
        const result = await axios.get("http://database:8004/Films");
        return result.data;
    },

    create: async () => {
        throw Error("Hay un error en la BDD al momento de crear el film")
    },
}