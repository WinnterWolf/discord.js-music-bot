const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');
const ytdl = require('ytdl-core');
const streamOptions = {seek: 0, volume: 0.3};
git 
bot.login(config.token);

bot.on('ready', ()=> {
    console.log('bora toca');
    bot.user.setActivity('DJ');
})


bot.on('message', msg => {
    if(msg.content.indexOf("youtube") !== -1 && msg.content.toUpperCase().startsWith(config.prefix)){
        let CompleteMessage = msg.content.split(' ');
        
        
        let youtubeLink = CompleteMessage[1];
         
        let VoiceChannel = msg.member.voice.channel;
        if (VoiceChannel == null){
            console.log('o canal nao foi encontrado');
        }
        if (VoiceChannel !== null){
            console.log('o canal foi encontrado');

            VoiceChannel.join()
            .then(connection =>{
                const stream = ytdl(youtubeLink, {filter: 'audioonly'});

                const DJ = connection.play(stream, streamOptions);
                DJ.on('finish', end => {
                    msg.member.voice.channel.leave();
                })
            })            
        }
    }
})