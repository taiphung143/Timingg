var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// File cần để chạy bot
// Nhập token của bot vào file auth.json
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Đăng nhập vào bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Đăng Nhập Vào Bot Thành Công');
    logger.info('Đang Đăng Nhập Tại: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Bắt đầu chỉnh sửa từ phần này :)
    if (message.substring(0, 1) == '~') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
    // Bot sẽ nghe hết tất cả những tin nhắn bắt đầu bằng `~`
    // Lệnh bắt đầu từ phần dưới
       
        args = args.splice(1);
        switch(cmd) {
            // ~ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
            //~everyone
             case 'everyone':
                bot.sendMessage({
                    to: channelID,
                    message: '@eveyone'
                });
            break;
            case 'dem10s':
                bot.sendMessage({
                    to: channelID,
                    message:'Bắt Đầu Đếm 10s'
                });
            setTimeout(() => {
                
            }, 10000);
                bot.sendMessage({
                    to: channelID,
                    message:'Hết Thời Gian'
                })
         }
     }
});
