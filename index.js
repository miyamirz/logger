const logger = (msg) => {
    if (typeof msg !== "undefined")
        console.log(`%c ${msg}`, 'background: green; color: white; display: block;');
    return;
}

const groupLogger = (options) => {
    let { groupName, logs } = options || {};
    if (typeof logs === "undefined") {
        console.warn("logs is not present in options object.groupLogger accepts an options object as parameter.")
        return;
    }
    else if (!Array.isArray(logs)) {
        console.error('type of logs should be an object');
        return;
    }
    console.group(groupName);
    logs.forEach(log => console.log(log));
    console.groupEnd();
    return;
}

module.exports = { logger, groupLogger };
