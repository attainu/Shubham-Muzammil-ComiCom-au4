# Shubham-Muzammil-ComiCom-au4

### Deployed Link: https://comicom2020.herokuapp.com

## INTRODUCTION
Hey, we are Muzammil Khan and Shubham Ambastha. We have built an ecommerce website centered around the sale of comics. The name of our project is Comicom, where you can purchase the latest comics according to your taste and read them.

The reason we chose to wokr on this project is because an ecommerce website has a real world application of the technologies we have learnt. Adding to that, we get the chance to integrate a payment gateway.

## WHAT ARE WE TRYING TO BUILD?
We have built an ecommerce website named Comicom centered around the sale of comics. This website lets you browse all the available comics, see their details and according to your preference add to cart or add to wishlist to buy them later. In order to place an order the user needs to sign up and then sign in. Alternatively, the user can use Facebook or Google account to instantly sign in.

The website has a search bar which can be used to search specific comics. The comics are divided in categories (Indian, Western, Manga) which can be used to filter the comics according to taste. A user can also browse the comics according to characters(Ironman, Batman, Chacha Choudhary).

## TECHNOLOGIES USED:
Starting with the Frontend, we have built it using React library(create-react-app). We have used redux for managing the state, thunk and axios for making async calls to the backend api. For styling the UI, we used a mix of bootstrap and custom CSS. The UI is fully responsive. Fontawesome for font and icons.

The Backend is built with Nodejs, a javascript runtime which let’s us write backend code in javascript. On top of it, Expressjs framework for the ease of use and its minimalist nature for creating the apis. Babel is used to set up the backend for ES6+ syntax. And mongodb as our database to store all the records of comics, users and sales. Cloudinary for sourcing the images. Stripe for making payments.

Besides these major ones, we have used several other packages which are listed below:

Brcyptjs - to encrypt passwords.
Mongoose - ORM for mongodb.
Multer - handle file uploads.
Nodemailer - Sending emails on successful signup.
Passportjs - managing authentication.

## FUTURE SCOPE:
In future, we plan to actually provide the comics the users purchase. We can give access to the digital copies of purchased comics through emails. The UI can be improved upon. The platform needs a few performance tweaks, to make it seamless. The images uploaded to cloudinary can be minified and then uploaded.
