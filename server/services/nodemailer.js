import nodemailer from 'nodemailer';
import mailGun from 'nodemailer-mailgun-transport';
import { NODEMAILER_KEY, NODEMAILER_DOMAIN } from "../config/keys";

const auth = {
    auth: {
        api_key: NODEMAILER_KEY, // TODO: Replace with your mailgun API KEY
        domain: NODEMAILER_DOMAIN // TODO: Replace with your mailgun DOMAIN
    }
};

export const transporter = nodemailer.createTransport(mailGun(auth));