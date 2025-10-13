export const welcomeMail = (name: string) => `
  <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px; background-color: #f8f9fa;">
    <h1 style="color: #007bff;">Welcome, ${name}!</h1>
    <p style="font-size: 16px; color: #333;">Thank you for registering on our app.</p>
    <p style="font-size: 16px; color: #333;">We are excited to have you onboard.</p>
    <div style="margin-top: 20px;">
      <button style="padding: 10px 20px; background-color: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">
        Explore Now
      </button>
    </div>
  </div>
`;


export const registerMail = (name: string) => `
  <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px; background-color: #f0f2f5;">
    <h1 style="color: #28a745;">Hello, ${name}!</h1>
    <p style="font-size: 16px; color: #333;">Thank you for registering.</p>
    <p style="font-size: 16px; color: #333;">Please confirm your account by clicking the button below:</p>
  </div>
`;
export const otpSendMail = (name: string, otp: string): string => {
  return `
    <div style="font-family: Arial, sans-serif; color: #333;">
      <h2>Hello ${name},</h2>
      <p>Here is your One-Time Password (OTP):</p>
      <div style="
        background-color: #f3f3f3;
        padding: 10px 20px;
        border-radius: 8px;
        display: inline-block;
        font-size: 24px;
        font-weight: bold;
        letter-spacing: 2px;
      ">
        ${otp}
      </div>
      <p>This OTP will expire in <strong>5 minutes</strong>.</p>
      <p>If you didn’t request this, please ignore this email.</p>
      <br/>
      <p>– The Shop Admin Team</p>
    </div>
  `;
};

