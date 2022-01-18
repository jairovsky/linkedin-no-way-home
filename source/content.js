
async function init() {

	window.setInterval(function () {
		const l = window.location.pathname;
		if (l.startsWith("/feed")) {
			window.location = "https://linkedin.com/jobs"
		}
	}, 1000)
	
}

init();
