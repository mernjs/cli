import session      from 'express-session';
import flash        from 'connect-flash'
import cookieParser from 'cookie-parser'
import bodyParser 	from 'body-parser'
import express 		from 'express'
import logger 		from 'morgan'
import cors 		from 'cors'
require('./src/helpers')

const app 	= express();

app.use(cors())
app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))
app.use(session({secret: 'vijay',saveUninitialized: true,resave: true}));
app.use(cookieParser())
app.use(flash());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));
app.use(express.static(path.join(__dirname, './public')));

fs.readdirSync(path.join(__dirname, `./src/routes`)).forEach(function(file) {
    if (file.match(/\.js$/) !== null && file !== 'index.js') {
        let name = file.replace('.js', '');
        app.use(require(`./src/routes/${name}`));
    }
});

app.use(logger('dev'));
app.use(send404)

let server = app.listen(process.env.APP_PORT ? process.env.APP_PORT : 8080, () => {
    figlet('MernJs', function(err, data) {
        if (err) return console.log("error...", err);
        console.log(" ");
        console.log(chalk.white.bold(data));
        console.log(`  ${chalk.white.bold('Server is running on port '+ server.address().port)}`)
        console.log(" ");
    });
}).on('error', (error) => {
    console.log(" ");
    console.log(chalk.red.bold('Port '+error.port+' is already in use'))
    console.log(" ");
})