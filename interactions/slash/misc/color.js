const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const changeRoleColor = require("../../../modules/changeRoleColor");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("color")
        .setDescription(
            "Color me run"
        )
        .addSubcommand(sub =>
            sub
                .setName("me")
                .setDescription("Color my role")
        ),

    async execute(interaction) {
        const { member } = interaction;
        changeRoleColor(member).then((member) => {
            interaction.reply({
                content: "Done!",
            })
        }).catch(console.log)
    },
};
