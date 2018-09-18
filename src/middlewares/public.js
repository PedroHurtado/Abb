const express = require('express');
const path = require('path');
const PUBLIC_DIR = path.resolve(__dirname, '..', '..', 'public');

const public = (app) => {
  app.use(express.static(PUBLIC_DIR));
};

module.exports = public;
