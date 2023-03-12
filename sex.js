const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('sex')
    .setDescription('Flor anneni yalıyor'),
    async execute(interaction, client) {
        await interaction.reply({ content: 'Pepe' });
    }
}
