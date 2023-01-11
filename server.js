const express=require('express');

const routes=require('./routes/route');

const app=express();

// app.use('/test',routes)

app.use('/',routes)

app.listen(3000,() => {
    console.log('listening on port 3000')
})


