// you can write js here

console.log('exo-4');

let secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];
secretMessage.pop();
secretMessage.push("to", "program");
secretMessage["easily"] = "right";
secretMessage.shift();
secretMessage.unshift("Programming");
secretMessage.splice(5,10-5, "know");
secretMessage.join();


console.log(secretMessage.join(" "));