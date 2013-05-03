var ascli = require("../ascli.js").app("myapp");

ascli.banner("straiht".green.bold, "through ascli");
console.log("Hello world!".white.bold);
console.log("...of ascli");
ascli.ok("yep, that worked.");
