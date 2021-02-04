module.exports = class leave {
    constructor() {
        this.name = "ayrıl",
        this.alias = [],
        this.usage = "k!ayrıl"
    }

    async run(client, message, args) {
        try{
            message.channel.send("bye ;(")
            message.guild.leave();
        }catch(e) {
            throw e;
        }
    }
}