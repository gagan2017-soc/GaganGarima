let environment = "dev";

let serverURLs = {
    "dev": {
        "NODE_SERVER": "http://localhost",
        "NODE_SERVER_PORT": process.env.PORT,
        "MONGO_DB": "mongodb+srv://gagan20:gagan20@cluster0-wnbgs.mongodb.net/gagan2020?retryWrites=true&w=majority"
    },
    "production": {
        "NODE_SERVER": "http://11.11.11.11",
        "NODE_SERVER_PORT": process.env.PORT,
        "MONGO_DB": "mongodb+srv://gagan20:gagan20@cluster0-wnbgs.mongodb.net/gagan2020?retryWrites=true&w=majority"
    }
}

let config = {
    "DB_URL": {
        "url": `${serverURLs[environment].MONGO_DB}`
    },
    "NODE_SERVER_PORT": {
        "port": `${serverURLs[environment].NODE_SERVER_PORT}`
    },
    "NODE_SERVER_URL": {
        "url": `${serverURLs[environment].NODE_SERVER}`
    }
};

module.exports = {
    config: config
};
