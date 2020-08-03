/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
module.exports = function(controller) {

    // use a function to match a condition in the message
    controller.hears(async (message) => message.text && message.text.toLowerCase() === 'hello', ['message'], async (bot, message) => {
        await bot.reply(message, "Hi, I'm Miss Pibbles!");
    });

}