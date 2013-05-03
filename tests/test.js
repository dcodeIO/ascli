var ascli = require("../ascli.js").app("myapp");

ascli.banner("staying straight".green.bold, "v1.0.0 through ascli");
console.log("Hello world!".white.bold);
console.log("...of ascli\n");
console.log("Command line arguments".white.bold);
console.log(ascli.opt, ascli.argv);
ascli.ok("yep, that worked.");
