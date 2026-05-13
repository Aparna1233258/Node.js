const managerInfo = require("./managerInfo");
const capitalizeName = require("./capitalizeName");

const formattedName = capitalizeName(managerInfo.managerName);

const upperRole = managerInfo.managerRole.toUpperCase();

const roleLength = managerInfo.managerRole.length;

const searchResult = managerInfo.managerRole.search("inventory");

console.log("Manager Name:", formattedName);
console.log("Manager Role:", upperRole);
console.log("Role Length:", roleLength);
console.log("Search Result for 'inventory':", searchResult);