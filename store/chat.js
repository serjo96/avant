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
	};


	@Mutation
	setMessages({ messageData, chatSessionID }) {
		this.messages = mergeMessageArray(this.messages, messageData.messages );
		this.questionType = messageData.questionType;
		this.chatSettings.chatSessionID = chatSessionID;
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


}

export default Chat;
