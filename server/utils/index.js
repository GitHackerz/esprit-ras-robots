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
            <p>To confirm your registration, shift gears and send an email to <strong><a href="mailto:contact.espritrasrobots@gmail.com">contact.espritrasrobots@gmail.com</a></strong> with the following details:</p>
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
        <br/>
        <h4>Now let's navigate through the registration fees for each race category:</h4>
        <ul>
            ${team.challenge === 'Junior' ? '<li style="color: #4472c4"><strong>Junior:</strong> 55 DT</li>' : '<li><strong>Junior:</strong> 55 DT</li>'}
            ${team.challenge === 'Autonomous' ? '<li style="color: #4472c4"><strong>Autonomous:</strong> 60 DT</li>' : '<li><strong>Autonomous:</strong> 60 DT</li>'}
            ${team.challenge === 'All Terrain' ? '<li style="color: #4472c4"><strong>All Terrain:</strong> 65 DT</li>' : '<li><strong>All Terrain:</strong> 65 DT</li>'}
            ${team.challenge === 'Fighter' ? '<li style="color: #4472c4"><strong>Fighter:</strong> 70 DT</li>' : '<li><strong>Fighter:</strong> 70 DT</li>'}
        </ul>
        
        <p>To make a pit stop for payment, follow the procedure below:</p>
        <ul>
            <li>
                "5359 4014 2011 7950" in the name of <strong>"Omaima Nasser"</strong> or via D17 to <strong>53117541</strong>
            </li>
            <li>
                "5359 4017 3409 4929" in the name of <strong>"Mohamed Rabii zribi"</strong> or via D17 to  <strong>24968615</strong>
            </li>
            <li>
                "5359 4014 3736 4876" in the name of <strong>"Mohamed Habib Allah Bibani"</strong> or via D17 to <strong>58906040</strong>
            </li>
            <li>
                Bank Transfer RIB: <strong>07 098 0500105840753 96</strong> (Amen Bank)
            </li>
        </ul>
        ===> Include a photo of the transfer receipt/capture in your email.<br />
        <div>
            <p>Remember, the checkered flag waves on the payment deadline: <span style="color: #ff0000"><strong>11th April 2023, at 11:59 PM </strong></span>. </p>
            <p>Our pit crew at ESPRIT RAS ROBOTS OC extends heartfelt gratitude for joining the race, and we wish you pole position success. For any additional information, contact us at <strong><a href="mailto:contact.espritrasrobots@gmail.com">contact.espritrasrobots@gmail.com</a></strong>.</p>
            <p>Get ready to burn rubber and showcase your talent on the Formula 1-inspired track. We can't wait to see you at the starting line.<br /><br /></p>
        </div>
    `;
}