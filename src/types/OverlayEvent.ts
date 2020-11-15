import {
	StreamElementsCheerEvent,
	StreamElementsFollowerEvent,
	StreamElementsHostEvent,
	StreamElementsRaidEvent,
	StreamElementsSubscriberEvent,
} from './StreamElementsEvent';

export type OverlayEvents =
	| OverlayFollowerEvent
	| OverlaySubscriberEvent
	| OverlayHostEvent
	| OverlayRaidEvent
	| OverlayCheerEvent;

export type OverlayFollowerEvent = {
	uuid: string;
} & StreamElementsFollowerEvent;

export type OverlaySubscriberEvent = {
	uuid: string;
} & StreamElementsSubscriberEvent;

export type OverlayHostEvent = {
	uuid: string;
} & StreamElementsHostEvent;

export type OverlayRaidEvent = {
	uuid: string;
} & StreamElementsRaidEvent;

export type OverlayCheerEvent = {
	uuid: string;
} & StreamElementsCheerEvent;
