
const error_handler = (err, req, res, next) => {
    if(err){
        console.log(err)
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        // render the error page
        res.status(err.status || 500).json(res.locals.message);
        res.send('error');
    } else {
        next();
    }
};

module.exports = error_handler;