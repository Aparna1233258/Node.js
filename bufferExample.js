const messageBuffer = Buffer.from("NodeJS is fast");

const nodeBuffer = messageBuffer.slice(0, 6);

console.log("Sliced Buffer:", nodeBuffer.toString());

const powerfulBuffer = Buffer.from("Powerful");

const result = nodeBuffer.compare(powerfulBuffer);

if (result < 0) {
    console.log("NodeJS comes first alphabetically");
}

else if (result > 0) {
    console.log("Powerful comes first alphabetically");
}

else {
    console.log("Both buffers are equal");
}

const jsonData = nodeBuffer.toJSON();

console.log("JSON Output:", jsonData);