const getDominantColor = require("./getDominantColor");

module.exports = async (member) => {
    const guildMember = await member.fetch()
    const { guild } = guildMember;

    const user = await guildMember.user.fetch();

    const { dColor } = await getDominantColor(await user.displayAvatarURL({ forceStatic: true, extension: "png" }))

    const role =
        await guildMember.roles.cache.find(
            role => role.name === guildMember.user.id
        ) || await (await guild.roles.fetch()).find(
            role => role.name === guildMember.user.id
        ) || await guild.roles.create(
            {
                name: guildMember.user.id,
            }
        );

    role.setColor(dColor)

    if (!guildMember.roles.cache.has(role.id))
        guildMember.roles.add(role)

    return guildMember;
}