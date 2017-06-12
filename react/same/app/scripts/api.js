(function() {

	var USER_DB_NAME = "USERS",
		CHANNELS_DB_NAME = "CHANNELS";

	var dataBase = {
		getUsers: function() {
			return JSON.parse(localStorage.getItem(USER_DB_NAME)) || {};
		},
		_setUsers: function(userData) {

			userData = util.type(userData) === "object" ? JSON.stringify(userData) : userData;

			return localStorage.setItem(USER_DB_NAME, userData);
		},
		setUser: function(userId, user) {

			if (util.type(userId) !== "number") {
				throw new Error("invalid userId");
				return false;
			}

			var userData = this.getUsers();
			userData[userId] = user;

			this._setUsers(userData);
		},
		getUserById: function(userId) {

			if (util.type(userId) !== "number") {
				throw new Error("invalid userId");
				return false;
			}

			var res = this.getUsers()[userId];
			if (!res) {
				throw new Error("cannt find user by userId");
				return false;
			}

			return res;
		},
		setUserChannel: function(userId, channelId, channel) {
			console.log(userId, channelId, channel);
			var theUser = this.getUserById(userId);

			if (util.type(channelId) !== "number") {
				throw new Error("invalid channelId");
				return false;
			}

			var channels = theUser.channels;

			if (channels) {
				channels[channelId] = channel;
				channels.length++;

			} else {
				theUser.channels = {
					[channelId]: channel,
					length: 1
				}
			}

			this.setUser(userId, theUser);
		},
		setUserContent: function(userId, contentId, content) {
			var theUser = this.getUserById(userId);

			if (util.type(contentId) !== "number") {
				throw new Error("invalid contentId");
				return false;
			}

			if (theUser.contents) {
				theUser.contents[contentId] = content;
			} else {
				theUser.contents = {
					[contentId]: content
				};
			}

			this.setUser(userId, theUser);
		},
		removeUserChannel: function(userId, channelId) {
			var userData = this.getUserById(userId);

			if (util.type(channelId) !== "number") {
				throw new Error("invalid channelId");
				return false;
			}

			delete userData.channels[channelId];
		},
		removeUserContent: function(userId, contentId) {
			var userData = this.getUserById(userId);

			if (util.type(contentId) !== "number") {
				throw new Error("invalid contentId");
				return false;
			}

			delete userData.contends[contentId];
		},
		getChannels: function() {
			return JSON.parse(localStorage.getItem(CHANNELS_DB_NAME)) || {};
		},
		getChannelById: function(channelId) {

			if (util.type(channelId) !== "number") {
				throw new Error("invalid channelId");
				return false;
			}

			var res = this.getChannels()[channelId];
			if (!res) {
				throw new Error("cannt find channels by channelId");
				return false;
			}

			return res;
		},
		_setChannels: function(channelData) {

			channelData = util.type(channelData) === "object" ? JSON.stringify(channelData) : channelData;

			return localStorage.setItem(CHANNELS_DB_NAME, channelData);
		},
		setChannelChannel: function(channelId, channel) {

			if (util.type(channelId) !== "number") {
				throw new Error("invalid channelId");
				return false;
			}

			var channelData = this.getChannels();

			if (!channelData[channelId]) {
				console.log("222");
				if (util.type(channelData.length) === "number") {
					channelData.length++;
				} else {
					channelData.length = 1;
				}
			}

			channelData[channelId] = channel;

			this._setChannels(channelData);
		},
		setChannelContent: function(channelId, contentId, content) {

			if (util.type(channelId) !== "number") {
				throw new Error("invalid channelId");
				return false;
			}

			if (util.type(contentId) !== "number") {
				throw new Error("invalid contentId");
				return false;
			}

			var channelData = this.getChannels();
			var theChannel = this.getChannelById(channelId);
			if (theChannel) {

				var contentData = theChannel.contents;

				if (contentData) {
					contentData[contentId] = content;
					contentData.length++;

				} else {
					theChannel.contents = {
						[contentId]: content,
						length: 1
					}
				}
			}

			this.setChannelChannel(channelId, theChannel);
		},
		removeChannelContent: function(channelId, contentId) {

			if (util.type(channelId) !== "number") {
				throw new Error("invalid channelId");
				return false;
			}

			if (util.type(contentId) !== "number") {
				throw new Error("invalid contentId");
				return false;
			}

			var channelData = this.getChannelById(channelId);
			if (channelData) {
				delete channelData[contentId];
			}
		},
		setChannel: function(userId, channelId, channel) {
			return !!(this.setUserChannel(userId, channelId, channel) & this.setChannelChannel(channelId, channel));
		},
		setContent: function(userId, channelId, contentId, content) {


			if (util.type(userId) !== "number") {
				throw new Error("invalid userId");
				return false;
			}

			if (util.type(channelId) !== "number") {
				throw new Error("invalid channelId");
				return false;
			}

			if (util.type(contentId) !== "number") {
				throw new Error("invalid contentId");
				return false;
			}

			this.setUserContent(userId, contentId, content);
			this.setChannelContent(channelId, contentId, content);
		}

	};

	var _util = {
		jsonWrapper: function(data, ok) {
			return {
				ok: ok !== undefined ? !!ok : true,
				data: data
			}
		},
		slice: function(obj) {
			var res = [];

			if (util.type(obj) !== "object") {
				throw new Error("invalid obj");
			}

			obj.length++;
			res = Array.prototype.slice.call(obj);
			res.splice(0, 1);

			return res || [];
		}
	}

	var api = {
		setUser: function() {

		},
		createChannel: function(channel) {

			var userName = dataBase.getUserById(userId).userName;
			var createTime = util.date2string(Date.now());

			var channelData = dataBase.getChannels(),
				channelId;

			channelId = util.type(channelData.length) === "number" ? channelData.length + 1 : 1;
			console.log(channelId);
			channel = Object.assign(channel, {
				id: channelId,
				userId: userId,
				userName: userName,
				createTime: createTime,
			});

			return _util.jsonWrapper(dataBase.setChannel(userId, channelId, channel));
		},
		getChannelList: function() {
			var theUser = dataBase.getUserById(userId),
				channels = theUser.channels || {};

			return _util.jsonWrapper(_util.slice(channels));
		},
		getChannelInfo: function(channelId) {
			if (util.type(channelId) !== "number") {
				return _util.jsonWrapper("invalid channelId", false);
			}

			var theChannel = dataBase.getChannelById(channelId);

			theChannel.contents = _util.slice(theChannel.contents || {});

			return _util.jsonWrapper(theChannel);
		},
		getChannelContents: function(channelId) {

			if (util.type(channelId) !== "number") {
				return _util.jsonWrapper("invalid channelId", false);
			}

			var theChannel = dataBase.getChannelById(channelId),
				contents = theChannel.contents || {};

			return _util.jsonWrapper(_util.slice(contents));
		},
		createContent: function(channelId, content) {

			if (util.type(channelId) !== "number") {
				return _util.jsonWrapper("invalid channelId", false);
			}

			var theChannel = dataBase.getChannelById(channelId);

			var userName = dataBase.getUserById(userId).userName,
				channelName = dataBase.getChannelById(channelId).channelName,
				createTime = util.date2string(Date.now());

			contentId = theChannel.contents && util.type(theChannel.contents.length) === "number" ? theChannel.contents.length + 1 : 1;

			content = Object.assign(content, {
				id: contentId,
				channelId: channelId,
				channelName: channelName,
				userId: userId,
				userName: userName,
				createTime: createTime,
				likedNum: 0,
			});

			dataBase.setContent(userId, channelId, contentId, content);

			return _util.jsonWrapper(content);
		},
	};

	window.api = api;
	window.userId = 1;

})();