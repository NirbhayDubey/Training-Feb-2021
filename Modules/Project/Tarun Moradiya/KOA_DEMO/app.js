const path = require('path');
const Koa = require('koa');
const KoaRouter = require('koa-router');
const json = require('koa-json');
const render = require('koa-ejs');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new KoaRouter();

//data 
const things = ['Family', 'Programing', 'sports']

// json prittier middleware
app.use(json());

// body parser middleware
app.use(bodyParser());

// add additional properties to context
app.context.user = 'Tarun';

// simple middleware example
// app.use(async ctx => (ctx.body = 'Hello World'));
// app.use(async ctx => (ctx.body = { msg: 'Hello World' }));


render(app, {
    root: path.join(__dirname, 'views'),
    layout: 'layout',
    viewExt: 'html',
    cache: false,
    debug: false
});

//routes

//index
router.get('/', index);
router.get('/add', showAdd);
router.post('/add', add);

// list of things 
async function index(ctx) {
    await ctx.render('index', {
        title: 'Things I Love:',
        things: things
    });
}

// show add page
async function showAdd(ctx) {
    await ctx.render('add');
}

// add thing
async function add(ctx) {
    const body = ctx.request.body;
    things.push(body.thing);
    ctx.redirect('/');
}


router.get('/test', ctx => (ctx.body = { msg: `Hello ${ctx.user}` }));
router.get('/test/:name', ctx => (ctx.body = { msg: `Hello ${ctx.params.name}` }));

// router middleware
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => console.log('Server Started...'));


