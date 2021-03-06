import * as ActionTypes from '../constants/ActionTypes';
import * as Constants from '../constants/Constants';
import { RestUtilInstance } from '../../../utils/RestUtil';

export const setState = payload => ({ type: ActionTypes.WECHAT_CHAT_MAIN_SET, payload });

export const fetchChats = () => {
  // 'mid' // 消息的id 唯一标识，重要
  // "chatBaseModel" // 对话列表基本项
  // "chatDialogueBarModel" //对话框底部菜单
  // "chatConfigModel.isStick" // 置顶
  // "chatConfigModel.newsMute" // 消息免打扰
  // "chatConfigModel.starFriends" // 标星
  // "chatConfigModel.blacklist" // 黑名单

  return async (dispatch) => {
    const response = await RestUtilInstance.Get('/wechat/chats');
    const chats = response.data.items;
    const chatsData = { items: chats };
    const chatRooms = (chats || []).map((chat) => {
      chatsData[chat.mid] = chat;

      const chatRoom = {
        link: `/wechat/chat/dialogue/${chat.mid}`,
        title: chat.base.name,
        lastTime: chat.chatBaseModel.endTimeStr,
        lastMessage: chat.chatBaseModel.endChatTxt,
        unreadCount: chat.chatBaseModel.newsUnreadCount,
        type: chat.base.type,
        mute: chat.chatConfigModel.newsMute
      };

      switch (chat.base.type) {
        case Constants.CHAT_ROOM_TYPE_FRIENDS:
          chatRoom.headerImages = [chat.base.headerUrl];
          break;
        case Constants.CHAT_ROOM_TYPE_GROUP:
          chatRoom.headerImages = (chat.chatMemberModel || []).map(member => member.headerUrl);
          chatRoom.lastSpeaker = chat.chatBaseModel.endChatAuth;

          break;
        case Constants.CHAT_ROOM_TYPE_SERVICE:
          chatRoom.headerImages = [chat.base.headerUrl];
          break;
      }
      return chatRoom;
    });

    dispatch({
      type: ActionTypes.WECHAT_CHAT_FETCH_CHATS,
      payload: { chats: chatsData, chatRooms }
    });
  };
};

export const fetchChat = (chatId) => {
  return async (dispatch, getState) => {
    const { wechat } = getState();
    const chatMain = wechat.chatMain || {};
    const chats = chatMain.chats || {};

    if (chats[chatId]) {
      dispatch({
        type: ActionTypes.WECHAT_CHAT_FETCH_CHAT,
        payload: { currentChat: chats[chatId] }
      });
    } else {
      // TODO: fetch chat by id
    }
  };
};

export const fetchMessages = (chatId) => {
  return async (dispatch) => {
    const response = await RestUtilInstance.Get(`/wechat/messages/${chatId}`);
    const messages = response.data.messages;

    dispatch({
      type: ActionTypes.WECHAT_CHAT_FETCH_MESSAGES,
      payload: { messages, chatId }
    });
  };
};
