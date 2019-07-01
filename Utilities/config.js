let environment = "dev";

let serverURLs = {
    "dev": {
        "NODE_SERVER_HOST": "http://localhost",
        "NODE_SERVER_PORT": "3000",

        "MYSQL_HOST": 'localhost',
        "MYSQL_PORT": ':3306',
        "MYSQL_USER": 'root',
        "MYSQL_PASSWORD": 'P@ssw0rd040618',
        'MYSQL_DATABASE': 'demo_angular7_crud',
    }
}

let config = {
    "DB_URL_MYSQL": {
        "host": `${serverURLs[environment].MYSQL_HOST}`,
        "user": `${serverURLs[environment].MYSQL_USER}`,
        "password": `${serverURLs[environment].MYSQL_PASSWORD}`,
        "database": `${serverURLs[environment].MYSQL_DATABASE}`
    },
    "NODE_SERVER_PORT": {
        "port": `${serverURLs[environment].NODE_SERVER_PORT}`
    },
    "NODE_SERVER_HOST": {
        "url": `${serverURLs[environment].NODE_SERVER_HOST}`
    }
};

module.exports = {
    config: config
};
