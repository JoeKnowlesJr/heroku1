const users = require('./user.service');

function authenticate(req, res, next) {
    if (!module.parent) console.log('authenticating %s:%s', req.body.email, req.body.password);
    users.getUserByEmail(req, res, next);
    if (!req.userDocument) return next(new Error('cannot find user'));
    const pw = req.body.password;
    // bCrypt.({ data: pw, hash: req.userDocument.password }).th
    bcrypt.compare(pw, req.userDocument.password, (err, match) => {
        if(match) {
            // passwords match
            callback(null, true);
        } else {
            // passwords do not match
            callback('Invalid password match', null);
        }
    });



    //     if (err) return fn(err);
    //     if (hash === user.hash) return fn(null, user);
    //     fn(new Error('invalid password'));
    // });
}

function restrict(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        req.session.error = 'Access denied!';
        res.redirect('/login');
    }
}

module.exports = { authenticate, restrict };
