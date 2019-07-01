let app = require('express')(),
    server = require('http').Server(app),
    bodyParser = require('body-parser')
const port = 3000;
//
let express = require('express'),
    cors = require('cors'),
    http = require('http'),
    path = require('path');

let articleRoute = require('./Routes/articleRoute'),
    util = require('./Utilities/util');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.use(function (err, req, res, next) {

    return res.send(
        {
            "statusCode": util.statusCode.ONE,
            "statusMessage": util.statusMessage.SOMETHING_WENT_WRONG
        });
});


// console.log(http.message);
// console.log(request.headers);

app.use('/article', articleRoute); // app.use('/article', articleRoute);
//app.use('', articleRoute);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next();
});

/*first API to check if server is running*/
/*app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/angular7-crud/index.html'));
})*/


// app.get('/', (req, res) => {
//     res.json({
//         send: `Hello from Express on http://localhost:${port}!`,
//         myChance: req.myChance
//     });
// });

// adr = http.createServer((req, res) => {
//     console.log(req.url);
// });

// console.log(adr._events.request());
// serverr = http.createServer((req, res) => {
//     // Вывод URL к которому было произведено обращение
//     console.log(req.url);

//     // Отдача ответа.
//     //res.write('output');
//     //res.end();
// });
// serverr.listen(8000)

server.listen(port, function (err) {
    if (err) {
        return console.log('something bad happened', err);
    }
    console.log(`server is listening on ${port}`);
});



// app.listen(port, (err) => {
//     if (err) {
//         return console.log('something bad happened', err);
//     }
//     console.log(`server is listening on ${port}`);
// });
