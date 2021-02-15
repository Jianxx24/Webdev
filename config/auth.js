module.exports = {
    ensureAuthenticated : function(req,res,next) {
    if(req.isAuthenticated()) {
    return next();
    }
    req.flash('error_msg' , 'Należy się wpierw zalogować');
    res.redirect('/users/login');
    },
    ensureNotAuthenticated : function(req,res,next) {
        if(!req.isAuthenticated()) {
        return next();
        }
        req.flash('error_msg' , 'Należy się wpierw zalogować');
        res.redirect('/users/login');
        }
    }