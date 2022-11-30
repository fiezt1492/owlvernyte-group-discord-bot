const changeRoleColor = require("../../modules/changeRoleColor");

module.exports = {
    name: "colorme",

    async execute(message, args) {
        const { member } = message

        changeRoleColor(member).then((member) => {
            message.reply({
                content: "Done!"
            })
            // console.log(member)
        }).catch(console.log)

        // const user = await member.user.fetch()

        // console.log(user.accentColor, user.hexAccentColor)
    },
};
