import {
	StreamlabsDonationEventMessage,
	StreamlabsTwitchBitsEventMessage,
	StreamlabsTwitchFollowEventMessage,
	StreamlabsTwitchHostEventMessage,
	StreamlabsTwitchRaidEventMessage,
	StreamlabsTwitchSubscriptionEventMessage,
} from './Streamlabs';

export type OverlayAlert =
	| OverlayDonationAlert
	| OverlayFollowAlert
	| OverlayBitsAlert
	| OverlayHostAlert
	| OverlayRaidAlert
	| OverlaySubscriptionAlert;

export type OverlayDonationAlert = {
	type: 'donation';
} & StreamlabsDonationEventMessage;

export type OverlayFollowAlert = {
	type: 'follow';
} & StreamlabsTwitchFollowEventMessage;

export type OverlayBitsAlert = {
	type: 'bits';
} & StreamlabsTwitchBitsEventMessage;

export type OverlayHostAlert = {
	type: 'host';
} & StreamlabsTwitchHostEventMessage;

export type OverlayRaidAlert = {
	type: 'raid';
} & StreamlabsTwitchRaidEventMessage;

export type OverlaySubscriptionAlert = {
	type: 'subscription';
} & StreamlabsTwitchSubscriptionEventMessage;
