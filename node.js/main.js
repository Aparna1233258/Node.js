const userInfo = require("./userInfo");
const formatName = require("./formatName");

const formattedName = formatName(userInfo.userName);

const upperCaseHobby = userInfo.hobby.toUpperCase();

const hobbyLength = userInfo.hobby.length;

console.log("Formatted Name:", formattedName);
console.log("Hobby:", upperCaseHobby);
console.log("Hobby Length:", hobbyLength);