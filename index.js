//  ---------------------------------------------------------------------------------------------------------------
const pkg = require("./package.json");
const args = process.argv.slice(2);
const command = (args.length == 0) ? "help" : args.shift();
const commands = [
// ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
// ●●● define here list of commands names ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
// ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
    "help",
    "version",
// ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
// ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
// ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
];
const categories = [
// ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
// ●●● define here list of commands names ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
// ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
    "general",
// ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
// ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
// ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
];
//  ---------------------------------------------------------------------------------------------------------------
if (commands.indexOf(command)<0) {
    console.log(`🟥 command given “${command}” in not valid`);
    process.exit(1);
}
const cmd = new Map();
//  ---------------------------------------------------------------------------------------------------------------
const runCmd = function() {
    try {
        cmd.get(command)();
        process.exit(0);
    } catch(e) {
        console.log(`🟥 exception on command “${command}” : ${e.message}\n${e.stack}`);
        process.exit(1);
    }
};
// ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
// ●●● define here body for each command defined ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
// ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
//  --------------------------------------------------------------------------------------------------------------- 🔩 help
cmd.set("help",()=>{console.log(`😺 ${pkg.name} (v${pkg.version}) {niosz-shell-tools}
  🪓 usage    : ${pkg.name} <command> [<[<params...>]...>]
  🔧 commands :
        💠 general
            ❔ help             💡 show this screen (like as no parameters)
            ❕ version          💡 return version of ${pkg.name}
`);});
//  --------------------------------------------------------------------------------------------------------------- 🔩 version
cmd.set("version",()=>{console.log(`${pkg.version}`);});
//  ---------------------------------------------------------------------------------------------------------------


// ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
// ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
// ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
runCmd(command);




/*
💡 icons    :
        💠 command type
            🔩 system command
            🦠 user custom command
        💠 color categories
            📕 red
            📙 orange
            📗 green
            📘 blue
        💠 command status
            ✅ active
            ❎ disabled
            🆘 invalid
        💠 comm  
            🔍



cmd.set("help",()=>{
    console.log(`
    🌐 ${pkg.name} (v${pkg.version}) {niosz-shell-tools}
        🟩 USAGE    : ${pkg.name} <COMMAND> ...
        🟩 COMMAND  :
            🟢 help                 🔹 show this screen like as no parameters
            ----------------------------------------------------------------------------------- todo
            🟠 init <name>          🔹 create new tool folder template
            🟠 deploy               🔹 inside a command folder install it
            🟢 list                 🔹 show current list of tools installed
            🔴 push                 🔹 upload to npmjs upgrading version of ${pkg.name}
            🟡 pull                 🔹 download and revert last ${pkg.name} on npmjs
            🔵 merge                🔹 merge current with last ${pkg.name} on npmjs
            🟢 help                 🔹 show this screen like as no parameters
            🟢 version              🔹 show current niosh version
    `);
});


cmd.set("icons",()=>{console.log(`
😺 ${pkg.name} (v${pkg.version}) {niosz-shell-tools}
  🧩 icons legend for commands :
    💠 command type
        🔩 system command           💡 is not modificable
        🦠 user custom command      💡 can be modified
    💠 color categories
        📕 red                      💡 use for sudo admin tools
        📙 orange                   💡 use for low level user tools
        📘 blue                     💡 use for medium level tools
        📗 green                    💡 use for simple tools
    💠 command status
        ✅ active                   
        ❎ disabled
        🆘 invalid
    💠 comm  
        🔍 todo jet this help...
`);});

*/