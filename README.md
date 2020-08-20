# Discord MusicBot with Node.js



Repositório responsável pelo BOT desenvolvido para fins de estudo em JavaScript usando o **[Discord.js](https://discord.js.org/#/)** e **[Node.js](https://nodejs.org/en/)**

##  Needed Resources

* **[Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=vuechatapp_swa-github-gllemos)**
* **[Node.Js](https://nodejs.org/en/)**
* **[Discord.js](https://discord.js.org/#/)**
* **[ffmpeg](https://ffmpeg.org)**
* **[ytdl](https://www.npmjs.com/package/ytdl-core)**


###  How to start 

Before we begin you will need an Bot Aplication at the **[Discord Developer Portal](https://discord.com/developers/applications)** and you will need to add it to your Discord Server. **[Here's](https://www.youtube.com/watch?v=b61kcgfOm_4)** a YouTube tutorial on how to do it all. **Don't Forget to give the `Necessary Permissions`**.  After that the bot should be on your server and offline.


### Preparing the Bot

To prepare the Bot you will need to look at the config.json file. You can config the **prefix** with your own favorite prefix. 
And the most important thing is the **token**. Without it the Bot will not work. you can get your prefix at the **[Discord Developer Portal](https://discord.com/developers/applications)** in your application and at the section **Bot**

### ❗️ installing dependencies on Windows: 

You will need to install the ffmpeg. You can find the .exe file at their website **[Here](https://ffmpeg.org)**.


Open the cmd(or the Visual Studio Code) and type the path of your project

```
cd "C:\Users\YourComputer\Documents\..."
```

Then you just type:

```
npm install
```

It will automatically install all the dependencies listed on the package.json file:

* `node_modules` - Where we have all the packages from npm that we will need.

### Puting the Bot Online

At the same screen you just need to initiate the application and the BOT will be online at your server.

```
> node .
```

### Executing the application

Now we just have to use the command to play Music using an YouTube link

```
> YourPrefixHere + YouTubeLink
```
Example: 

```
> !BEAR https://www.youtube.com/watch?v=1V_xRb0x9aw
```