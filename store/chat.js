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

	@Mutation
	setMessages({ messageData, chatSessionID }) {
		let messagesArr = this.messages;
		messagesArr = [...this.messages, ...messageData.messages];
		console.log(messagesArr);
		this.questionType = messageData.questionType;
		this.chatSettings.chatSessionID = chatSessionID;
		this.messages = messagesArr;
	}

	@Mutation
	setUserMessage(message) {
		const userMessage = {
			description: message,
			messageType: 'incoming',
			date: new Date().toISOString()
		};
		let messagesArr = this.messages;

		messagesArr.push(userMessage);
		this.messages = messagesArr;
	}


}

export default Chat;
