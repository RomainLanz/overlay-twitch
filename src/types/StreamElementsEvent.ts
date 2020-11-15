export const TestEventType = ['follower-latest', 'subscriber-latest', 'host-latest', 'raid-latest', 'cheer-latest'];
export const EventType = ['follow', 'subscriber', 'host', 'raid', 'cheer'];

export type StreamElementsEvents =
	| StreamElementsFollowerEvent
	| StreamElementsSubscriberEvent
	| StreamElementsHostEvent
	| StreamElementsRaidEvent
	| StreamElementsCheerEvent;

export type StreamElementsTestEvents =
	| StreamElementsFollowerTestEvent
	| StreamElementsSubscriberTestEvent
	| StreamElementsHostTestEvent
	| StreamElementsRaidTestEvent
	| StreamElementsCheerTestEvent;

export type StreamElementsFollowerEvent = {
	type: 'follow';
	data: StreamElementsFollowerEventData;
};

export type StreamElementsFollowerTestEvent = {
	listener: 'follower-latest';
	event: StreamElementsFollowerEventData;
};

export type StreamElementsFollowerEventData = {
	avatar: string;
	displayName: string;
	name: string;
	providerId: string;
	quantity: number;
};

export type StreamElementsSubscriberTestEvent = {
	listener: 'subscriber-latest';
	event: StreamElementsSubscriberEventData;
};

export type StreamElementsSubscriberEvent = {
	type: 'subscriber';
	data: StreamElementsSubscriberEventData;
};

export type StreamElementsSubscriberEventData = {
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

export type StreamElementsHostTestEvent = {
	listener: 'host-latest';
	event: StreamElementsHostEventData;
};

export type StreamElementsHostEvent = {
	type: 'host';
	data: StreamElementsHostEventData;
};

export type StreamElementsHostEventData = {
	amount: number;
	avatar: string;
	displayName: string;
	name: string;
	providerId: string;
	quantity: number;
};

export type StreamElementsRaidTestEvent = {
	listener: 'raid-latest';
	event: StreamElementsRaidEventData;
};

export type StreamElementsRaidEvent = {
	type: 'raid';
	data: StreamElementsRaidEventData;
};

export type StreamElementsRaidEventData = {
	amount: number;
	avatar: string;
	displayName: string;
	name: string;
	providerId: string;
	quantity: number;
};

export type StreamElementsCheerTestEvent = {
	listener: 'cheer-latest';
	event: StreamElementsCheerEventData;
};

export type StreamElementsCheerEvent = {
	type: 'cheer';
	data: StreamElementsCheerEventData;
};

export type StreamElementsCheerEventData = {
	amount: number;
	avatar: string;
	displayName: string;
	message: string;
	name: string;
	providerId: string;
	quantity: number;
};
