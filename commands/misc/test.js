module.exports = {
    name: "test",

    execute(message, args) {
        const { member } = message
        console.log(member.roles.cache.find(role => role.name === member.user.id))
    },
};
