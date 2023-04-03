#!/usr/bin/env node
const fs = require("fs-extra");
if (fs.existsSync("node_modules")) fs.rmdirSync("node_modules",{recursive:true,force:true});
if (fs.existsSync("package-lock.json")) fs.rmSync("package-lock.json");