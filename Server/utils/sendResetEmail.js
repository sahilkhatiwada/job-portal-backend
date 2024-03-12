import nodemailer from "nodemailer";

const sendResetEmail = async (email, resetLink) => {
  try {
    // create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      // your email sending configuration (SMTP or others )
      // For testing purpose , you can use services like Ethereal (https://ethereal.email)
    });
    //    send email with reset link
    await transporter.sendMail({
      from: process.env.EMAIL_FROM, // sender address
      to: email, // list of receivers
      subject: "Password Reset", // Subject line
      html: `<h1>Please click on the link below to reset your password</h1><a href="${resetLink}">Reset Password</a>`,
      text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.`,
    });
    console.log("Reset email sent successfully.");
  } catch (error) {
    console.error("Error sending reset email:", err);
    throw new Error("Error sending reset email:", err);
  }
};

export default sendResetEmail;
