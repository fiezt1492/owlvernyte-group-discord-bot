const changeRoleColor = require("../modules/changeRoleColor");

module.exports = {
	name: "userUpdate",

	async execute(oldUser, newUser, client) {
		if (oldUser.bot || newUser.bot) return;
		if (oldUser.avatar == newUser.avatar) return;

		const testGuild = await client.guilds.fetch(client.config.test_guild_id);

		const member = await testGuild.members.fetch(newUser);

		changeRoleColor(member);
	},
};
