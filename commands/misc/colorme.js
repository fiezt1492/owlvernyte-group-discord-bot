const changeRoleColor = require("../../modules/changeRoleColor");

module.exports = {
    name: "colorme",

    async execute(message, args) {
        const { member } = message
        changeRoleColor(member).then((member) => {
            message.reply({
                content: "Done!"
            })
        }).catch(console.log)
    },
};
