import nodemailer from 'nodemailer';
import mailGun from 'nodemailer-mailgun-transport';

const auth = {
    auth: {
        api_key: 'key-54e9b45f7af98f18fc520ce6fca3d113-f135b0f1-b063eebc', // TODO: Replace with your mailgun API KEY
        domain: 'https://app.mailgun.com/app/sending/domains/sandboxe7356857d6d4404d812fed478298571b.mailgun.org' // TODO: Replace with your mailgun DOMAIN
    }
};

export const transporter = nodemailer.createTransport(mailGun(auth));