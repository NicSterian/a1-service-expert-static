// Netlify Function: Auto-reply email confirmation when contact form is submitted
// This function is automatically triggered by Netlify Forms
// See FORM_EMAIL_SETUP.md for configuration instructions

const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  // Only run on POST requests (form submissions)
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    // Log the entire event for debugging
    console.log('📥 Received event:', JSON.stringify(event, null, 2));
    console.log('📦 Event body:', event.body);

    // Parse the form submission data from Netlify
    const body = JSON.parse(event.body);
    console.log('📋 Parsed payload:', JSON.stringify(body, null, 2));

    // Netlify Forms sends data in a nested structure: body.payload.data
    const formData = body.payload?.data;

    if (!formData) {
      console.error('❌ No form data found in payload.');
      console.error('Expected: body.payload.data');
      console.error('Received structure:', JSON.stringify(body, null, 2));
      return { statusCode: 400, body: 'No form data received' };
    }

    console.log('📝 Form data:', formData);

    // Extract customer information from the form
    const customerName = formData.name || 'Customer';
    const customerEmail = formData.email;
    const customerPhone = formData.phone || 'Not provided';
    const customerRegistration = formData.registration || 'Not provided';
    const customerMessage = formData.message;

    // Validate required fields
    if (!customerEmail || !customerName) {
      console.error('❌ Missing required fields. Name:', customerName, 'Email:', customerEmail);
      return { statusCode: 400, body: 'Missing required fields' };
    }

    console.log('✅ All required fields present. Preparing to send email to:', customerEmail);

    // Configure Microsoft 365 SMTP transporter
    // These environment variables need to be set in Netlify dashboard
    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false, // Use STARTTLS
      auth: {
        user: process.env.EMAIL_USER, // Your Microsoft 365 email (e.g., support@a1serviceexpert.com)
        pass: process.env.EMAIL_PASSWORD, // Your email password or app-specific password
      },
    });

    // Email to send to the customer (auto-reply confirmation)
    const customerEmailContent = {
      from: `"A1 Service Expert" <${process.env.EMAIL_USER}>`,
      to: customerEmail,
      subject: 'Thank you for contacting A1 Service Expert',
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #1e293b 0%, #334155 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
    .logo { font-size: 24px; font-weight: bold; margin-bottom: 10px; }
    .content { background: #ffffff; padding: 30px; border: 1px solid #e2e8f0; border-top: none; }
    .footer { background: #f8fafc; padding: 20px; text-align: center; font-size: 14px; color: #64748b; border-radius: 0 0 8px 8px; }
    .highlight { color: #ff7a00; font-weight: 600; }
    .button { display: inline-block; background: #ff7a00; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 20px 0; }
    .details { background: #f8fafc; padding: 15px; border-left: 4px solid #ff7a00; margin: 20px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">A1 Service Expert</div>
      <p style="margin: 0; opacity: 0.9;">Your Trusted Car Service Specialist in Kettering</p>
    </div>

    <div class="content">
      <h2 style="color: #1e293b; margin-top: 0;">Hello ${customerName},</h2>

      <p style="color: #475569; line-height: 1.6;">
        Thank you for contacting <span class="highlight">A1 Service Expert</span>. We've received your enquiry and will get back to you within <strong>24 hours</strong> (usually much sooner during business hours).
      </p>

      <div class="details">
        <h3 style="margin-top: 0; color: #1e293b; font-size: 16px;">Your Message Details:</h3>
        <p style="margin: 5px 0; color: #475569;"><strong>Name:</strong> ${customerName}</p>
        <p style="margin: 5px 0; color: #475569;"><strong>Email:</strong> ${customerEmail}</p>
        <p style="margin: 5px 0; color: #475569;"><strong>Phone:</strong> ${customerPhone}</p>
        <p style="margin: 5px 0; color: #475569;"><strong>Vehicle Reg:</strong> ${customerRegistration}</p>
        <p style="margin: 5px 0; color: #475569;"><strong>Message:</strong> ${customerMessage}</p>
      </div>

      <h3 style="color: #1e293b;">Need Immediate Assistance?</h3>
      <p style="color: #475569; line-height: 1.6;">
        If your enquiry is urgent, feel free to call us directly:
      </p>

      <a href="tel:07394433889" class="button">📞 Call 07394 433889</a>

      <p style="color: #475569; line-height: 1.6; margin-top: 20px;">
        Or send us a <a href="https://wa.me/447394433889" style="color: #ff7a00; text-decoration: none;"><strong>WhatsApp message</strong></a> for quick responses.
      </p>

      <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">

      <h3 style="color: #1e293b;">Our Opening Hours:</h3>
      <ul style="color: #475569; line-height: 1.8; padding-left: 20px;">
        <li>Monday - Friday: 09:00 - 18:00</li>
        <li>Saturday: 09:00 - 14:30</li>
        <li>Sunday: Closed</li>
      </ul>
    </div>

    <div class="footer">
      <p style="margin: 10px 0;"><strong>A1 Service Expert</strong></p>
      <p style="margin: 5px 0;">11 Cunliffe Dr, Kettering, Northamptonshire NN16 8LD</p>
      <p style="margin: 5px 0;">📞 <a href="tel:07394433889" style="color: #ff7a00; text-decoration: none;">07394 433889</a> | 📧 <a href="mailto:support@a1serviceexpert.com" style="color: #ff7a00; text-decoration: none;">support@a1serviceexpert.com</a></p>
      <p style="margin: 15px 0 5px 0; font-size: 12px;">
        <a href="https://a1serviceexpert.com" style="color: #64748b; text-decoration: none;">Visit our website</a> |
        <a href="https://a1serviceexpert.com/privacy" style="color: #64748b; text-decoration: none;">Privacy Policy</a>
      </p>
    </div>
  </div>
</body>
</html>
      `,
      text: `Hello ${customerName},

Thank you for contacting A1 Service Expert. We've received your enquiry and will get back to you within 24 hours (usually much sooner during business hours).

YOUR MESSAGE DETAILS:
Name: ${customerName}
Email: ${customerEmail}
Phone: ${customerPhone}
Vehicle Registration: ${customerRegistration}
Message: ${customerMessage}

NEED IMMEDIATE ASSISTANCE?
If your enquiry is urgent, feel free to call us directly at 07394 433889 or send us a WhatsApp message at https://wa.me/447394433889

OUR OPENING HOURS:
Monday - Friday: 09:00 - 18:00
Saturday: 09:00 - 14:30
Sunday: Closed

---
A1 Service Expert
11 Cunliffe Dr, Kettering, Northamptonshire NN16 8LD
📞 07394 433889 | 📧 support@a1serviceexpert.com
Website: https://a1serviceexpert.com
`,
    };

    // Send the confirmation email to the customer
    console.log('📧 Attempting to send email via Microsoft 365 SMTP...');
    console.log('📧 SMTP Config - Host: smtp.office365.com, Port: 587');
    console.log('📧 From:', process.env.EMAIL_USER);
    console.log('📧 To:', customerEmail);

    const result = await transporter.sendMail(customerEmailContent);

    console.log('✅ Confirmation email sent successfully to', customerEmail);
    console.log('📬 Email result:', JSON.stringify(result, null, 2));

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Confirmation email sent successfully' }),
    };
  } catch (error) {
    console.error('❌ Error sending email:', error);
    console.error('❌ Error name:', error.name);
    console.error('❌ Error message:', error.message);
    console.error('❌ Error stack:', error.stack);

    if (error.code) {
      console.error('❌ Error code:', error.code);
    }

    if (error.command) {
      console.error('❌ SMTP command:', error.command);
    }

    if (error.response) {
      console.error('❌ SMTP response:', error.response);
    }

    // Return error status so we can see failures in Netlify function logs
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Error sending confirmation email',
        error: error.message,
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined
      }),
    };
  }
};
