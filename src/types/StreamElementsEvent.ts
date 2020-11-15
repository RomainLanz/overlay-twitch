export const EventType = ['follower-latest', 'subscriber-latest', 'host-latest', 'raid-latest', 'cheer-latest'];

export type StreamElementsEvents =
	| StreamElementsFollowerEvent
	| StreamElementsSubscriberEvent
	| StreamElementsHostEvent
	| StreamElementsRaidEvent
	| StreamElementsCheerEvent;

export type StreamElementsFollowerEvent = {
	listener: 'follower-latest';
	event: {
		avatar: string;
		displayName: string;
		name: string;
		providerId: string;
		quantity: number;
	};
};

export type StreamElementsSubscriberEvent = {
	listener: 'subscriber-latest';
	event: {
		amount: number;
		avatar: string;
		displayName: string;
		gifted: boolean;
		message: string;
		name: string;
		providerId: string;
		quantity: number;
		sender: string;
		tier: '1000' | '2000' | '3000' | 'prime';
	};
};

export type StreamElementsHostEvent = {
	listener: 'host-latest';
	event: {
		amount: number;
		avatar: string;
		displayName: string;
		name: string;
		providerId: string;
		quantity: number;
	};
};

export type StreamElementsRaidEvent = {
	listener: 'raid-latest';
	event: {
		amount: number;
		avatar: string;
		displayName: string;
		name: string;
		providerId: string;
		quantity: number;
	};
};

export type StreamElementsCheerEvent = {
	listener: 'cheer-latest';
	event: {
		amount: number;
		avatar: string;
		displayName: string;
		message: string;
		name: string;
		providerId: string;
		quantity: number;
	};
};
