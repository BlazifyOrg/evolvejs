import { EvolveClient, EVENTS, Payload } from "../../..";
import { ChannelEvents } from "../../Events/ChannelEvents";

export default class {
  constructor(client: EvolveClient, payload: Payload, shard: number) {
    (async () => {
      const channel = await client.rest.getChannel(payload.d.channel.id);
      if (client.options.enableChannelCache)
        client.channels.set(channel.id, channel);
      client.emit(
        EVENTS.CHANNEL_UPDATE,
        new ChannelEvents(client, channel, shard)
      );
    })();
  }
}
