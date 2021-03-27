//https://singa-korean.tistory.com/46 - 참고

const express = require('express');
const app = express();
const api = require('./routes/index');
const api2 = require('./routes/store');
const qs = require('querystring');
const fs = require('fs');


const cors = require('cors');

app.use(cors());
app.use('/api', api);
app.use('/store', api2)

app.post('/store', function(request, response){
    var body = '';
    request.on('data', function(data) {
        body += data;
    });
    request.on('end', function(){
        var post = qs.parse(body);
        var title = post.title;
        var contents = post.contents;
        fs.writeFile('./serverContents', 'title: ' + title + 'contents: ' + contents, 'utf8', function(err) {
            response.writeHead(302, {Location: 'http://localhost:3000/add'});
            response.end();
        })
    })
    
});

const port = 3002;
app.listen(port, ()=>console.log(`Listening on port ${port}`));