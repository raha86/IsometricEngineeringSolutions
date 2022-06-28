const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
// const hostName = '0.0.0.0';
//const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'))
app.use(express.urlencoded())

// PUG SPECIFIC STUFFS
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

// ENDPOINTS
app.get('/', (req, res)=>{
    const params = {}
    res.status(200).render('home.pug', params);
})

app.get('/gallery', (req, res)=>{
    const params = {}
    res.status(200).render('gallery.pug', params);
})

app.get('/about', (req, res)=>{
    const params = {}
    res.status(200).render('about.pug', params);
})

app.get('/services', (req, res)=>{
    const params = {}
    res.status(200).render('services.pug', params);
})

app.get('/contact', (req, res)=>{
    const params = {}
    res.status(200).render('contact.pug', params);
})

// START THE SERVER
//app.listen(port, ()=>{
//    console.log(`The application started successfully on port ${port}`);
//});

 app.listen(process.env.PORT || 3000, function(){
     console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
 });
