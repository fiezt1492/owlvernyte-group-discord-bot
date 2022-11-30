const getDominantColor = require("../../modules/getDominantColor");

module.exports = {
    name: "dcolor",

    async execute(message, args) {
        const { member } = message
        const url = args.length ? args[0] : await member.user.displayAvatarURL({ forceStatic: true, extension: "png" })

        const { dColor } = await getDominantColor(url)

        message.reply({
            content: `${dColor}`
        })
    },
};
