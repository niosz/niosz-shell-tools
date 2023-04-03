#!/usr/bin/env node
const fs = require("fs-extra");
const shelljs = require("shelljs");
if (fs.existsSync("node_modules")) fs.rmdirSync("node_modules",{recursive:true,force:true});
if (fs.existsSync("package-lock.json")) fs.rmSync("package-lock.json");
if (fs.existsSync("package.json")) {
    var json = JSON.parse(fs.readFileSync("package.json","utf8"));
    var dependencies = [];
    var devDependencies = [];
    if (json.dependencies) {
        dependencies.push(...json.dependencies);
        delete json.dependencies;
    }
    if (json.devDependencies) {
        devDependencies.push(...json.devDependencies);
        delete json.devDependencies;
    }
    fs.writeFileSync("package.json",JSON.stringify(json,null,2),"utf8");
    var script = ["#!/bin/bash"];
    while (dependencies.length>0) 
        script.push(`npm install ${dependencies.shift()}`);
    while (devDependencies.length>0) 
        script.push(`npm install --save-dev ${devDependencies.shift()}`);
    script.push(`npm install`);
    fs.writeFileSync("npm-build-script.sh",script.join("\n")+"\n","utf8");
    shelljs.exec("chmod +x npm-build-script.sh && ./npm-build-script.sh && rm npm-build-script.sh");
}