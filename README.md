


<h1 align="center">
  <br>
  Project Name: Pulse Fit
</h1>

<div align="center">
   <strong>Pulse Fit</strong> - One stop destination for all your fitness needs<br>
  CoC Inheritance 2022 || Frontend Warriors <br> <br>
  
</div>
<hr>

<details>
<summary>Table of Contents</summary>

- [Description](#description)
- [Links](#links)
- [Tech Stack](#tech-stack)
- [Progress](#progress)
- [Future Scope](#future-scope)
- [Applications](#applications)
- [Project Setup](#project-setup)
- [Major Roadblocks](#major-roadblocks)
- [Usage](#usage)
- [Team Members](#team-members)
- [Mentors](#mentors)
- [Screenshots](#screenshots)

</details>

## 📝Description

<table>
  <tr>
    <td>
      The <strong>Pulse-Fit</strong> is a one stop destination for all ypur fitness related needs
    <br>
    <h3>Access Level</h3>   
    The React based web app has one access levels :
    <h4>Key Features</h4>
    <p>
    <ul>
            <li><strong>BMI Calculator:</strong>The users can calculate their BMI and will get workouts and diet plans suggested according to their health requirement</li>
            <li><strong>Heart Disease Predictor:</strong> Predicts if your heart is healty or at risk of heart diseases</li>
            <li><strong>Find naerby Gyms:</strong> uses google maps API to suggest nearby gyms </li>
            <li><strong>Book Appointments:</strong>Allows users to book doctor's appointments</li>
            <li><strong>Community:</strong>Allows users to  share their experiences and build a community</li>
            <li><strong>E-com:</strong>Buy all FItness related products</li>
    </ul>
    </p>
    <h3>Business Potential</h3>
    <p>
    <ul>
    <li>The companies can sell their fitness realted products on the website</li>
    <li>Website can earn add revenue from putting up advertisements</li>
    </ul>
    </p>
  </td>
 </tr>
</table>

## 🔗Links

- [GitHub Repository](https://github.com/rohanfatehchandka/Inheritance)
- [Demo Video]()
- [Drive Link to Screenshots of your project](https://drive.google.com/drive/folders/1hZTCHkw_yaMnJ_c1jsrRcVmwoz0eGZFA?usp=sharing)
- [Hosted Website Link](https://frontend-fw.vercel.app/)



Add any more links/resources you used for your project

## 🤖Tech-Stack

Mention all languages/libraries/frameworks used in your project **domain-wise**   
You can use icons too - find them [here](https://github.com/get-icon/geticon) 

- **Server:** ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white), ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)  ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
- **Client:**   ![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white) ![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)  ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)


## 📈Progress

 fully implemented features :

- [x] BMI calculator : will calculate the bmi of a person and will suggest videos and diet tips.
- [x] Heart Disease Predictor : taking some information about habits of the user our predictor can predit if the user's heart is healthy or at risk of heart disease in future
- [x] Book Doctor's appointment : user can pre-book Doctor's appointment.
- [x] Ecommerce : user can buy all fitness realted products here
- [x] Community : All users of the website can communicate with each other.
- [x] Map : To find nearby gyms 
- [x] Login & sign-up : secure login and sigh-up using jwt tokens
- [x] Contact us: The user can contact us using this feature.It sends automated E-mails

## 🔮Future Scope
- Additional access level: An additional acces level for the admin who can manage the website 
- Improving the accuracy of Heart Disease Predictor : Currently the accuracy of the model is 85%. Training the model to increase the accuracy
- Payment checkout for E-commerce part of the website

## 💸Applications
- Pulse Fit is capable to host products of many health-realted buisnesses in the E-com part of our website 
- It can earn add revenue from putting up advertisements
- Our website contains various features and we aim at meeting all the fitness related needs

## 🛠Project Setup

For the Web-App
1.Clone the GitHub repo
```bash
git clone https://github.com/Bruhbytes/Frontend-Warriors.git
```
2.Enter the client directory. Install all the required dependencies.
```bash
  cd frontend
  npm install
  npm start
```
3.To start the backend server:
```bash
  cd backend
  npm install
  npm run dev
```
## 🚧Major Roadblocks
1. material-ui has a peer dependency conflict with React  
   ```
   npm ERR! code ERESOLVE
   npm ERR! ERESOLVE unable to resolve dependency tree
   npm ERR! 
   npm ERR! While resolving: portfolio@0.1.0
   npm ERR! Found: react@17.0.1
   npm ERR! node_modules/react
   npm ERR!   react@"^17.0.1" from the root project
   npm ERR! 
   npm ERR! Could not resolve dependency:
   npm ERR! peer react@"^16.8.0" from @material-ui/core@4.11.0
   npm ERR! node_modules/@material-ui/core
   npm ERR!   @material-ui/core@"*" from the root project
   npm ERR! 
   npm ERR! Fix the upstream dependency conflict, or retry
   npm ERR! this command with --force, or --legacy-peer-deps
   npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
   npm ERR! 
   npm ERR! See /Users/jordanhilado/.npm/eresolve-report.txt for a full report.

   npm ERR! A complete log of this run can be found in:
   npm ERR!     /Users/jordanhilado/.npm/_logs/2020-10-31T17_57_54_724Z-debug.log
   ```
   Solution:
   ```
   npm install -f @material-ui/core
   ```

## 💻Usage

>Steps to run your project once its setup. 
- login/Sign-up: Login to the website using your credentials.If you are a new user u can sign-up using your e-mail id and set up a secure password (for ex. rohan@gmail.com ,password:Rohan@12345)
- All the features are listed on the navbar can be used

## 👨‍💻Team Members

 - [Rohan Fatehchandka](https://github.com/rohanfatehchandka) : rvfatehchandka_b21@ce.vjti.ac.in
 - [Tanaya Shelke](https://github.com/tanayaa1) :  tsshelke_b21@ce.vjti.ac.in
 - [Om Doiphode](https://github.com/Om-Doiphode) :  oadoiphode_b21@ce.vjti.ac.in
 

## 👨‍🏫Mentors
 - [Harsh Nag](https://github.com/Jigsaw-23122002)
 - [Devansh Joshi](https://github.com/devdev29)

## 📱Screenshots
Add a few screenshots for parts of the project completed till now to give the viewer a quick idea of what your project looks like. After all, a picture speaks a thousand words.

You'll have to link the screenshots from your drive folder here.

![Screenshot alt text](https://drive.google.com/file/d/1yTf6nwxxz3pXxGmDx2Ytjx9bjaKpS5B-/view?usp=share_link "Here is a screenshot")

Use this template as a guide for writing your documentation. Feel free to customize and adapt it for you project.  
For more Markdown syntax help, visit [here](https://www.markdownguide.org/basic-syntax/)
