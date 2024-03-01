const express = require('express');
const serverless = require('serverless-http');
const serverInstance = require("./server").default;
const app = express();

const configuredApp = serverInstance.initializeApp();

// Use the configured app in your middleware
app.use('/.netlify/functions/api', configuredApp);

// Export the serverless handler
module.exports.handler = serverless(app);