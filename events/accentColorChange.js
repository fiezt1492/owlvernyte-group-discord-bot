module.exports = {
    name: "guildMemberUpdate",

    execute(oldMember, newMember, client) {
        if (oldMember.user.accentColor === newMember.user.accentColor) return;
        if (oldMember.user.bot || newMember.user.bot) return;

        
    },
};
