var express = require('express');
var fs = require('fs');
var xml = require('xml');
var app = express();

app.use(express.static(__dirname + '/www'));

app.post('/', function(req, res){
    let params = req.params;
    res.set('Content-Type', 'text/xml');
    res.send(`
        <?xml version="1.0" encoding="UTF-8"?>
        <response protocol="3.0" server="prod">
            <daystart elapsed_seconds="56508"/>
            <app appid="{E7D762E9-32DE-492F-AB3D-7DC833D82546}" status="ok">
                <updatecheck status="ok">
                    <urls>
                        <url codebase=""/>
                    </urls>
                    <manifest version="1.1.0.0">
                        <packages>
                            <package hash="VXriGUVI0TNqfLlU02vBel4Q3Zo=" name="TestAppInstaller.exe" required="true"/>
                        </packages>
                        <actions>
                            <action event="install" run="TestAppInstaller.exe"/>
                        </actions>
                    </manifest>
                </updatecheck>
                <ping status="ok"/>
            </app>
        </response>
    `);

    console.log('POST /')
  
});

port = 3000;
app.listen(port);
console.log('Listening at http://localhost:' + port)