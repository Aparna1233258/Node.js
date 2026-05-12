function formatName(fullName) {
    const names = fullName.split(" ");

    const firstName =
        names[0].charAt(0).toUpperCase() +
        names[0].slice(1);

    const lastName =
        names[1].charAt(0).toUpperCase() +
        names[1].slice(1);

    return firstName + " " + lastName;
}

module.exports = formatName;