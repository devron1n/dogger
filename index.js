"use strict";

module.exports = (text, isError = false) => {
  return isError ? console.error(`${new Date()} - ${text}`) : console.log(`${new Date()} - ${text}`);
};