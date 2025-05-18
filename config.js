const { ActivityType } = require('discord.js');

module.exports = {
  ownerId: '1297902549151780944',
  status: {
    rotateDefault: [
      { name: 'Netflix', type: ActivityType.Watching },
      { name: 'GTA VI', type: ActivityType.Playing },
      { name: 'on YouTube', type: ActivityType.Streaming, url: 'https://www.twitch.tv/glaceytt' },
      { name: 'Spotify', type: ActivityType.Listening },
    ],
    songStatus: true
  },
  spotifyClientId: "731ac5bf0603411f80ac446f5c02e290",
  spotifyClientSecret: "cd16a34c385b4fa5915abd596fd4e480",
}
