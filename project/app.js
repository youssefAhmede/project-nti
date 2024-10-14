// const express = require('express')
// const app = express()
// const port = 3000

// const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://youssef:youssef8444@cluster0.rq1nn.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0')
// .then(() => {
//     app.listen(port, () => {
//     console.log(`http://localhost:${port}/`)
//   })})
// .catch((err) => { console.log(err) });

// app.use(express.urlencoded({extended:true}))
// app.use(express.static('public'))
// const Mydata = require('./models/mydataSchema')




// app.get('/', (req, res) => {
//   res.sendFile('./views/home.html',{root: __dirname})
// });
// app.get('/index.html', (req, res) => {
//   res.send('<h1>done!</h1>');
// });

// app.post('/', (req, res) => {
//     // console.log(req.body);
//     const article = new Mydata(req.body);
//     article.save().then(() => { 
//       res.redirect("/index.html");
//       // res.sendFile('./views/index.html',{root: __dirname})
//     }).catch((err) => { console.log(err) });
// });
// //////////////////////////////////send project card to DB
// const Project = require('./models/projectSchema')
// app.get('/dashboard', (req, res) => {
//   res.sendFile('./views/dashboard.html',{root: __dirname})
// });
// app.get('/ddd.html', (req, res) => {
//   res.send('<h1>Ok OK!</h1>');
// });
// app.post('/dashboardjjj.html', (req, res) => { 
//     // console.log(req.body);
//     const article = new Project(req.body);
//     article.save().then(() => { 
//       // res.redirect("/ddd.html");
//       res.redirect("/dashboard");//يرجع الصفحة تاني
//     console.log(req.body);
//     }).catch((err) => { console.log(err) });
// });
// //////////////////////////////////read data project card from DB

// //////////////////////////////////
// //  //  //  //  // live server
// const path = require("path");
// const livereload = require("livereload");
// const liveReloadServer = livereload.createServer();
// liveReloadServer.watch(path.join(__dirname, 'public'));
 
 
// const connectLivereload = require("connect-livereload");
// app.use(connectLivereload());
 
// liveReloadServer.server.once("connection", () => {
//   setTimeout(() => {
//     liveReloadServer.refresh("/");
//   }, 100);
// });



// // npm run watch
// // https://www.youtube.com/watch?v=9LseL3exbcA

const express = require("express")
const mongoose = require("mongoose")
var routers = require('./routes/routes');
const bodyParser = require("body-parser")
const app = express()
const cors = require('cors');
const port = 5000;
const mongodatabaseURL ="mongodb+srv://youssef:youssef8444@cluster0.rq1nn.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongodatabaseURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const connection = mongoose.connection
app.listen(port,()=>{
    console.log("Server is running port" +port);
})
connection.once("open",()=>{
    console.log("MongoDb Connected!!!......")
});
app.use(cors());
app.use(bodyParser.json());
app.use(routers);