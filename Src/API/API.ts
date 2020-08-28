import { Snowflake } from '../Constants/Constants';
import RestAPIHandler from './RestAPIHandler';
import { EvolveClient } from '../Client/EvolveClient';

export default class API {
	public client: EvolveClient;

	constructor(client: EvolveClient) {
		this.client = client;
	}
	public async getGuild(guildID: Snowflake) {
		return await RestAPIHandler(this.client, {
			endpoint: `guilds/${guildID}`,
			method: 'GET'
		});
	}

	public async getGuildChannels(guildID: Snowflake) {
		return await RestAPIHandler(this.client, {
			endpoint: `guilds/${guildID}/channels`,
			method: 'GET'
		});
	}

	public async getAuditLogs(guildID: Snowflake) {
		return await RestAPIHandler(this.client, {
			endpoint: `/guilds/${guildID}/audit-logs`,
			method: 'POST'
	})
}
	public async getUser(userID: Snowflake) {
		return await RestAPIHandler(this.client, {
			endpoint: `users/${userID}`,
			method: 'GET'
		});
	}

	public async getGuildMembers(guildID: Snowflake) {
		return await RestAPIHandler(this.client, {
			endpoint: `guilds/${guildID}/members`,
			method: 'GET'
		});
	}

	public async sendMessage(content: string, channelID: Snowflake) {
		return await RestAPIHandler(this.client, {
			endpoint: `channels/${channelID}/messages`,
			method: 'POST',
			content: content
		});
	}

	public async deleteMessage(messageID: Snowflake, channelID: Snowflake, time: number) {
	return setTimeout(async() => {
			return await RestAPIHandler(this.client, {
			endpoint: `/channels/${channelID}/messages/${messageID}`,
			method: 'DELETE'
		});
	}, time)
}

	public async banAdd(guildID: Snowflake, userID: Snowflake) {
		return await RestAPIHandler(this.client, {
			endpoint: `guilds/${guildID}/bans/${userID}`,
			method: 'PUT'
		});
	}

	public async banRemove(userID: Snowflake, guildID: Snowflake) {
		return await RestAPIHandler(this.client, {
			endpoint: `guilds/${guildID}/bans/${userID}`,
			method: 'DELETE'
		});
	}
	public async getChannel(channelID: Snowflake) {
		return await RestAPIHandler(this.client, {
			endpoint: `/channels/${channelID}`,
			method: "GET"
		})
	}
	public async getGuildChannel(guildID: Snowflake) {
		return await RestAPIHandler(this.client, {
			endpoint: `/guilds/${guildID}/channels`,
			method: "GET"
		})
	}
}
