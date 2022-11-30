const changeRoleColor = require("../modules/changeRoleColor");

module.exports = {
    name: "guildMemberUpdate",

    execute(oldMember, newMember, client) {
        if (oldMember.user.bot || newMember.user.bot) return;
        if (oldMember.user.avatar == newMember.user.avatar) return;

        changeRoleColor(newMember);

    },
};
