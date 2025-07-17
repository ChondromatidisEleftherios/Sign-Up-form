async function toggle() {
	let html = document.documentElement;
	if (html.className === "dark") {
		html.className = "";
	} else {
		html.className = "dark";
	}
}
