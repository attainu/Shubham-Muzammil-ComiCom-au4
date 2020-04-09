import bcrypt from 'bcryptjs'
import Users from '../models/Users'

export const currentUserInfo = async (req, res) => {
    if (req.user) {
        req.password = undefined
        res.json({
            success: true,
            message: "user has successfully authenticated",
            user: req.session.user,
            cookies: req.cookies
        });
    } else {
        res.json({
            success: false,
            message: "user has not been authenticated"
        });
    }
}

export const currentUserLogout = async (req, res) => {
    req.session = null
    req.logout();
    res.redirect('/')
}

export const registerUser = async (req, res) => {
    try {
        const { body } = req;
        const username = body.username;
        const email = body.email;
        if (body.password !== body.confirmPass) {
            res.json({
                success: false,
                message: "Enter Correct Password"
            });
        }
        bcrypt.hash(body.password, 10, async (error, bcrypt_hashedPassword) => {
            await Users.create({
                userName: username,
                email: email,
                password: bcrypt_hashedPassword
            }, (err, response) => {
                if (err) {
                    return res.json({
                        success: false,
                        message: "User Already Exists"
                    })
                }
                return res.json({
                    success: true,
                    message: "user has successfully registered",
                    user: response
                })
            })
        })
    } catch {
        return res.json({
            success: false,
            message: "Server error"
        })
    }
}

export const loginUser = async (req, res) => {
    try {
        const { body } = req;
        const email = body.email;
        Users.findOne({ email: email }, (err, user) => {
            if (err) {
                return res.json({
                    success: false,
                    message: "Server error"
                })
            }
            if (!user) {
                return res.json({
                    success: false,
                    message: "Server error"
                })
            }
            bcrypt.compare(body.password, user.password, (error, data) => {
                if (error) {
                    return res.json({
                        success: false,
                        message: "Server error"
                    })
                }
                let userInfo = user;
                userInfo.password = undefined;
                req.session.user = userInfo;
                res.cookies = userInfo
                return res.json({
                    success: true,
                    message: userInfo
                })
            });
        })
    } catch {
        return res.json({
            success: false,
            message: "Server error"
        })
    }
}