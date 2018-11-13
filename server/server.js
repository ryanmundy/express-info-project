let express = require('express');

let app = express();
let PORT = 5000;

app.use(express.static('server/public'));

app.listen(PORT, function(){
    console.log(`listening on PORT ${PORT}`);
    
})