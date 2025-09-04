export default function timer(req, res, next) {
    //console.log(req)
    //console.log(res)
    console.log(`${req.method} request made to '${req.url}'`);
    next();   
}