export function getUrlParam<T>(key: string, value: T): T {
	const params = new URLSearchParams(window.location.search);

	return params.has(key) ? ((params.get(key) as unknown) as T) : value;
}
