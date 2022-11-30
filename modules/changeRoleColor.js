module.exports = async (member) => {
    const { guild } = member;
    const role = await member.roles.cache.find(role => role.name === member.user.id) || await guild.roles.create({
        name: member.user.id,
        color: member.user.accentColor
    })
}