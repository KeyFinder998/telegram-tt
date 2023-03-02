"use strict";(self.webpackChunktelegram_t=self.webpackChunktelegram_t||[]).push([[8422],{27225:(t,e,a)=>{a.d(e,{Co:()=>P,bZ:()=>M,ft:()=>v});var i=a(33555),s=a(6137),o=a(91713),d=a(83716),n=a(71226),r=a(5161),c=a(11192),l=a(60782),h=a(69118),u=a(56112),I=a(53551),p=a(78958),f=a(42431),V=a(16974),C=a(50711),w=a(9211),b=a(44271),g=a(65054);const m={id:d.awM,accessHash:"0",type:"userTypeRegular",isMin:!0,phoneNumber:""},y=(0,h.P2)((t=>t()),3e3,!0),R=(0,h.Ds)((t=>t()),500,!1,!0);async function A(t,e,a,o){let h=arguments.length>4&&void 0!==arguments[4]&&arguments[4],u=arguments.length>5?arguments[5]:void 0;t=(0,i.Rd)();const I=(0,c.VF)(t)?.message,p=await(0,n.t9)("fetchChats",{limit:d.Ov0,offsetDate:o,archived:"archived"===e,withPinned:h,lastLocalServiceMessage:I});if(!p)return;const{chatIds:f}=p;if(f.length>0&&f[0]===a&&f.shift(),t=(0,i.Rd)(),h&&"active"===e){if(!f.includes(d.awM)){const e=await(0,n.t9)("fetchChat",{type:"user",user:m});t=(0,i.Rd)();const a=e&&(0,c.Z1)(t,e.chatId);a&&(f.unshift(a.id),p.chats.unshift(a),I&&(a.lastMessage=I))}const a=Object.values(t.byTabId),s=a.flatMap((e=>{let{id:a}=e;const i=(0,c.jr)(t,a);return i?[i]:[]})),o=a.flatMap((e=>{let{id:a}=e;return(0,c.P2)(t,a)||[]}));t.currentUserId&&t.users.byId[t.currentUserId]&&o.push(t.users.byId[t.currentUserId]),t=(0,r.s5)(t,(0,l.ee)(o.concat(p.users),"id")),t=(0,r.ps)(t,p.userStatusesById),t=(0,r.SL)(t,(0,l.ee)(s.concat(p.chats),"id")),t=(0,r.Mg)(t,e,f)}else h&&"archived"===e?(t=(0,r.Sh)(t,(0,l.ee)(p.users,"id")),t=(0,r.zn)(t,p.userStatusesById),t=(0,r.GL)(t,(0,l.ee)(p.chats,"id")),t=(0,r.Mg)(t,e,f)):(t=(0,r.Sh)(t,(0,l.ee)(p.users,"id")),t=(0,r.zn)(t,p.userStatusesById),t=(0,r.GL)(t,(0,l.ee)(p.chats,"id")),t=(0,r.B1)(t,e,f));t=(0,r.vv)(t,e,p);const V=u?p.chatIds:Object.keys(p.draftsById);V.forEach((e=>{const a=p.draftsById[e],i=(0,c.ci)(t,e,s._f);(a||i)&&((0,c.Ms)(t,e,s._f)?.isLocal||(t=(0,r.pf)(t,e,s._f,"draft",a)))}));const C=u?p.chatIds:Object.keys(p.replyingToById);C.forEach((e=>{const a=p.replyingToById[e],i=(0,c.ci)(t,e,s._f);(a||i)&&(t=(0,r.pf)(t,e,s._f,"replyingToId",a))})),0!==f.length||t.chats.isFullyLoaded[e]||(t={...t,chats:{...t.chats,isFullyLoaded:{...t.chats.isFullyLoaded,[e]:!0}}}),(0,i.R3)(t)}async function v(t,e,a){for(var s=arguments.length,o=new Array(s>3?s-3:0),d=3;d<s;d++)o[d-3]=arguments[d];let[c=(0,g._w)()]=o;const h=await(0,n.t9)("fetchFullChat",a);if(!h)return;const{users:u,userStatusesById:I,fullInfo:V,groupCall:C,membersCount:w}=h;if(t=(0,i.Rd)(),u&&(t=(0,r.Sh)(t,(0,l.ee)(u,"id"))),I&&(t=(0,r.zn)(t,I)),C){const e=(0,f.$5)(t,C.id);t=(0,p.AH)(t,C.id,(0,l.CE)(C,["connectionState"]),void 0,e?void 0:C.participantsCount)}t=(0,r.a4)(t,a.id,{fullInfo:V,...w&&{membersCount:w}}),(0,i.R3)(t);const b=V.stickerSet;return b&&e.loadStickers({stickerSetInfo:{id:b.id,accessHash:b.accessHash},tabId:c}),h}async function M(t,e,a){for(var i=arguments.length,s=new Array(i>3?i-3:0),o=3;o<i;o++)s[o-3]=arguments[o];let[d=(0,g._w)()]=s;try{return await(0,n.t9)("migrateChat",a)}catch(t){return void("CHANNELS_TOO_MUCH"===t.message?e.openLimitReachedModal({limit:"channels",tabId:d}):e.showDialog({data:{...t,hasErrorKey:!0},tabId:d}))}}async function P(t,e){t=(0,i.Rd)();const a=(0,c.DI)(t,e);if(a&&!a.isMin)return a;const{chat:s,user:o}=await(0,n.t9)("getChatByUsername",e)||{};return s?(t=(0,i.Rd)(),t=(0,r.a4)(t,s.id,s),o&&(t=(0,r.Nq)(t,o.id,o)),(0,i.R3)(t),s):void 0}async function _(t,e,a){for(var s=arguments.length,o=new Array(s>3?s-3:0),d=3;d<s;d++)o[d-3]=arguments[d];let[h=(0,g._w)()]=o;const I=await P(t,a);if(!I)return;t=(0,i.Rd)();const p=(0,c.dy)(t,I.id);if(!p)return;const f=(0,u.cS)(p);if(!f)return;const V=await(0,n.t9)("loadAttachBot",{bot:p});if(t=(0,i.Rd)(),V)return t=(0,r.Sh)(t,(0,l.ee)(V.users,"id")),(0,i.R3)(t),V.bot;e.showNotification({message:C.Iu("WebApp.AddToAttachmentUnavailableError"),tabId:h})}async function B(t,e,a,s,o){for(var d=arguments.length,n=new Array(d>5?d-5:0),r=5;r<d;r++)n[r-5]=arguments[r];let[c=(0,g._w)()]=n;t=(0,i.Rd)();const l=await _(t,e,s,c);l&&e.callAttachBot({bot:l,chatId:a,..."string"==typeof o&&{startParam:o},tabId:c})}(0,i.iw)("preloadTopChatMessages",(async(t,e)=>{const a=new Set;for(let o=0;o<d.ulj;o++){await(0,h.wO)(100),t=(0,i.Rd)();const o=Object.values(t.byTabId).map((e=>{let{id:a}=e;return(0,c.Bt)(t,a)?.chatId})).filter(Boolean),n=(0,V.gO)(d.NfV)?.find((t=>!o.includes(t)&&!a.has(t)));if(!n)return;a.add(n),e.loadViewportMessages({chatId:n,threadId:s._f,tabId:(0,g._w)()})}})),(0,i.iw)("openChat",((t,e,a)=>{const{id:i,threadId:o=s._f}=a;if(!i)return;const{currentUserId:d}=t,r=(0,c.Z1)(t,i);if(r?.hasUnreadMark&&e.toggleChatUnread({id:i}),r)(0,u.Hp)(r)&&!r.isMin&&e.requestChatUpdate({chatId:i});else if(i===d)(0,n.t9)("fetchChat",{type:"self"});else{const e=(0,c.dy)(t,i);e&&(0,n.t9)("fetchChat",{type:"user",user:e})}o!==s._f&&((0,c.qS)(t,i,o)||e.requestThreadInfoUpdate({chatId:i,threadId:o}))})),(0,i.iw)("openLinkedChat",(async(t,e,a)=>{const{id:i,tabId:s=(0,g._w)()}=a,o=(0,c.Z1)(t,i);if(!o)return;const d=await(0,n.t9)("fetchFullChat",o);d?.fullInfo?.linkedChatId&&e.openChat({id:d.fullInfo.linkedChatId,tabId:s})})),(0,i.iw)("focusMessageInComments",(async(t,e,a)=>{const{chatId:s,threadId:o,messageId:d,tabId:h=(0,g._w)()}=a,u=(0,c.Z1)(t,s);if(!u)return;const I=await(0,n.t9)("requestThreadInfoUpdate",{chat:u,threadId:o});I&&(t=(0,i.Rd)(),t=(0,r.Sh)(t,(0,l.ee)(I.users,"id")),(0,i.R3)(t),e.focusMessage({chatId:s,threadId:o,messageId:d,tabId:h}))})),(0,i.iw)("openSupportChat",(async(t,e,a)=>{const{tabId:i=(0,g._w)()}=a||{},s=(0,c.P_)(t);if(s)return void e.openChat({id:s.id,shouldReplaceHistory:!0,tabId:i});e.openChat({id:d.mzl,shouldReplaceHistory:!0,tabId:i});const o=await(0,n.t9)("fetchChat",{type:"support"});o&&e.openChat({id:o.chatId,shouldReplaceHistory:!0,tabId:i})})),(0,i.iw)("loadAllChats",(async(t,e,a)=>{const s=a.listType,{onReplace:o}=a;let{shouldReplace:n}=a,r=0;const l=t=>t.lastMessage?.date||t.joinDate;for(;n||!t.chats.isFullyLoaded[s];){if(r++>=100)return void(d.eMD&&console.error("`actions/loadAllChats`: Infinite loop detected"));if("connectionStateReady"!==(t=(0,i.Rd)()).connectionState||"authorizationStateReady"!==t.authState)return;const e=!n&&t.chats.listIds[s],a=e?e.map((e=>t.chats.byId[e])).filter((e=>Boolean(e&&l(e))&&e.id!==d.awM&&!(0,c.ep)(t,e.id))).sort(((t,e)=>l(t)-l(e)))[0]:void 0;await A(t,s,a?.id,a?l(a):void 0,n,!0),n&&(o?.(),n=!1),t=(0,i.Rd)()}})),(0,i.iw)("loadFullChat",((t,e,a)=>{const{chatId:i,force:s,tabId:o=(0,g._w)()}=a,d=(0,c.Z1)(t,i);d&&(s?v(t,e,d,o):R((()=>v(t,e,d,o))))})),(0,i.iw)("loadTopChats",(t=>{y((()=>A(t,"active")))})),(0,i.iw)("requestChatUpdate",((t,e,a)=>{const{chatId:i}=a,s=(0,c.Z1)(t,i);s&&(0,n.t9)("requestChatUpdate",{chat:s,...i===d.awM&&{lastLocalMessage:(0,c.VF)(t)?.message}})})),(0,i.iw)("updateChatMutedState",((t,e,a)=>{const{chatId:s,isMuted:o}=a,d=(0,c.Z1)(t,s);d&&(t=(0,r.a4)(t,s,{isMuted:o}),(0,i.R3)(t),(0,n.t9)("updateChatMutedState",{chat:d,isMuted:o}))})),(0,i.iw)("updateTopicMutedState",((t,e,a)=>{const{chatId:s,isMuted:o,topicId:d}=a,l=(0,c.Z1)(t,s);l&&(t=(0,r.Cn)(t,s,d,{isMuted:o}),(0,i.R3)(t),(0,n.t9)("updateTopicMutedState",{chat:l,topicId:d,isMuted:o}))})),(0,i.iw)("createChannel",(async(t,e,a)=>{const{title:s,about:d,photo:l,memberIds:h,tabId:u=(0,g._w)()}=a,I=h.map((e=>(0,c.dy)(t,e))).filter(Boolean);let p;t=(0,b.i)(t,{chatCreation:{progress:o.Nh.InProgress}},u),(0,i.R3)(t);try{p=await(0,n.t9)("createChannel",{title:s,about:d,users:I})}catch(a){t=(0,i.Rd)(),t=(0,b.i)(t,{chatCreation:{progress:o.Nh.Error}},u),(0,i.R3)(t),"CHANNELS_TOO_MUCH"===a.message?e.openLimitReachedModal({limit:"channels",tabId:u}):e.showDialog({data:{...a,hasErrorKey:!0},tabId:u})}if(!p)return;const{id:f,accessHash:V}=p;t=(0,i.Rd)(),t=(0,r.a4)(t,f,p),t=(0,b.i)(t,{chatCreation:{...(0,c.jU)(t,u).chatCreation,progress:p?o.Nh.Complete:o.Nh.Error}},u),(0,i.R3)(t),e.openChat({id:f,shouldReplaceHistory:!0,tabId:u}),f&&V&&l&&await(0,n.t9)("editChatPhoto",{chatId:f,accessHash:V,photo:l})})),(0,i.iw)("joinChannel",(async(t,e,a)=>{const{chatId:i,tabId:s=(0,g._w)()}=a,o=(0,c.Z1)(t,i);if(!o)return;const{id:d,accessHash:r}=o;if(d&&r)try{await(0,n.t9)("joinChannel",{channelId:d,accessHash:r})}catch(t){"CHANNELS_TOO_MUCH"===t.message?e.openLimitReachedModal({limit:"channels",tabId:s}):e.showDialog({data:{...t,hasErrorKey:!0},tabId:s})}})),(0,i.iw)("deleteChatUser",((t,e,a)=>{const{chatId:s,userId:o,tabId:d=(0,g._w)()}=a,l=(0,c.Z1)(t,s),h=(0,c.dy)(t,o);l&&h&&(t=(0,r.Dd)(t,s),(0,i.R3)(t),(0,c.Bt)(t,d)?.chatId===s&&e.openChat({id:void 0,tabId:d}),(0,n.t9)("deleteChatUser",{chat:l,user:h}))})),(0,i.iw)("deleteChat",((t,e,a)=>{const{chatId:s,tabId:o=(0,g._w)()}=a,d=(0,c.Z1)(t,s);d&&(t=(0,r.Dd)(t,s),(0,i.R3)(t),(0,c.Bt)(t,o)?.chatId===s&&e.openChat({id:void 0,tabId:o}),(0,n.t9)("deleteChat",{chatId:d.id}))})),(0,i.iw)("leaveChannel",((t,e,a)=>{const{chatId:s,tabId:o=(0,g._w)()}=a,d=(0,c.Z1)(t,s);if(!d)return;t=(0,r.Dd)(t,s),(0,i.R3)(t),(0,c.Bt)(t,o)?.chatId===s&&e.openChat({id:void 0,tabId:o});const{id:l,accessHash:h}=d;l&&h&&(0,n.t9)("leaveChannel",{channelId:l,accessHash:h})})),(0,i.iw)("deleteChannel",((t,e,a)=>{const{chatId:s,tabId:o=(0,g._w)()}=a,d=(0,c.Z1)(t,s);if(!d)return;t=(0,r.Dd)(t,s),(0,i.R3)(t),(0,c.Bt)(t,o)?.chatId===s&&e.openChat({id:void 0,tabId:o});const{id:l,accessHash:h}=d;l&&h&&(0,n.t9)("deleteChannel",{channelId:l,accessHash:h})})),(0,i.iw)("createGroupChat",(async(t,e,a)=>{const{title:s,memberIds:d,photo:l,tabId:h=(0,g._w)()}=a,u=d.map((e=>(0,c.dy)(t,e))).filter(Boolean);t=(0,b.i)(t,{chatCreation:{progress:o.Nh.InProgress}},h),(0,i.R3)(t);try{const a=await(0,n.t9)("createGroupChat",{title:s,users:u});if(!a)return;const{id:d}=a;t=(0,i.Rd)(),t=(0,r.a4)(t,d,a),t=(0,b.i)(t,{chatCreation:{...(0,c.jU)(t,h).chatCreation,progress:a?o.Nh.Complete:o.Nh.Error}},h),(0,i.R3)(t),e.openChat({id:d,shouldReplaceHistory:!0,tabId:h}),d&&l&&await(0,n.t9)("editChatPhoto",{chatId:d,photo:l})}catch(e){"USERS_TOO_FEW"===e.message&&(t=(0,i.Rd)(),t=(0,b.i)(t,{chatCreation:{...(0,c.jU)(t,h).chatCreation,progress:o.Nh.Error,error:"CreateGroupError"}},h),(0,i.R3)(t))}})),(0,i.iw)("toggleChatPinned",((t,e,a)=>{const{id:i,folderId:s,tabId:o=(0,g._w)()}=a,r=(0,c.Z1)(t,i);if(!r)return;const l=(0,w.M)(t,"dialogFolderPinned");if(s){const e=(0,c.Mw)(t,s);if(e){const a=!(0,c.ep)(t,i,s),{pinnedChatIds:o,includedChatIds:d}=e,r=a?[i,...o||[]]:(o||[]).filter((t=>t!==i)),l=[i,...d];(0,n.t9)("editChatFolder",{id:s,folderUpdate:{...e,pinnedChatIds:r,includedChatIds:l}})}}else{const a=(0,c.Ek)(t,i),s=(0,c.ep)(t,i,"archived"===a?d.WSp:void 0);if((t.chats.orderedPinnedIds["archived"===a?"archived":"active"]?.length||0)>=l&&!s)return void e.openLimitReachedModal({limit:"dialogFolderPinned",tabId:o});(0,n.t9)("toggleChatPinned",{chat:r,shouldBePinned:!s})}})),(0,i.iw)("toggleChatArchived",((t,e,a)=>{const{id:i}=a,s=(0,c.Z1)(t,i);s&&(0,n.t9)("toggleChatArchived",{chat:s,folderId:(0,u.pE)(s)?0:d.WSp})})),(0,i.iw)("loadChatFolders",(async t=>{const e=await(0,n.t9)("fetchChatFolders");e&&(t=(0,i.Rd)(),t={...t,chatFolders:{...t.chatFolders,...e}},(0,i.R3)(t))})),(0,i.iw)("loadRecommendedChatFolders",(async t=>{const e=await(0,n.t9)("fetchRecommendedChatFolders");e&&(t=(0,i.Rd)(),t={...t,chatFolders:{...t.chatFolders,recommended:e}},(0,i.R3)(t))})),(0,i.iw)("editChatFolders",((t,e,a)=>{const{chatId:i,idsToRemove:s,idsToAdd:o,tabId:d=(0,g._w)()}=a,r=(0,w.M)(t,"dialogFiltersChats");o.some((e=>(0,c.Mw)(t,e).includedChatIds.length>=r))?e.openLimitReachedModal({limit:"dialogFiltersChats",tabId:d}):(s.forEach((async e=>{const a=(0,c.Mw)(t,e);a&&await(0,n.t9)("editChatFolder",{id:e,folderUpdate:{...a,pinnedChatIds:a.pinnedChatIds?.filter((t=>t!==i)),includedChatIds:a.includedChatIds.filter((t=>t!==i))}})})),o.forEach((async e=>{const a=(0,c.Mw)(t,e);a&&await(0,n.t9)("editChatFolder",{id:e,folderUpdate:{...a,includedChatIds:a.includedChatIds.concat(i)}})})))})),(0,i.iw)("editChatFolder",((t,e,a)=>{const{id:i,folderUpdate:s}=a,o=(0,c.Mw)(t,i);o&&(0,n.t9)("editChatFolder",{id:i,folderUpdate:{id:i,emoticon:o.emoticon,pinnedChatIds:o.pinnedChatIds,...s}})})),(0,i.iw)("addChatFolder",(async(t,e,a)=>{const{folder:s,tabId:o=(0,g._w)()}=a,{orderedIds:r,byId:c}=t.chatFolders,l=(0,w.M)(t,"dialogFilters");if(Object.keys(c).length>=l)return void e.openLimitReachedModal({limit:"dialogFilters",tabId:o});const h=Math.max(...r||[],d.WSp),{id:u,description:I,...p}=s;if(await(0,n.t9)("editChatFolder",{id:h+1,folderUpdate:{id:h+1,...p}}),!I)return;t=(0,i.Rd)();const{recommended:f}=t.chatFolders;f&&(t={...t,chatFolders:{...t.chatFolders,recommended:f.filter((t=>{let{id:e}=t;return e!==u}))}},(0,i.R3)(t))})),(0,i.iw)("sortChatFolders",(async(t,e,a)=>{const{folderIds:s}=a;await(0,n.t9)("sortChatFolders",s)&&(t=(0,i.Rd)(),t={...t,chatFolders:{...t.chatFolders,orderedIds:s}},(0,i.R3)(t))})),(0,i.iw)("deleteChatFolder",(async(t,e,a)=>{const{id:i}=a;(0,c.Mw)(t,i)&&await(0,n.t9)("deleteChatFolder",i)})),(0,i.iw)("toggleChatUnread",((t,e,a)=>{const{id:i}=a,o=(0,c.Z1)(t,i);o&&(o.unreadCount?(0,n.t9)("markMessageListRead",{chat:o,threadId:s._f}):(0,n.t9)("toggleDialogUnread",{chat:o,hasUnreadMark:!o.hasUnreadMark}))})),(0,i.iw)("markTopicRead",((t,e,a)=>{const{chatId:s,topicId:o}=a,d=(0,c.Z1)(t,s);if(!d)return;const l=d.topics?.[o]?.lastMessageId;l&&((0,n.t9)("markMessageListRead",{chat:d,threadId:o,maxId:l}),t=(0,i.Rd)(),t=(0,r.Cn)(t,s,o,{unreadCount:0}),t=(0,r.Xg)(t,s,o,{lastReadInboxMessageId:l}),(0,i.R3)(t))})),(0,i.iw)("openChatByInvite",(async(t,e,a)=>{const{hash:i,tabId:s=(0,g._w)()}=a,o=await(0,n.t9)("openChatByInvite",i);o&&e.openChat({id:o.chatId,tabId:s})})),(0,i.iw)("openChatByPhoneNumber",(async(t,e,a)=>{const{phoneNumber:s,startAttach:o,attach:l,tabId:h=(0,g._w)()}=a;e.openChat({id:d.mzl,tabId:h});const u=await async function(t,e){t=(0,i.Rd)();const a=(0,c.Bk)(t,e);if(a&&!a.isMin)return(0,c.Z1)(t,a.id);const{chat:s,user:o}=await(0,n.t9)("getChatByPhoneNumber",e)||{};return s?(t=(0,i.Rd)(),t=(0,r.a4)(t,s.id,s),(0,i.R3)(t),o&&(t=(0,r.Nq)(t,o.id,o),(0,i.R3)(t)),s):void 0}(t,s);if(!u)return e.openPreviousChat({tabId:h}),void e.showNotification({message:C.Iu("lng_username_by_phone_not_found").replace("{phone}",s),tabId:h});e.openChat({id:u.id,tabId:h}),l&&B(t=(0,i.Rd)(),e,u.id,l,o,h)})),(0,i.iw)("openTelegramLink",((t,e,a)=>{const{url:i,tabId:s=(0,g._w)()}=a,{openChatByPhoneNumber:o,openChatByInvite:n,openStickerSet:r,openChatWithDraft:l,joinVoiceChatByLink:h,showNotification:u,focusMessage:p,openInvoice:f,processAttachBotParameters:V,openChatByUsername:C}=e;if(i.match(d.g$l))return void(0,I.ou)(i);const w=new URL(i.toLowerCase().startsWith("http")?i:`https://${i}`);if(d.LBg.has(w.hostname)&&"/"===w.pathname)return void window.open(w.toString(),"_blank","noopener");const b=(d.LBg.has(w.hostname)?"t.me":w.hostname).split(".");if(b.length>3)return;const m=3===b.length?`${b[0]}/${w.pathname}`:w.pathname,[y,R,A]=m.split("/").filter(Boolean).map((t=>decodeURI(t))),v=Object.fromEntries(w.searchParams);let M;"joinchat"===y&&(M=R);const P=!(!v.hasOwnProperty("startattach")||v.startattach)||v.startattach,_=(0,I.GX)(v.choose);if(y.match(/^\+([0-9]+)(\?|$)/))return void o({phoneNumber:y.substr(1,y.length-1),startAttach:P,attach:v.attach,tabId:s});if((y.startsWith(" ")||y.startsWith("+"))&&(M=y.substr(1,y.length-1)),M)return void n({hash:M,tabId:s});if("addstickers"===y||"addemoji"===y)return void r({stickerSetInfo:{shortName:R},tabId:s});const B=R||void 0,H=A?Number(A):void 0,T=v.comment?Number(v.comment):void 0;if("share"===y)l({text:(0,I.QH)(v.url,v.text),tabId:s});else if(v.hasOwnProperty("voicechat")||v.hasOwnProperty("livestream"))h({username:y,inviteHash:v.voicechat||v.livestream,tabId:s});else if("c"===y&&B&&H){const e=`-${B}`;if(!(0,c.Z1)(t,e))return void u({message:"Chat does not exist",tabId:s});p({chatId:e,messageId:H,tabId:s})}else y.startsWith("$")?f({slug:y.substring(1),tabId:s}):"invoice"===y?f({slug:R,tabId:s}):P&&_?V({username:y,filter:_,..."string"==typeof P&&{startParam:P},tabId:s}):C({username:y,messageId:H||Number(B),threadId:H?Number(B):void 0,commentId:T,startParam:v.start,startAttach:P,attach:v.attach,tabId:s})})),(0,i.iw)("acceptInviteConfirmation",(async(t,e,a)=>{const{hash:i,tabId:s=(0,g._w)()}=a,o=await(0,n.t9)("importChatInvite",{hash:i});o&&e.openChat({id:o.id,tabId:s})})),(0,i.iw)("openChatByUsername",(async(t,e,a)=>{const{username:s,messageId:o,commentId:h,startParam:u,startAttach:I,attach:p,threadId:f,tabId:V=(0,g._w)()}=a,C=(0,c.jr)(t,V);if(!h)return!I&&o&&!u&&C?.usernames?.some((t=>t.username===s))?void e.focusMessage({chatId:C.id,threadId:f,messageId:o,tabId:V}):void await async function(t,e,a,s,o,n,r,l){for(var h=arguments.length,u=new Array(h>8?h-8:0),I=8;I<h;I++)u[I-8]=arguments[I];let[p=(0,g._w)()]=u;t=(0,i.Rd)();const f=(0,c.jr)(t,p);if(r&&!l){const i=await _(t,e,a,p);if(!f||!i)return;return void e.callAttachBot({bot:i,chatId:f.id,..."string"==typeof r&&{startParam:r},tabId:p})}const V=f?.usernames?.some((t=>t.username===a));V||e.openChat({id:d.mzl,tabId:p});const C=await P(t,a);C?(o?e.focusMessage({chatId:C.id,threadId:s,messageId:o,tabId:p}):V||e.openChat({id:C.id,threadId:s,tabId:p}),n&&e.startBot({botId:C.id,param:n}),l&&B(t=(0,i.Rd)(),e,C.id,l,r,p)):V||(e.openPreviousChat({tabId:p}),e.showNotification({message:"User does not exist",tabId:p}))}(t,e,s,f,o,u,I,p,V);const{chatId:w,type:b}=(0,c.Bt)(t,V)||{},m=(0,c.DI)(t,s);if(w&&o&&m&&"thread"===b){const a=(0,c.tZ)(t,w,o);if(a&&a.chatId===w)return void e.focusMessage({chatId:a.chatId,threadId:a.threadId,messageId:h,tabId:V})}if(!o)return;e.openChat({id:d.mzl,tabId:V});const y=await P(t,s);if(!y)return;t=(0,i.Rd)();const R=(0,c.tZ)(t,y.id,o);let A;if(R)A=R.chatId;else{const e=await(0,n.t9)("requestThreadInfoUpdate",{chat:y,threadId:o});if(!e)return;t=(0,i.Rd)(),t=(0,r.Sh)(t,(0,l.ee)(e.users,"id")),(0,i.R3)(t),A=e.discussionChatId}A&&e.focusMessage({chatId:A,threadId:o,messageId:Number(h),tabId:V})})),(0,i.iw)("togglePreHistoryHidden",(async(t,e,a)=>{const{chatId:s,isEnabled:o,tabId:d=(0,g._w)()}=a;let l=(0,c.Z1)(t,s);if(l)if((0,u.G9)(l)){if(l=await M(t,e,l,d),t=(0,i.Rd)(),!l)return;e.openChat({id:l.id,tabId:d})}else t=(0,r.a4)(t,l.id,{fullInfo:{...l.fullInfo,isPreHistoryHidden:o}}),(0,i.R3)(t),(0,n.t9)("togglePreHistoryHidden",{chat:l,isEnabled:o})})),(0,i.iw)("updateChatDefaultBannedRights",((t,e,a)=>{const{chatId:i,bannedRights:s}=a,o=(0,c.Z1)(t,i);o&&(0,n.t9)("updateChatDefaultBannedRights",{chat:o,bannedRights:s})})),(0,i.iw)("updateChatMemberBannedRights",(async(t,e,a)=>{const{chatId:s,userId:o,bannedRights:d,tabId:l=(0,g._w)()}=a;let h=(0,c.Z1)(t,s);const I=(0,c.dy)(t,o);if(!h||!I)return;if((0,u.G9)(h)){if(h=await M(t,e,h,l),!h)return;e.openChat({id:h.id,tabId:l})}await(0,n.t9)("updateChatMemberBannedRights",{chat:h,user:I,bannedRights:d}),t=(0,i.Rd)();const p=(0,c.Z1)(t,s);if(!p||!p.fullInfo)return;const{members:f,kickedMembers:V}=p.fullInfo,C=Boolean(d.viewMessages),w=!Object.keys(d).length;t=(0,r.a4)(t,s,{fullInfo:{...p.fullInfo,...f&&C&&{members:f.filter((t=>t.userId!==o))},...f&&!C&&{members:f.map((t=>t.userId===o?{...t,bannedRights:d}:t))},...w&&V&&{kickedMembers:V.filter((t=>t.userId!==o))}}}),(0,i.R3)(t)})),(0,i.iw)("updateChatAdmin",(async(t,e,a)=>{const{chatId:s,userId:o,adminRights:d,customTitle:l,tabId:h=(0,g._w)()}=a;let I=(0,c.Z1)(t,s);const p=(0,c.dy)(t,o);if(!I||!p)return;if((0,u.G9)(I)){if(I=await M(t,e,I,h),!I)return;e.openChat({id:I.id,tabId:h})}await(0,n.t9)("updateChatAdmin",{chat:I,user:p,adminRights:d,customTitle:l});const f=await(0,n.t9)("fetchFullChat",I);if(!f?.fullInfo)return;const{adminMembersById:V}=f.fullInfo,C=!Object.keys(d).length;let w;if(V)if(C){const{[o]:t,...e}=V;w=e}else w={...V,[o]:{...V[o],adminRights:d,customTitle:l}};t=(0,i.Rd)(),t=(0,r.a4)(t,s,{fullInfo:{...f.fullInfo,...w&&{adminMembersById:w}}}),(0,i.R3)(t)})),(0,i.iw)("updateChat",(async(t,e,a)=>{const{chatId:s,title:d,about:l,photo:h,tabId:u=(0,g._w)()}=a,I=(0,c.Z1)(t,s);I&&(t=(0,i.Rd)(),t=(0,r.H9)(t,o.wv.InProgress,u),(0,i.R3)(t),await Promise.all([I.title!==d?(0,n.t9)("updateChatTitle",I,d):void 0,I.fullInfo&&I.fullInfo.about!==l?(0,n.t9)("updateChatAbout",I,l):void 0,h?(0,n.t9)("editChatPhoto",{chatId:s,accessHash:I.accessHash,photo:h}):void 0]),t=(0,i.Rd)(),t=(0,r.H9)(t,o.wv.Complete,u),(0,i.R3)(t))})),(0,i.iw)("updateChatPhoto",(async(t,e,a)=>{const{photo:s,chatId:o,tabId:d=(0,g._w)()}=a,l=(0,c.Z1)(t,o);l&&(t=(0,r.a4)(t,o,{avatarHash:void 0,fullInfo:{...l.fullInfo,profilePhoto:void 0}}),(0,i.R3)(t),await(0,n.t9)("editChatPhoto",{chatId:o,accessHash:l.accessHash,photo:s}),await(0,n.t9)("deleteProfilePhotos",[s]),e.loadFullChat({chatId:o,tabId:d}),e.loadProfilePhotos({profileId:o}))})),(0,i.iw)("deleteChatPhoto",(async(t,e,a)=>{const{photo:s,chatId:o,tabId:d=(0,g._w)()}=a,l=(0,c.Z1)(t,o);if(!l)return;const h=[s];if(l.avatarHash===s.id){const e=l.photos?.[1];e&&h.push(e),t=(0,r.a4)(t,o,{avatarHash:void 0,fullInfo:{...l.fullInfo,profilePhoto:void 0}}),(0,i.R3)(t),await(0,n.t9)("editChatPhoto",{chatId:o,accessHash:l.accessHash,photo:e})}await(0,n.t9)("deleteProfilePhotos",h)&&(e.loadFullChat({chatId:o,tabId:d}),e.loadProfilePhotos({profileId:o}))})),(0,i.iw)("toggleSignatures",((t,e,a)=>{const{chatId:i,isEnabled:s}=a,o=(0,c.Z1)(t,i);o&&(0,n.t9)("toggleSignatures",{chat:o,isEnabled:s})})),(0,i.iw)("loadGroupsForDiscussion",(async t=>{const e=await(0,n.t9)("fetchGroupsForDiscussion");if(!e)return;const a=e.reduce(((t,e)=>(e&&!e.isForum&&(t[e.id]=e),t)),{});t=(0,i.Rd)(),t=(0,r.fZ)(t,a),t={...t,chats:{...t.chats,forDiscussionIds:Object.keys(a)}},(0,i.R3)(t)})),(0,i.iw)("linkDiscussionGroup",(async(t,e,a)=>{const{channelId:s,chatId:o,tabId:d=(0,g._w)()}=a||{},l=(0,c.Z1)(t,s);let h=(0,c.Z1)(t,o);if(!l||!h)return;if((0,u.G9)(h)){if(h=await M(t,e,h,d),!h)return;e.openChat({id:h.id,tabId:d})}let{fullInfo:I}=h;if(!I){const t=await(0,n.t9)("fetchFullChat",h);if(!t)return;I=t.fullInfo}I.isPreHistoryHidden&&(t=(0,i.Rd)(),t=(0,r.a4)(t,h.id,{fullInfo:{...h.fullInfo,isPreHistoryHidden:!1}}),(0,i.R3)(t),await(0,n.t9)("togglePreHistoryHidden",{chat:h,isEnabled:!1})),(0,n.t9)("setDiscussionGroup",{channel:l,chat:h})})),(0,i.iw)("unlinkDiscussionGroup",(async(t,e,a)=>{const{channelId:s,tabId:o=(0,g._w)()}=a,d=(0,c.Z1)(t,s);if(!d)return;let r;d.fullInfo?.linkedChatId&&(r=(0,c.Z1)(t,d.fullInfo.linkedChatId)),await(0,n.t9)("setDiscussionGroup",{channel:d}),r&&v(t=(0,i.Rd)(),e,r,o)})),(0,i.iw)("setActiveChatFolder",((t,e,a)=>{const{activeChatFolder:i,tabId:s=(0,g._w)()}=a;if(!(i+1>(0,w.M)(t,"dialogFilters")))return(0,b.i)(t,{activeChatFolder:i},s);e.openLimitReachedModal({limit:"dialogFilters",tabId:s})})),(0,i.iw)("resetOpenChatWithDraft",((t,e,a)=>{const{tabId:i=(0,g._w)()}=a||{};return(0,b.i)(t,{requestedDraft:void 0},i)})),(0,i.iw)("loadMoreMembers",(async(t,e,a)=>{const{tabId:s=(0,g._w)()}=a||{},{chatId:o}=(0,c.Bt)(t,s)||{},d=o?(0,c.Z1)(t,o):void 0;if(!d||(0,u.G9)(d))return;const h=d.fullInfo?.members?.length||void 0;if(void 0!==h&&void 0!==d.membersCount&&h>=d.membersCount)return;const I=await(0,n.t9)("fetchMembers",d.id,d.accessHash,"recent",h);if(!I)return;const{members:p,users:f,userStatusesById:V}=I;p&&p.length&&(t=(0,i.Rd)(),t=(0,r.Sh)(t,(0,l.ee)(f,"id")),t=(0,r.zn)(t,V),t=(0,r.iX)(t,d,p),(0,i.R3)(t))})),(0,i.iw)("addChatMembers",(async(t,e,a)=>{const{chatId:s,memberIds:d,tabId:r=(0,g._w)()}=a,l=(0,c.Z1)(t,s),h=d.map((e=>(0,c.dy)(t,e))).filter(Boolean);l&&h.length&&(e.setNewChatMembersDialogState({newChatMembersProgress:o.WB.Loading,tabId:r}),await(0,n.t9)("addChatMembers",l,h),e.setNewChatMembersDialogState({newChatMembersProgress:o.WB.Closed,tabId:r}),v(t=(0,i.Rd)(),e,l,r))})),(0,i.iw)("deleteChatMember",(async(t,e,a)=>{const{chatId:s,userId:o,tabId:d=(0,g._w)()}=a,r=(0,c.Z1)(t,s),l=(0,c.dy)(t,o);r&&l&&(await(0,n.t9)("deleteChatMember",r,l),v(t=(0,i.Rd)(),e,r,d))})),(0,i.iw)("toggleIsProtected",((t,e,a)=>{const{chatId:i,isProtected:s}=a,o=(0,c.Z1)(t,i);o&&(0,n.t9)("toggleIsProtected",{chat:o,isProtected:s})})),(0,i.iw)("setChatEnabledReactions",(async(t,e,a)=>{const{chatId:s,enabledReactions:o,tabId:d=(0,g._w)()}=a,r=(0,c.Z1)(t,s);r&&(await(0,n.t9)("setChatEnabledReactions",{chat:r,enabledReactions:o}),v(t=(0,i.Rd)(),e,r,d))})),(0,i.iw)("loadChatSettings",(async(t,e,a)=>{const{chatId:s}=a,o=(0,c.Z1)(t,s);if(!o)return;const d=await(0,n.t9)("fetchChatSettings",o);if(!d)return;const{settings:h,users:u}=d;t=(0,i.Rd)(),t=(0,r.Sh)(t,(0,l.ee)(u,"id")),t=(0,r.a4)(t,o.id,{settings:h}),(0,i.R3)(t)})),(0,i.iw)("toggleJoinToSend",(async(t,e,a)=>{const{chatId:i,isEnabled:s}=a,o=(0,c.Z1)(t,i);o&&((0,u.ZV)(o)||(0,u.eA)(o))&&await(0,n.t9)("toggleJoinToSend",o,s)})),(0,i.iw)("toggleJoinRequest",(async(t,e,a)=>{const{chatId:i,isEnabled:s}=a,o=(0,c.Z1)(t,i);o&&((0,u.ZV)(o)||(0,u.eA)(o))&&await(0,n.t9)("toggleJoinRequest",o,s)})),(0,i.iw)("openForumPanel",((t,e,a)=>{const{chatId:i,tabId:s=(0,g._w)()}=a;return(0,b.i)(t,{forumPanelChatId:i},s)})),(0,i.iw)("closeForumPanel",((t,e,a)=>{const{tabId:i=(0,g._w)()}=a||{};return(0,b.i)(t,{forumPanelChatId:void 0},i)})),(0,i.iw)("processAttachBotParameters",(async(t,e,a)=>{const{username:s,filter:o,startParam:d,tabId:n=(0,g._w)()}=a,r=await _(t,e,s,n);if(!r)return;t=(0,i.Rd)();const{attachMenu:{bots:c}}=t;if(!c[r.id])return t=(0,b.i)(t,{requestedAttachBotInstall:{bot:r,onConfirm:{action:"requestAttachBotInChat",payload:{bot:r,filter:o,startParam:d}}}},n),void(0,i.R3)(t);e.requestAttachBotInChat({bot:r,filter:o,startParam:d,tabId:n})})),(0,i.iw)("loadTopics",(async(t,e,a)=>{const{chatId:s,force:o}=a,h=(0,c.Z1)(t,s);if(!h)return;if(!o&&h.listedTopicIds&&h.listedTopicIds.length===h.topicsCount)return;const u=!o&&h.listedTopicIds?h.listedTopicIds.reduce(((t,e)=>{const a=h.topics?.[e],i=h.topics?.[t];return a&&(!i||a.lastMessageId<i.lastMessageId)?e:t})):void 0,{id:I,date:p,lastMessageId:f}=u&&h.topics?.[u]||{},V=await(0,n.t9)("fetchTopics",{chat:h,offsetTopicId:I,offsetId:f,offsetDate:p,limit:I?d.C1M:d.SC4});V&&(t=(0,i.Rd)(),t=(0,r.Sh)(t,(0,l.ee)(V.users,"id")),t=(0,r.fZ)(t,(0,l.ee)(V.chats,"id")),t=(0,r.m6)(t,V.messages),t=(0,r.XG)(t,s,V.count,V.topics),t=(0,r.Jr)(t,s,V.topics.map((t=>t.id))),Object.entries(V.draftsById||{}).forEach((e=>{let[a,i]=e;t=(0,r.pf)(t,s,Number(a),"draft",i?.formattedText),t=(0,r.pf)(t,s,Number(a),"replyingToId",i?.replyingToId)})),Object.entries(V.readInboxMessageIdByTopicId||{}).forEach((e=>{let[a,i]=e;t=(0,r.Xg)(t,s,Number(a),{lastReadInboxMessageId:i})})),(0,i.R3)(t))})),(0,i.iw)("loadTopicById",(async(t,e,a)=>{const{chatId:s,topicId:o}=a,d=(0,c.Z1)(t,s);if(!d)return;const h=await(0,n.t9)("fetchTopicById",{chat:d,topicId:o});if(h)t=(0,i.Rd)(),t=(0,r.Sh)(t,(0,l.ee)(h.users,"id")),t=(0,r.fZ)(t,(0,l.ee)(h.chats,"id")),t=(0,r.m6)(t,h.messages),t=(0,r.Cn)(t,s,o,h.topic),(0,i.R3)(t);else if("tabId"in a&&a.shouldCloseChatOnError){const{tabId:t=(0,g._w)()}=a;e.openChat({id:void 0,tabId:t})}})),(0,i.iw)("toggleForum",(async(t,e,a)=>{const{chatId:s,isEnabled:o}=a,d=(0,c.Z1)(t,s);if(!d)return;const l=d.isForum;t=(0,r.a4)(t,s,{isForum:o}),(0,i.R3)(t),await(0,n.t9)("toggleForum",{chat:d,isEnabled:o})||(t=(0,i.Rd)(),t=(0,r.a4)(t,s,{isForum:l}),(0,i.R3)(t))})),(0,i.iw)("toggleParticipantsHidden",(async(t,e,a)=>{const{chatId:s,isEnabled:o}=a,d=(0,c.Z1)(t,s);if(!d)return;const l=d.fullInfo?.areParticipantsHidden;t=(0,r.a4)(t,s,{fullInfo:{...d.fullInfo,areParticipantsHidden:o}}),(0,i.R3)(t),await(0,n.t9)("toggleParticipantsHidden",{chat:d,isEnabled:o})||void 0===l||(t=(0,i.Rd)(),t=(0,r.a4)(t,s,{fullInfo:{...d.fullInfo,areParticipantsHidden:l}}),(0,i.R3)(t))})),(0,i.iw)("createTopic",(async(t,e,a)=>{const{chatId:s,title:o,iconColor:d,iconEmojiId:r,tabId:l=(0,g._w)()}=a,h=(0,c.Z1)(t,s);if(!h)return;(0,c.jU)(t,l).createTopicPanel&&(t=(0,b.i)(t,{createTopicPanel:{chatId:s,isLoading:!0}},l),(0,i.R3)(t));const u=await(0,n.t9)("createTopic",{chat:h,title:o,iconColor:d,iconEmojiId:r});u&&e.openChat({id:s,threadId:u,shouldReplaceHistory:!0,tabId:l}),e.closeCreateTopicPanel({tabId:l})})),(0,i.iw)("deleteTopic",(async(t,e,a)=>{const{chatId:s,topicId:o}=a,d=(0,c.Z1)(t,s);d&&await(0,n.t9)("deleteTopic",{chat:d,topicId:o})&&(t=(0,i.Rd)(),t=(0,r.BK)(t,s,o),(0,i.R3)(t))})),(0,i.iw)("editTopic",(async(t,e,a)=>{const{chatId:s,topicId:o,tabId:d=(0,g._w)(),...l}=a,h=(0,c.Z1)(t,s),u=h?.topics?.[o];h&&u&&((0,c.jU)(t,d).editTopicPanel&&(t=(0,b.i)(t,{editTopicPanel:{chatId:s,topicId:o,isLoading:!0}},d),(0,i.R3)(t)),await(0,n.t9)("editTopic",{chat:h,topicId:o,...l})&&(t=(0,i.Rd)(),t=(0,r.Cn)(t,s,o,l),(0,i.R3)(t),e.closeEditTopicPanel({tabId:d})))})),(0,i.iw)("toggleTopicPinned",((t,e,a)=>{const{chatId:i,topicId:s,isPinned:o,tabId:d=(0,g._w)()}=a,{topicsPinnedLimit:r}=t.appConfig||{},l=(0,c.Z1)(t,i);l&&l.topics&&r&&(o&&Object.values(l.topics).filter((t=>t.isPinned)).length>=r?e.showNotification({message:C.Iu("LimitReachedPinnedTopics",r,"i"),tabId:d}):(0,n.t9)("togglePinnedTopic",{chat:l,topicId:s,isPinned:o}))}))},88422:(t,e,a)=>{a.d(e,{CW:()=>_,EP:()=>y,FF:()=>v,Mt:()=>P,NH:()=>M,o5:()=>m});var i=a(33555),s=a(71226),o=a(11192),d=a(64319),n=a(27225),r=a(5161),c=a(78958),l=a(42431),h=a(56112),u=a(60782),I=a(74753),p=a(77361),f=a(50711),V=a(44271),C=a(65054);let w,b,g;function m(){return y(),Promise.all(Object.values(g).map((t=>{const e=t.src;return t.src="data:audio/mpeg;base64,SUQzBAAAAAABEVRYWFgAAAAtAAADY29tbWVudABCaWdTb3VuZEJhbmsuY29tIC8gTGFTb25vdGhlcXVlLm9yZwBURU5DAAAAHQAAA1N3aXRjaCBQbHVzIMKpIE5DSCBTb2Z0d2FyZQBUSVQyAAAABgAAAzIyMzUAVFNTRQAAAA8AAANMYXZmNTcuODMuMTAwAAAAAAAAAAAAAAD/80DEAAAAA0gAAAAATEFNRTMuMTAwVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQsRbAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQMSkAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV",t.muted=!0,t.volume=1e-4,t.play().then((()=>{t.pause(),t.volume=1,t.currentTime=0,t.muted=!1,requestAnimationFrame((()=>{t.src=e}))}))})))}function y(){if(g)return;const t=new Audio("./voicechat_join.mp3"),e=new Audio("./voicechat_connecting.mp3");e.loop=!0;const a=new Audio("./voicechat_leave.mp3"),i=new Audio("./voicechat_onallowtalk.mp3"),s=new Audio("./call_busy.mp3"),o=new Audio("./call_connect.mp3"),d=new Audio("./call_end.mp3"),n=new Audio("./call_incoming.mp3");n.loop=!0;const r=new Audio("./call_ringing.mp3");r.loop=!0,g={join:t,allowTalk:i,leave:a,connecting:e,incoming:n,end:d,connect:o,busy:s,ringing:r}}async function R(t,e){const a=await(0,s.t9)("getGroupCall",{call:e});if(!a)return;t=(0,i.Rd)();const o=(0,l.$5)(t,e.id);return t=(0,c.AH)(t,e.id,(0,u.CE)(a.groupCall,["connectionState"]),void 0,o?.isLoaded?void 0:a.groupCall.participantsCount),t=(0,r.Sh)(t,(0,u.ee)(a.users,"id")),t=(0,r.fZ)(t,(0,u.ee)(a.chats,"id")),(0,i.R3)(t),a.groupCall}async function A(t,e,a){const o=await(0,s.t9)("fetchGroupCallParticipants",{call:e,offset:a});o&&(t=(0,i.Rd)(),t=(0,r.Sh)(t,(0,u.ee)(o.users,"id")),t=(0,r.fZ)(t,(0,u.ee)(o.chats,"id")),(0,i.R3)(t))}function v(){return w}function M(){return b}function P(){w?.pause(),b=void 0,w=void 0}function _(t,e,a){for(var i=arguments.length,s=new Array(i>3?i-3:0),o=3;o<i;o++)s[o-3]=arguments[o];let[d=(0,C._w)()]=s;a?navigator.mediaDevices.getUserMedia({video:!0}).then((a=>{0===a.getVideoTracks().length?e.showNotification({message:f.Iu("Call.Camera.Error"),tabId:d}):B(t,e,d)})).catch((()=>{e.showNotification({message:f.Iu("Call.Camera.Error"),tabId:d})})):B(t,e,d)}function B(t,e){for(var a=arguments.length,i=new Array(a>2?a-2:0),s=2;s<a;s++)i[s-2]=arguments[s];let[o=(0,C._w)()]=i;navigator.mediaDevices.getUserMedia({audio:!0}).then((t=>{0===t.getAudioTracks().length&&e.showNotification({message:f.Iu("RequestAcces.Error.HaveNotAccess.Call"),tabId:o})})).catch((()=>{e.showNotification({message:f.Iu("RequestAcces.Error.HaveNotAccess.Call"),tabId:o})}))}(0,i.iw)("toggleGroupCallPanel",((t,e,a)=>{const{force:i,tabId:s=(0,C._w)()}=a||{};return(0,V.i)(t,{isCallPanelVisible:"force"in(a||{})?i:!(0,o.jU)(t,s).isCallPanelVisible},s)})),(0,i.iw)("subscribeToGroupCallUpdates",(async(t,e,a)=>{const{subscribed:o,id:d}=a,n=(0,l.$5)(t,d);n&&(o&&(await R(t,n),t=(0,i.Rd)(),await A(t,n)),await(0,s.t9)("toggleGroupCallStartSubscription",{subscribed:o,call:n}))})),(0,i.iw)("createGroupCall",(async(t,e,a)=>{const{chatId:d,tabId:n=(0,C._w)()}=a,r=(0,o.Z1)(t,d);if(!r)return;const l=await(0,s.t9)("createGroupCall",{peer:r});l&&(t=(0,i.Rd)(),t=(0,c.AH)(t,l.id,{...l,chatId:d}),(0,i.R3)(t),e.requestMasterAndJoinGroupCall({id:l.id,accessHash:l.accessHash,tabId:n}))})),(0,i.iw)("createGroupCallInviteLink",(async(t,e,a)=>{const{tabId:i=(0,C._w)()}=a||{},n=(0,l.mU)(t);if(!n||!n.chatId)return;const r=(0,o.Z1)(t,n.chatId);if(!r)return;const c=Boolean((0,h.WS)(r));let{inviteLink:u}=r.fullInfo;c&&(u=await(0,s.t9)("exportGroupCallInvite",{call:n,canSelfUnmute:!1})),u&&((0,d.TE)(u),e.showNotification({message:"Link copied to clipboard",tabId:i}))})),(0,i.iw)("joinVoiceChatByLink",(async(t,e,a)=>{const{username:s,inviteHash:o,tabId:d=(0,C._w)()}=a,r=await(0,n.Co)(t,s);if(!r)return void e.showNotification({message:f.Iu("NoUsernameFound"),tabId:d});t=(0,i.Rd)();const c=await(0,n.ft)(t,e,r,d);c?.groupCall&&e.requestMasterAndJoinGroupCall({id:c.groupCall.id,accessHash:c.groupCall.accessHash,inviteHash:o,tabId:d})})),(0,i.iw)("requestMasterAndJoinGroupCall",((t,e,a)=>{e.requestMasterAndCallAction({action:"joinGroupCall",payload:a,tabId:a.tabId||(0,C._w)()})})),(0,i.iw)("requestMasterAndAcceptCall",((t,e,a)=>{e.requestMasterAndCallAction({action:"acceptCall",payload:void 0,tabId:a?.tabId||(0,C._w)()})})),(0,i.iw)("joinGroupCall",(async(t,e,a)=>{const{chatId:s,id:o,accessHash:d,inviteHash:n,tabId:r=(0,C._w)()}=a;if(!p.Bi)return;if(t.phoneCall)return void e.toggleGroupCallPanel({tabId:r});!function(){const t=new(window.AudioContext||window.webkitAudioContext);w=new Audio,b=t,w.srcObject=(t=>{const e=t.createOscillator(),a=e.connect(t.createMediaStreamDestination());return e.start(),new MediaStream([Object.assign(a.stream.getAudioTracks()[0],{enabled:!1})])})(t),(0,I.Z)(w)}(),y(),_(t=(0,i.Rd)(),e,!0,r);const{groupCalls:{activeGroupCallId:h}}=t;let u=o?(0,l.$5)(t,o):(0,l.Bj)(t,s);u?.id!==h?h?"leaveGroupCall"in e&&e.leaveGroupCall({rejoin:a,tabId:r}):u&&h===u.id?e.toggleGroupCallPanel({tabId:r}):(u||o&&d||(u=await R(t,{id:o,accessHash:d})),u&&(t=(0,i.Rd)(),t=(0,c.AH)(t,u.id,{...u,inviteHash:n},void 0,u.participantsCount+1),t={...t,groupCalls:{...t.groupCalls,activeGroupCallId:u.id}},(0,i.R3)(t),e.toggleGroupCallPanel({force:!1,tabId:r}))):e.toggleGroupCallPanel({tabId:r})})),(0,i.iw)("playGroupCallSound",((t,e,a)=>{const{sound:i}=a;g[i]&&("connecting"!==i&&g.connecting.pause(),"incoming"!==i&&g.incoming.pause(),"ringing"!==i&&g.ringing.pause(),(0,I.Z)(g[i]))})),(0,i.iw)("loadMoreGroupCallParticipants",(t=>{const e=(0,l.mU)(t);e&&A(t,e,e.nextOffset)})),(0,i.iw)("requestMasterAndRequestCall",((t,e,a)=>{e.requestMasterAndCallAction({action:"requestCall",payload:a,tabId:a.tabId||(0,C._w)()})})),(0,i.iw)("requestCall",(async(t,e,a)=>{const{userId:s,isVideo:d,tabId:n=(0,C._w)()}=a;t.phoneCall?e.toggleGroupCallPanel({tabId:n}):(0,o.dy)(t,s)&&(y(),_(t=(0,i.Rd)(),e,d,n),t=(0,i.Rd)(),t={...t,phoneCall:{id:"",state:"requesting",participantId:s,isVideo:d,adminId:t.currentUserId}},(0,i.R3)(t),e.toggleGroupCallPanel({force:!1,tabId:n}))}))},78958:(t,e,a)=>{a.d(e,{AH:()=>n,B6:()=>l,Ic:()=>c,dc:()=>r});var i=a(42431),s=a(60782),o=a(53475),d=a(11192);function n(t,e,a,i,o){const d=Object.values({...t.groupCalls.byId[e]?.participants,...a.participants}).filter((t=>{let{isLeft:e}=t;return!e})).reduce(((t,e)=>(t[e.id]=e,t)),{});return{...t,groupCalls:{...t.groupCalls,byId:{...t.groupCalls.byId,[e]:{...t.groupCalls.byId[e],...(0,s.CE)(a,["participantsCount"]),...i&&{participantsCount:t.groupCalls.byId[e].participantsCount+i},...void 0!==o&&{participantsCount:o},participants:d}}}}}function r(t,e){const a=(0,i.$5)(t,e);if(a&&a.chatId){const e=(0,d.Z1)(t,a.chatId);e&&(t=(0,o.a4)(t,a.chatId,{fullInfo:{...e.fullInfo,groupCallId:void 0}}))}return{...t,groupCalls:{...t.groupCalls,byId:{...(0,s.CE)(t.groupCalls.byId,[e.toString()])}}}}function c(t,e,a){return t.groupCalls.activeGroupCallId?n(t,t.groupCalls.activeGroupCallId,e,void 0,a):t}function l(t,e,a,s){let o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];const d=(0,i.$5)(t,e);return d?n(t,e,{participants:{...d.participants,[a]:{...d.participants[a],...s}}},s.isLeft?o?0:-1:d.participants[a]||o?0:1):t}}}]);
//# sourceMappingURL=8422.79dd9d2deda45a828e49.js.map