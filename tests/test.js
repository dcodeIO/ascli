var ascli = require("../ascli.js").app("ascli");

ascli.banner("straight".green.bold, "through ascli");
console.log("Hello world!".white.bold);
console.log("...of ascli");
ascli.ok("yep, that worked.");
