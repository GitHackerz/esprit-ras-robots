import mongoose from "mongoose";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
dotenv.config();

export const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
    } catch (error) {
        throw new Error(error);
    }
}

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GOOGLE_EMAIL,
        pass: process.env.GOOGLE_PASSWORD
    }
});

export const emailRegistrationHtml = (team) => {
    return `
        <div>
            <p>Dear Formula 1 enthusiast,</p>
            <p>Start your engine because your registration for <strong>${team.name}</strong> has zoomed into our inbox and we are delighted to welcome you aboard for the second edition of our event, putting you in the driver&rsquo;s seat for a thrilling experience.</p>
        </div>
        <h2>Team information </h2>
        <ul>
            <li><strong>Challenge name:</strong> ${team.challenge}</li>
            <li><strong>Team Name:</strong> ${team.name}</li>
            <li><strong>Establishment:</strong> ${team.establishment}</li>
            <li><strong>Club Name:</strong> ${team.club}</li>
        </ul>
        <h2>Team leader's information </h2>
        <ul>
            <li><strong>Full Name:</strong> ${team.teams[0].name}</li>
            <li><strong>Email:</strong> <a href="mailto:${team.teams[0].email}">${team.teams[0].email}</a></li>
            <li><strong>Phone Number:</strong> ${team.teams[0].phone}</li>
        </ul>
        ${team.teams[1] ? `
        <h2>Team member's information </h2>
        <ul>
            <li><strong>Full Name:</strong> ${team.teams[1].name}</li>
            <li><strong>Email:</strong> <a href="mailto:${team.teams[1].email}">${team.teams[1].email}</a></li>
            <li><strong>Phone Number:</strong> ${team.teams[1].phone}</li>
        </ul>
        ` : ''}
        ${team.teams[2] ? `
        <h2>Team member's information </h2>
        <ul>
            <li><strong>Full Name:</strong> ${team.teams[2].name}</li>
            <li><strong>Email:</strong> <a href="mailto:${team.teams[2].email}">${team.teams[2].email}</a></li>
            <li><strong>Phone Number:</strong> ${team.teams[2].phone}</li>
        </ul>
        ` : ''}
        <br/>
        <h4>Now let's navigate through the registration fees for each race category:</h4>
        <ul>
            ${team.challenge === 'Junior' ? '<li style="color: #4472c4"><strong>Junior:</strong> 55 DT + 1% transaction fees = 55,550 DT</li>' : '<li><strong>Junior:</strong> 55 DT + 1% transaction fees = 55,550 DT</li>'}
            ${team.challenge === 'Autonomous' ? '<li style="color: #4472c4"><strong>Autonomous:</strong> 60 DT + 1% transaction fees = 60,600 DT</li>' : '<li><strong>Autonomous:</strong> 60 DT + 1% transaction fees = 60,600 DT</li>'}
            ${team.challenge === 'All Terrain' ? '<li style="color: #4472c4"><strong>All Terrain:</strong> 65 DT + 1% transaction fees = 65,650 DT</li>' : '<li><strong>All Terrain:</strong> 65 DT + 1% transaction fees = 65,650 DT</li>'}
            ${team.challenge === 'Fighter' ? '<li style="color: #4472c4"><strong>Fighter:</strong> 70 DT + 1% transaction fees =  70,700 DT</li>' : '<li><strong>Fighter:</strong> 70 DT + 1% transaction fees =  70,700 DT</li>'}
        </ul>
        
        <p>To make a pit stop for payment, follow the procedure below:</p>
        <ul>
            <li>
                <strong>D17: </strong>53117541 "Melek Hassayoun" 
            </li>
            <li>
                <strong>D17: </strong>24968615 "Rabii Zribi" 
            </li>
            <li>
                <strong>Postal Transfer: </strong> "5359 4014 2011 7950" in the name of <strong>"Omaima Nasser"</strong>
            </li>
            <li>
                <strong>Postal Transfer: </strong> "4742 0140 4440 6151" in the name of <strong>"Aziz Hbaili"</strong>
            </li>
            <li>
                <strong>Postal Transfer: </strong> "5359 4014 3736 4876" in the name of <strong>"Mohamed Habib Allah Bibani"</strong>
            </li>
            <li>
                <strong>Bank Transfer RIB: </strong> 25051000000095710133 ADAM ASSIDI (Zitouna Bank)
            </li>
        </ul>
        
        <p><strong>Important: </strong> Reply to this email by sending a receipt/capture of the payment to <span style="color: #4472c4; font-size: large"><strong>confirm your registration.</strong></span></p>
        
        <div>
            <p>Remember, the checkered flag waves on the payment deadline: <span style="color: #ff0000"><strong>18th February 2024, at 11:59 PM </strong></span>. </p>
            <p>Our pit crew at ESPRIT RAS ROBOTS OC extends heartfelt gratitude for joining the race, and we wish you pole position success. For any additional information, contact us at <strong><a href="mailto:contact.espritrasrobots@gmail.com">contact.espritrasrobots@gmail.com</a></strong>.</p>
            <p>Get ready to burn rubber and showcase your talent on the Formula 1-inspired track. We can't wait to see you at the starting line.<br /><br /></p>
        </div>
    `;
}