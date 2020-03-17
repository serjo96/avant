export const timeHelper = (oldDate) => {
	const date = new Date(oldDate);
	let hours = date.getHours();
	let minutes = date.getMinutes();

	if (hours   < 10) { hours = "0" + hours }
	if (minutes < 10) { minutes = "0" + minutes }
	return hours + ':' + minutes;
};

export const dateHelper = (date) => {
	const transformDate = new Date(date);
	const options = { month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
	return transformDate.toLocaleDateString('en-US', options)
};
