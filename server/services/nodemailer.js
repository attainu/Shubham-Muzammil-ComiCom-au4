import nodemailer from 'nodemailer';
import mg from 'nodemailer-mailgun-transport';
import { NODEMAILER_KEY, NODEMAILER_DOMAIN } from "../config/keys";
const auth = {
    auth: {
        api_key: NODEMAILER_KEY, 
        domain: NODEMAILER_DOMAIN
    }
};

export const transporter = nodemailer.createTransport(mg(auth));