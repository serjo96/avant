import { Module, VuexModule, Mutation } from 'vuex-module-decorators';


@Module({
	stateFactory: true,
})
class Chat extends VuexModule {
	messages = [];
	sendingMessage = false;
	sendingMessageError = false;
	questionType  = '';
	chatSettings =  {
		chatSessionID: '',
	};

	get messageStatus() {
		return {
			sendingMessage: this.sendingMessage,
			sendingMessageError: this.sendingMessageError,
		}
	}

	@Mutation
	setMessages({ messageData, chatSessionID }) {
		let messagesArr = this.messages;
		messagesArr = [...this.messages, ...messageData.messages];
		this.questionType = messageData.questionType;
		this.sendingMessage = false;
		this.chatSettings.chatSessionID = chatSessionID;
		this.messages = messagesArr;
	}

	@Mutation
	setUserMessage(message) {
		const userMessage = {
			message,
			messageType: 'incoming',
			date: new Date().toISOString()
		};
		this.sendingMessage = true;
		let messagesArr = this.messages;

		messagesArr.push(userMessage);
		this.messages = messagesArr;
	}


}

export default Chat;
