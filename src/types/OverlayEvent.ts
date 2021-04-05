import {
	StreamElementsCheerEventData,
	StreamElementsFollowerEventData,
	StreamElementsHostEventData,
	StreamElementsRaidEventData,
	StreamElementsSubscriberEventData,
} from './StreamElementsEvent';

export type OverlayEvents =
	| OverlayFollowerEvent
	| OverlaySubscriberEvent
	| OverlayHostEvent
	| OverlayRaidEvent
	| OverlayCheerEvent;

export type OverlayFollowerEvent = {
	uuid: string;
	type: 'follow';
} & StreamElementsFollowerEventData;

export type OverlaySubscriberEvent = {
	uuid: string;
	type: 'subscriber';
} & StreamElementsSubscriberEventData;

export type OverlayHostEvent = {
	uuid: string;
	type: 'host';
} & StreamElementsHostEventData;

export type OverlayRaidEvent = {
	uuid: string;
	type: 'raid';
} & StreamElementsRaidEventData;

export type OverlayCheerEvent = {
	uuid: string;
	type: 'cheer';
} & StreamElementsCheerEventData;
