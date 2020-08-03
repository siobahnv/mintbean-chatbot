/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

var request = require('request');

module.exports = function(controller) {

    // use a function to match a condition in the message
    controller.hears(async (message) => message.text && message.text.toLowerCase() === 'hello', ['message'], async (bot, message) => {
        await bot.reply(message, "Hi, I'm Miss Pibbles!");
    });

    // use a regular expression to match the text of the message
    const my_regex = /\bweather|\bmars|\bMars/g;
    controller.hears(new RegExp(my_regex), ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{ text: 'The weather on Mars is fantastic!' });

        nasa_api_url = 'https://api.nasa.gov/insight_weather/?api_key=' + process.env.NASA_API_KEY + '&feedtype=json&ver=1.0'
        let response = await fetch(nasa_api_url);
        let data = await response.json();
        var firstKeyEntries = Object.entries(data)[0];
        await bot.reply(message, 'The season is ' + firstKeyEntries[1].Season)
        await bot.reply(message, 'The average temperature is ' + firstKeyEntries[1].AT.av + ' °F');

    });

}