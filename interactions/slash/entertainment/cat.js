const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const { request } = require("undici");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("cat")
        .setDescription(
            "Generate a random cat"
        ),

    async execute(interaction) {

        const catResult = await request('https://aws.random.cat/meow');
        const { file } = await catResult.body.json();
        const embed = new EmbedBuilder()
            .setImage(file)
            .setColor("Random")
        interaction.editReply({ embeds: [embed] });

    },
};
