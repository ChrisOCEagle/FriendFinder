// Require the dependencies for the server
const express = require('express'),
      path = require('path'),
      app = express(),
      PORT = process.env.PORT || 3000;

// Set up the express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Routes
// ============================================================
// HTML Route
require("./app/routing/htmlRoutes.js")(app, path);
// API Route
require("./app/routing/apiRoutes.js")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => console.log("App listening on http://localhost:" + PORT) );