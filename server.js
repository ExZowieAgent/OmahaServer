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
                        <url codebase="http://cache.pack.google.com/edgedl/chrome/install/782.112/"/>
                    </urls>
                    <manifest version="13.0.782.112">
                        <packages>
                            <package hash="VXriGUVI0TNqfLlU02vBel4Q3Zo=" name="chrome_installer.exe" required="true" size="23963192"/>
                        </packages>
                        <actions>
                            <action arguments="--do-not-launch-chrome" event="install" run="chrome_installer.exe"/>
                            <action version="13.0.782.112" event="postinstall" onsuccess="exitsilentlyonlaunchcmd"/>
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