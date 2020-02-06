export default (mainArr, mergeArr) => {
	let messageArr = mainArr;
	let mergeMessagesArr = mergeArr.splice(1, mergeArr.length);
	messageArr[mainArr.length - 1] = mergeArr[0];

	return [...messageArr, ...mergeMessagesArr]
}
