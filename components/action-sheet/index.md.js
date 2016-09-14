webpackJsonp([95],{663:function(e,i,t){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var n=t(1),c=(o(n),t(7));o(c);e.exports={content:["section",["h3","\u5b9a\u4e49\uff0fDefinition"],["p","\u64cd\u4f5c\u5217\u8868\u5c55\u793a\u4e86\u4e0e\u7528\u6237\u89e6\u53d1\u7684\u64cd\u4f5c\u76f4\u63a5\u76f8\u5173\u7684\u4e00\u7cfb\u5217\u9009\u9879\u3002\u7531\u7528\u6237\u67d0\u4e2a\u64cd\u4f5c\u884c\u4e3a\u89e6\u53d1\u3002"],["h3","\u89c4\u5219 / Rule"],["ul",["li",["p","\u4e0e ",["a",{title:null,href:"https://facebook.github.io/react-native/docs/actionsheetios.html"},"react-native actionsheetios"]," API \u4ee5\u53ca ui \u5c55\u793a\u5c3d\u91cf\u4e00\u81f4"]],["li",["p","ui \u5c55\u793a\u6bd4\u8f83\u56fa\u5b9a\uff0c\u4e0d\u63a8\u8350\u4f7f\u7528\u81ea\u5b9a\u4e49\u5143\u7d20\u3001\u4ee5\u514d\u7834\u574f\u6574\u4f53\u98ce\u683c\u3002"]],["li",["p","\u5206\u4eab\u529f\u80fd\u7684 ActionSheet \uff0c\u5f53\u5206\u4eab\u6e20\u9053\u8fc7\u591a\uff0c\u53ef\u6a2a\u5411\u6eda\u52a8\u67e5\u770b\u66f4\u591a\u3002"]]]],meta:{category:"UI Views",type:"UI Views",chinese:"\u52a8\u4f5c\u9762\u677f",english:"ActionSheet",filename:"components/action-sheet/index.md"},toc:["ul",["li",["a",{href:"#API"},"API"]]],api:["section",["h2","API"],["h4","static showActionSheetWithOptions(options: Object, callback: Function)"],["p",["code","options"],"\u5bf9\u8c61\u5fc5\u987b\u5305\u542b\u4ee5\u4e0b\u7684\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\uff1a"],["ul",["li",["p","options (array of strings) - \u6309\u94ae\u6807\u9898\u5217\u8868 (required)"]],["li",["p","cancelButtonIndex (int) - \u6309\u94ae\u5217\u8868\u4e2d\u53d6\u6d88\u6309\u94ae\u7684\u7d22\u5f15\u4f4d\u7f6e"]],["li",["p","destructiveButtonIndex (int) - \u6309\u94ae\u5217\u8868\u4e2d\u7834\u574f\u6027\u6309\u94ae\uff08\u4e00\u822c\u4e3a\u5220\u9664\uff09\u7684\u7d22\u5f15\u4f4d\u7f6e"]],["li",["p","title (string) - \u9876\u90e8\u6807\u9898"]],["li",["p","message (string/React.element) - \u9876\u90e8\u6807\u9898\u4e0b\u7684\u7b80\u8981\u6d88\u606f"]],["li",["p","maskClosable (bool) - \u70b9\u51fb\u8499\u5c42\u662f\u5426\u5141\u8bb8\u5173\u95ed\uff0c\u9ed8\u8ba4\u5141\u8bb8"]],["li",["p","androidActionSheetName (string) - android \u5e73\u53f0\u4e0b\u53ef\u4ee5\u4f20\u5165\u4e00\u4e2a\u540d\u5b57"]]],["p",["code","callback"],"\u652f\u6301\u8fd4\u56de Promise"],["h4","static showShareActionSheetWithOptions(options: Object, callback: Function)"],["p",["code","options"],"\u5bf9\u8c61\u5fc5\u987b\u5305\u542b\u4ee5\u4e0b\u7684\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\uff1a"],["ul",["li",["p","options (array of ",["code","{icon:React.node, iconName:string, title:string}"],") - \u5206\u4eab\u6309\u94ae\u5217\u8868 (required)"],["ul",["li",["p","\u6ce8\u610f\uff1a",["code","iconName"],"\u4e3a icon \u7ec4\u4ef6\u91cc\u7684\u67d0\u4e00\u4e2a icon \u7684\u540d\u5b57\uff0c\u4f18\u5148\u7ea7\u9ad8\u4e8e",["code","icon"],"\u5c5e\u6027\u8bbe\u7f6e\uff08",["code","icon"],"\u5c5e\u6027\u7528\u4e8e\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u5185\u5bb9\uff09"]],["li",["p","options \u53ef\u4ee5\u662f\u4e8c\u7ef4\u6570\u7ec4\uff0c\u80fd\u663e\u793a\u591a\u884c\u6309\u94ae\uff0c\u4f8b\u5982",["code","[[{icon,title},{icon,title}], [{icon,title},{icon,title}]]"],"\u8868\u793a\u4e24\u884c\u4e24\u5217"]],["li",["p","\u5f53\u4e3a\u4e8c\u7ef4\u6570\u7ec4\u65f6 callback \u6709\u4e24\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u4e3a",["code","\u5217"],"\u5e8f\u5217\u3001\u7b2c\u4e8c\u4e2a\u4e3a",["code","\u884c"],"\u5e8f\u5217"]]]],["li",["p","cancelButtonText (string) - (web only) \u9ed8\u8ba4\u4e3a",["code","\u53d6\u6d88"]]],["li",["p","title (string) - \u9876\u90e8\u6807\u9898"]],["li",["p","message (string/React.element) - \u9876\u90e8\u6807\u9898\u4e0b\u7684\u7b80\u8981\u6d88\u606f"]],["li",["p","maskClosable (bool) - \u70b9\u51fb\u8499\u5c42\u662f\u5426\u5141\u8bb8\u5173\u95ed\uff0c\u9ed8\u8ba4\u5141\u8bb8"]],["li",["p","androidActionSheetName (string) - android \u5e73\u53f0\u4e0b\u53ef\u4ee5\u4f20\u5165\u4e00\u4e2a\u540d\u5b57"]]],["p",["code","callback"],"\u652f\u6301\u8fd4\u56de Promise"],["h4","static close() - (web only) programmatically close."],["h4","static close(androidActionSheetName) - (android only) programmatically close."]]}}});