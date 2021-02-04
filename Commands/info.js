const { RichEmbed } = require("discord.js"); 

module.exports = class info {
    constructor() {
        this.name = "info",
        this.alias = [],
        this.usage = "k!info"
    }

    async run(client, message, args) {
        try{
         let infoEmbed = new RichEmbed()
         .setTitle("**yoo6**")
         .setDescription("Serveriniz İçin Bir Botu")
         .addField("Prefix", "k!", true)
         .addField("server", client.guilds.size, true)
         .addField("kullanıcı:", client.users.size, true)
         .setFooter("Owned by ~ BilalPasa")
            message.channel.send(infoEmbed)
        }catch(e) {
            throw e;
        }
    }
}