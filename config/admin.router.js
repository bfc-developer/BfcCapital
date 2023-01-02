const AdminBro = require('admin-bro');
const {buildAuthenticatedRouter} = require('admin-bro-expressjs');
const User = require('../model/User');

const buildAdminRouter = (admin) => {
    const router = buildAuthenticatedRouter(admin,{
        cookieName:"admin-bro",
        cookiePassword:"superlongrandompass",
        authenticate: async (email,password) => {
            let user = await User.findOne({email});

            if(user &&  password == user.password ){
                return user
            } 
            return null;
        }
    },
     null, {
        resave:false,
        saveUninitialized: true
    }
    )
    return router; 
}

module.exports = buildAdminRouter;