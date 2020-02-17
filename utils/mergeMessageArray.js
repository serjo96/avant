export default (mainArr, mergeArr, mainArrLength) => {
	let messageArr = mainArr;
	const lastMessage = mainArrLength - 1;
	let mergeMessagesArr = mergeArr.splice(1, mergeArr.length);
	messageArr[lastMessage] = mergeArr[0];

	return [...messageArr, ...mergeMessagesArr]
}
