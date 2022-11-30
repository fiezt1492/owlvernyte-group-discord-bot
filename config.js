require('dotenv').config();
const jsonConfig = require("./config.json")
module.exports = {
    token: process.env.TOKEN || jsonConfig.token,
    prefix: process.env.PREFIX || jsonConfig.prefix,
    owner: process.env.OWNER || jsonConfig.owner,
    client_id: process.env.CLIENT_ID || jsonConfig.client_id,
    test_guild_id: process.env.TEST_GUILD_ID || jsonConfig.test_guild_id
}