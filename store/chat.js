import { Module, VuexModule, Mutation } from 'vuex-module-decorators';
import mergeMessageArray from "../utils/mergeMessageArray";


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


	@Mutation
	setMessages({ messageData }) {
		this.messages = mergeMessageArray(this.messages, messageData.messages );
		this.questionType = messageData.questionType;
		this.chatSettings = {
			chatSessionID: messageData.chatSessionID,
			inputType: messageData.inputType,
			options: messageData.options || []
		};
	}

	@Mutation
	setUserMessage(message) {
		const userMessage = {
			message,
			messageType: 'incoming',
			date: new Date().toISOString()
		};
		const fakeMessage = {
			message: '',
			isLoading: true,
			date: new Date().toISOString()
		};
		let messagesArr = this.messages;

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
