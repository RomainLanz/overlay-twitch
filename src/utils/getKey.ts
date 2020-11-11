export function getUrlParam(key: string, value: string): string {
	const params = new URLSearchParams(window.location.search);

	return params.has(key) ? (params.get(key) as string) : value;
}
