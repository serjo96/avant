import { Module, VuexModule, Mutation } from 'vuex-module-decorators';


@Module({
	stateFactory: true,
})
class Chat extends VuexModule {
	messages = [];
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




}

export default Chat;
