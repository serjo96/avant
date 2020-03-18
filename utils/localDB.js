import { openDB } from 'idb';

export const setIndexDB = async (messagesArr) =>  {
	try {
		const db = await openDB('Chat', 1, {
		upgrade(db) {
			// Create a store of objects
				const store = db.createObjectStore('messages', {
					// The 'id' property of the object will be the key.
					keyPath: 'id',
					// If it isn't explicitly set, create a value by auto incrementing.
					autoIncrement: true,
				});
				// Create an index on the 'date' property of the objects.
				store.createIndex('date', 'date');
			},
			blocked(arg) {
				console.log(arg);
			},
			blocking(arg) {
				console.log(arg);
			},
			terminated(arg) {
				console.log(arg);
			},
		});

		// Add an article:

		for (const message of messagesArr) {
			const date = new Date(message.date);
			await db.add('messages', { ...message, date});
		}

		// Get all the articles in date order:
		// console.log(await db.getAllFromIndex('messages', 'date'));


	} catch (e) {
		console.error('Database error:', e)
	}

};

export const getMessagesFromIndexDB = async () => {
	try {
		const db = await openDB('Chat', 1, );
		if( !db.objectStoreNames.length ) return null;
		return await db.getAllFromIndex('messages', 'date');
	} catch (e) {
		console.log(e)
	}

};
