import {Module, VuexModule, Mutation, Action} from 'vuex-module-decorators';
import { v4 } from 'uuid';
import mergeMessageArray from "~/utils/mergeMessageArray";
import { setIndexDB, getMessagesFromIndexDB } from "~/utils/localDB";

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
	async getLocalHistory() {
		const initialMessages = process.browser ? await getMessagesFromIndexDB() : null;
		this.context.commit('setInitialMessages', initialMessages);
	}

	@Mutation
	setInitialMessages(messages) {
		this.messages = messages;
	}


	@Mutation
	setMessages( { data: { messageData }, messagesLength = 1 }) {
		this.messages = mergeMessageArray(this.messages, messageData.messages, messagesLength);
		this.questionType = messageData.questionType;
		this.chatSettings = {
			chatSessionID: messageData.chatSessionID,
			inputType: messageData.inputType,
			options: messageData.options || []
		};
		setIndexDB( messageData.messages );
	}

	@Mutation
	setUserMessage(message) {
		let messagesArr = this.messages;
		const userMessage = {
			messageUID: v4(),
			message,
			messageType: 'incoming',
			date: new Date().toISOString()
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


}

export default Chat;
