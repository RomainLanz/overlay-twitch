import axios from 'axios';
import useSWRV from 'swrv';
import { getUrlParam } from '../utils/getKey';

// @ts-expect-error
const twitchApiKey = getUrlParam('twitchKey', String(import.meta.env.VITE_TWITCH_API_KEY));

// @ts-expect-error
const channelId = getUrlParam('channelId', String(import.meta.env.VITE_TWITCH_CHANNEL_ID));

export interface TwitchChannel {
	followers: number;
}

export interface TwitchStream {
	viewers: number;
	channel: TwitchChannel;
}

export interface TwitchStreamsResponse {
	streams: TwitchStream[];
}

const fetcher = (url: string) =>
	axios
		.get(url, {
			headers: {
				'Accept': 'application/vnd.twitchtv.v5+json',
				'Client-ID': twitchApiKey,
			},
		})
		.then(({ data }) => data);

export function useTwitchEndpoint() {
	const { data } = useSWRV<TwitchStreamsResponse>(
		`https://api.twitch.tv/kraken/streams/?channel=${channelId}`,
		fetcher,
		{
			refreshInterval: 30000,
		}
	);

	return data;
}
