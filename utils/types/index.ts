import { Message } from "whatsapp-web.js";

export type TData = {
  id: {
    fromMe: boolean;
    remote: string;
    id: string;
    _serialized: string;
  };
  viewed: boolean;
  body: string;
  type: string;
  t: number;
  notifyName: string;
  from: string;
  to: string;
  self: string;
  ack: number;
  invis: boolean;
  isNewMsg: boolean;
  star: boolean;
  kicNotified: boolean;
  recvFresh: boolean;
  isFromTemplate: boolean;
  pollInvalidated: boolean;
  isSentCagPollCreation: boolean;
  latestEditMsgKey: null | string;
  latestEditSenderTimestampMs: null | number;
  mentionedJidList: string[];
  groupMentions: string[];
  isVcardOverMmsDocument: boolean;
  isForwarded: boolean;
  hasReaction: boolean;
  productHeaderImageRejected: boolean;
  lastPlaybackProgress: number;
  isDynamicReplyButtonsMsg: boolean;
  isCarouselCard: boolean;
  parentMsgId: null | string;
  isMdHistoryMsg: boolean;
  stickerSentTs: number;
  isAvatar: boolean;
  lastUpdateFromServerTs: number;
  invokedBotWid: null | string;
  bizBotType: null | string;
  botResponseTargetId: null | string;
  botPluginType: null | string;
  botPluginReferenceIndex: null | number;
  botPluginSearchProvider: null | string;
  botPluginSearchUrl: null | string;
  botPluginMaybeParent: boolean;
  botReelPluginThumbnailCdnUrl: null | string;
  botMsgBodyType: null | string;
  requiresDirectConnection: null | boolean;
  links: string[];
};

export type TMessage = {
  _data: TData & Message;
};
