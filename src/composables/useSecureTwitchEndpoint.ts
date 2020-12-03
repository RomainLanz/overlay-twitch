import axios from 'axios';
import useSWRV from 'swrv';
import { getUrlParam } from '../utils/getKey';

// @ts-expect-error
const clientId = getUrlParam('clientId', String(import.meta.env.VITE_TWITCH_CLIENT_ID_APP));

// @ts-expect-error
const channelId = getUrlParam('channelId', String(import.meta.env.VITE_TWITCH_CHANNEL_ID));

export interface TwitchSubscriptionsResponse {
	data: Array<{
		broadcaster_id: string;
		broadcaster_name: string;
		gifter_id: string;
		gifter_name: string;
		is_gift: boolean;
		plan_name: string;
		tier: string;
		user_id: string;
		user_name: string;
	}>;
}

export interface TwitchTokenResponse {
	access_token: string;
	expires_in: number;
	token_type: string;
}

const fetcher = (url: string, token: string) =>
	axios
		.get(url, {
			headers: {
				'Accept': 'application/vnd.twitchtv.v5+json',
				'Authorization': `Bearer ${token}`,
				'Client-ID': clientId,
			},
		})
		.then(({ data }) => data);

export function useSecureTwitchEndpoint(accessToken: string) {
	const { data } = useSWRV<TwitchSubscriptionsResponse>(
		`https://api.twitch.tv/helix/subscriptions?broadcaster_id=${channelId}&first=100`,
		(url: string) => fetcher(url, accessToken),
		{
			refreshInterval: 60000,
		}
	);

	return data;
}
