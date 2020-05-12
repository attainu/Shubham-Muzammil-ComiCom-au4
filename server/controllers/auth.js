import bcrypt from 'bcryptjs'
import Users from '../models/Users'
import jwt from 'jsonwebtoken';
import Admins from '../models/Admins';

export const currentUserInfo = async (req, res) => {
    if (req.user) {
        let { email } = req.user;
        const token = jwt.sign({ email }, "somerandomkey");
        // req.password = undefined
        res.json({
            success: true,
            message: "user has successfully authenticated",
            user: req.user,
            token: token
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
    return res.redirect('http://localhost:3000/')
}

export const registerUser = async (req, res) => {
    try {
        const { body } = req;
        const username = body.username;
        const email = body.email;
        if (body.pass !== body.confirmPass) {
            return res.json({
                success: false,
                message: "Enter Correct Password"
            });
        }
        bcrypt.hash(body.pass, 10, async (error, bcrypt_hashedPassword) => {
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
                let { email } = response;
                const token = jwt.sign({ email }, "somerandomkey")
                return res.json({
                    success: true,
                    message: "user has successfully registered",
                    user: response,
                    token: token
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
                let { email } = userInfo;
                const token = jwt.sign({ email }, "somerandomkey");
                req.session.user = userInfo;
                res.cookies = userInfo
                return res.json({
                    success: true,
                    message: "user has successfully logged-in",
                    user: userInfo,
                    token: token
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

//admin login
export const loginAdmin = async (req, res) => {
    try {
        const { body } = req;
        const email = body.email;
        Admins.findOne({ email: email }, (err, user) => {
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
                if(user.password === body.password) {
                    let adminInfo = user;
                    adminInfo.password = undefined;
                    let { email } = adminInfo;
                    const token = jwt.sign({ email }, "somerandomkey");
                    req.session.user = adminInfo;
                    res.cookies = adminInfo
                    return res.json({
                        success: true,
                        message: "admin has successfully logged-in",
                        admin: adminInfo,
                        token: token
                    })
                }
            });
    } catch {
        return res.json({
            success: false,
            message: "Server error"
        })
    }
}


// router.get("/tokenverify", (req, res) => {
//     const bearer = req.headers["authorization"];
//     if (bearer) {
//         const bearerToken = bearer.split(" ");
//         const token = bearerToken[1];
//         jwt.verify(token, somerandomkey, (err, data) => {
//             if (err) {
//                 res.sendStatus(403);
//             } else {
//                 res.json(data);
//             }
//         });
//     } else {
//         res.sendStatus(403);
//     }
// });