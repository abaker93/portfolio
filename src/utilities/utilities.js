export const convertMonth = (date) => {
	const m = parseInt(date.substr(5,2));
	if (typeof(m) !== "number") {
		return;
	}

	switch (m) {
		case 1:
			return "January";
		case 2:
			return "February";
		case 3:
			return "March";
		case 4:
			return "April";
		case 5:
			return "May";
		case 6:
			return "June";
		case 7:
			return "July";
		case 8:
			return "August";
		case 9:
			return "September";
		case 10:
			return "October";
		case 11:
			return "November";
		case 12:
			return "December";
		default:
			return;
	}
}

export const convertYear = (date) => {
	return date.substr(0,4);
}

export const serifAccent = () => {
	const queryAccents = document.querySelectorAll(".a");

	// console.log(queryAccents)

	for (let i = 0; i < queryAccents.length; i++) {
		const accent = queryAccents[i].innerHTML

		accent.match(/<i>/)
			? queryAccents[i].innerHTML = accent
			: queryAccents[i].innerHTML = accent.replaceAll(/a/g, '<i>a</i>');
	}
}