/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
module.exports = function(controller) {

    // use a function to match a condition in the message
    controller.hears(async (message) => message.text && message.text.toLowerCase() === 'hello', ['message'], async (bot, message) => {
        await bot.reply(message, "Hi, I'm Miss Pibbles!");
    });

    controller.hears(async (message) => message.text && message.text.toLowerCase() === 'weather', ['message'], async (bot, message) => {
        await bot.reply(message, "Hi, I'm Miss Pibbles!");
    });

    // use a regular expression to match the text of the message
    controller.hears(new RegExp(/^weather/), ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{ text: 'The weather on Mars is fantastic!' });
    });

}