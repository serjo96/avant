import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { v4 } from 'uuid';
import mergeMessageArray from "~/utils/mergeMessageArray";
import { setIndexDB, getMessagesFromIndexDB } from "~/utils/localDB";
import axios from 'axios';

@Module({
	stateFactory: true,
})
class Chat extends VuexModule {
	messages = [
		{
			message: '',
			isLoading: true,
			date: new Date().toISOString()
		}
	];
	sendingMessageError = false;
	questionType  = '';
	chatSettings =  {
		chatSessionID: '',
		inputType: 'input',
		options: [],
	};

	@Action
	async initChat(userID) {
		const { data } = await axios.post('/chat/init', {
			userID,
		});
		const messagesLength = this.messages.length;
		const messageData = data.data.messageData;
		this.context.commit('setMessages', { messageData, messagesLength })
	}


	@Action
	async getLocalHistory() {
		const initialMessages = process.browser ? await getMessagesFromIndexDB() : null;
		if ( initialMessages ) {
			this.context.commit('setInitialMessages', initialMessages);
		}
	}

	@Action
	async sendMessage({message, chatSessionID,questionType, userID }){
		const messagesLength = this.messages.length;
		const { data } = await axios.post('/chat/send-message', {
			message: message,
			chatSessionID,
			questionType,
			userID
		});
		const messageData = data.data.messageData;
		this.context.commit('setMessages', {messageData , messagesLength })
	}

	@Mutation
	setInitialMessages(messages) {
		this.messages = messages;
	}


	@Mutation
	async setMessages({ messageData , messagesLength = 1 }) {
		const newArr = mergeMessageArray(this.messages, messageData.messages, messagesLength);
		this.messages = newArr;
		this.questionType = messageData.questionType;
		this.chatSettings = {
			chatSessionID: messageData.chatSessionID,
			inputType: messageData.inputType,
			options: messageData.options || []
		};
		await setIndexDB( messageData.messages );
	}

	@Mutation
	async setUserMessage({ message, userID}) {
		let messagesArr = this.messages;
		const userMessage = {
			messageUID: v4(),
			message,
			messageType: 'incoming',
			date: new Date().toISOString(),
			userID: userID
		};
		const fakeMessage = {
			message: '',
			isLoading: true,
			date: new Date().toISOString()
		};
		setIndexDB([userMessage]);

		messagesArr.push(userMessage);
		messagesArr.push(fakeMessage);
		this.messages = messagesArr;
	}

	@Mutation
	setFakeIncomingMessage() {
		let messagesArr = this.messages;
		const fakeMessage = {
			message: '',
			isLoading: true,
			date: new Date().toISOString()
		};
		messagesArr.push(fakeMessage);
		this.messages = messagesArr;
	}


	get formattedMessages() {
		const messagesLength = this.messages.length - 1;
		return this.messages.reduce((acc, next, index) => {
			let nextElement = next;
			let lastElement = acc[ acc.length - 1 ];

			if ( acc.length && lastElement.userID === next.userID ) {
				lastElement.isGroup = true;
			}
			if ( messagesLength === index ) {
				nextElement = { ...nextElement, isGroup: false }
			}
			//
			// if ( acc.length && lastElement.userID !== next.userID ) {
			// 	nextElement = { ...nextElement, isGroup: false }
			// }

			acc.push(nextElement);
			return acc;
		}, []);
	}

}

export default Chat;
