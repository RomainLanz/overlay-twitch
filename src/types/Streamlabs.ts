export type StreamLabsEvent = StreamlabsDonationEvent | StreamLabsTwitchEvent;

export type StreamLabsTwitchEvent =
	| StreamlabsTwitchFollowEvent
	| StreamlabsTwitchSubscriptionEvent
	| StreamlabsTwitchHostEvent
	| StreamlabsTwitchBitsEvent
	| StreamlabsTwitchRaidEvent;

export type StreamlabsDonationEvent = {
	type: 'donation';
	event_id: string;
	message: StreamlabsDonationEventMessage[];
};

export type StreamlabsDonationEventMessage = {
	id: number;
	name: string;
	amount: string;
	formatted_amount: string;
	formattedAmount: string;
	message: string;
	currency: string;
	emotes: unknown;
	iconClassName: string;
	to: {
		name: string;
	};
	from: string;
	from_user_id: unknown;
	_id: string;
};

export type StreamlabsTwitchFollowEvent = {
	type: 'follow';
	for: 'twitch_account';
	message: StreamlabsTwitchFollowEventMessage[];
};

export type StreamlabsTwitchFollowEventMessage = {
	created_at: string;
	id: string;
	name: string;
	_id: string;
};

export type StreamlabsTwitchSubscriptionEvent = {
	type: 'subscription';
	for: 'twitch_account';
	message: StreamlabsTwitchSubscriptionEventMessage[];
};

export type StreamlabsTwitchSubscriptionEventMessage = {
	name: string;
	months: number;
	message: string;
	emotes: unknown;
	sub_plan: string;
	sub_plan_name: string;
	sub_type: string;
	_id: string;
};

export type StreamlabsTwitchHostEvent = {
	type: 'host';
	for: 'twitch_account';
	message: StreamlabsTwitchHostEventMessage[];
};

export type StreamlabsTwitchHostEventMessage = {
	name: string;
	viewers: number;
	type: string;
	_id: string;
};

export type StreamlabsTwitchBitsEvent = {
	type: 'bits';
	for: 'twitch_account';
	message: StreamlabsTwitchBitsEventMessage[];
};

export type StreamlabsTwitchBitsEventMessage = {
	id: string;
	name: string;
	amount: number;
	emotes: unknown;
	message: string;
	_id: string;
};

export type StreamlabsTwitchRaidEvent = {
	type: 'raid';
	for: 'twitch_acount';
	event_id: string;
	message: StreamlabsTwitchRaidEventMessage[];
};

export type StreamlabsTwitchRaidEventMessage = {
	name: string;
	raiders: number;
	_id: string;
};
