


async function main() {
	// fetch respnse from server
	const response = await fetch('https://copilot-proxy.githubusercontent.com/_ping');

	// log response code
	console.log(response.status);

		// log response body
	console.log(await response.text());
}

main();
