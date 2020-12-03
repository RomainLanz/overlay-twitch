export function useAccessToken() {
	const params = document.location.hash.substring(1);
	return new URL(`http://fake/?${params}`).searchParams.get('access_token') as string;
}
