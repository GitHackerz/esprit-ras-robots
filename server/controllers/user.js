import userModel from '../models/user.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {transporter} from "../utils/index.js";


const userController = {
    async getUsers(req, res) {
        const users = await userModel.find({});
        res.json(users);
    },
    async getUser(req, res) {
        const {id} = req.params;
        try {
            if (!id) {
                return res.status(400).json({
                    'error': 'Missing user id'
                });
            }
            const user = await userModel.findById(id);
            if (!user) {
                return res.status(404).json({
                    'error': 'User not found'
                });
            }
            res.json(user);
        } catch (error) {
            console.error(error);
            res.status(500).json({
                'error': error.message
            });
        }
    },
    async createUser(req, res) {
        const userBody = req.body;
        try {
            const password = bcryptjs.hashSync(userBody.password, 10);
            const user = await userModel.create({
                ...userBody,
                password
            });
            res.json({
                'message': 'User created successfully',
                user
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                'error': error.message
            });
        }
    },
    async updateUser(req, res) {
        const {id} = req.params;
        const userBody = req.body;
        try {
            console.log(userBody);
            if (!id) {
                return res.status(400).json({
                    'error': 'Missing user id'
                });
            }
            const user = await userModel.findById(id);
            if (!user) {
                return res.status(404).json({
                    'error': 'User not found'
                });
            }
            const updatedUser = await userModel.findByIdAndUpdate(id, {...userBody}, {new: true});
            res.json({
                'message': 'User updated successfully',
                updatedUser
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                'error': error.message
            });
        }
    },
    async deleteUser(req, res) {
        const {id} = req.params;
        try {
            if (!id) {
                return res.status(400).json({
                    'error': 'Missing user id'
                });
            }
            const deletedUser = await userModel.findById(id);
            if (!deletedUser) {
                return res.status(404).json({
                    'error': 'User not found'
                });
            }
            if (deletedUser.isAdmin) {
                return res.status(403).json({
                    'error': 'Cannot delete admin user'
                });
            }
            await deletedUser.deleteOne();
            res.json({
                'message': 'User deleted successfully',
                deletedUser
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                'error': error.message
            });
        }
    },
    async login(req, res) {
        const {email, password} = req.body;
    
        try {
            if (!email || !password) {
                return res.status(400).json({
                    'error': 'Missing email or password'
                });
            }
            const user = await userModel.findOne({
                email
            });
            if (!user) {
                return res.status(404).json({
                    'error': 'User not found'
                });
            }
            if (!bcryptjs.compareSync(password, user.password)) {
                return res.status(401).json({
                    'error': 'Invalid password'
                });
            }
            const token = jwt.sign({user}, process.env.JWT_SECRET);

            res.json({
                'message': 'User logged in successfully',
                user,
                token
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                'error': error.message
            });
        }
    },
    async contact(req, res) {
        const {name, email, phone, subject, message} = req.body;
        try {
            if (!name || !email || !subject || !message || !phone) {
                return res.status(400).json({
                    'error': 'Missing required fields'
                });
            }

            const emailHTML = `
              <!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Contact Form Submission</title>
              </head>
              <body>
                <h2>Contact Form Submission</h2>
                
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>    
                
                <hr>
                
                <p><strong>Message:</strong></p>
                <p>${message}</p>
                
                <p>Thank you for reaching out!</p>
              </body>
              </html>
            `;

            const mailOptions = {
                from: `${name} <${email}>`,
                to: process.env.GOOGLE_EMAIL,
                subject: `Contact Form: ${subject}`,
                text: message,
                html: emailHTML
            }

            transporter.sendMail(mailOptions, (error) => {
                if (error) {
                    return res.status(500).json({
                        'error': error.message
                    });
                } else {
                    res.json({
                        'message': 'Message sent successfully'
                    });
                }
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                'error': error.message
            });
        }
    }
}

export default userController;