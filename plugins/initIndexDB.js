import { openDB } from 'idb';
export default async function () {

		try {
			await openDB('Chat', 1, {
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


		} catch (e) {
			console.error('Database error:', e)
		}


}
