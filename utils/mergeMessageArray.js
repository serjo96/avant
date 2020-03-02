export default (mainArr, mergeArr, mainArrLength) => {
	let messageArr = mainArr;
	const arrayMerge = mergeArr.concat();
	const lastMessage = mainArrLength - 1;
	let mergeMessagesArr = arrayMerge.splice(1, arrayMerge.length);
	messageArr[lastMessage] = arrayMerge[0];

	return [...messageArr, ...mergeMessagesArr]
}
