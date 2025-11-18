# Contact Form Email Confirmation Setup Guide

This guide explains how to set up automatic email confirmations when customers submit the contact form on your website.

## How It Works

When a customer submits the contact form:

1. ✅ **Netlify Forms** receives and stores the submission
2. ✅ **You receive an email** at your business email (configured in Netlify dashboard)
3. ✅ **Customer receives an auto-reply** confirming you got their message (via Netlify Function)

---

## Setup Steps

### Step 1: Install Dependencies (One-Time Setup)

After cloning the repository, run:

```bash
npm install
```

This installs `nodemailer` which is needed to send emails via Microsoft 365.

---

### Step 2: Configure Microsoft 365 Email in Netlify

You need to add your Microsoft 365 email credentials to Netlify as environment variables.

#### 2.1: Get Your Email Credentials

You already have Microsoft 365 through GoDaddy. You'll need:

- **Email address:** `support@a1serviceexpert.com` (or whatever you use)
- **Email password:** Your Microsoft 365 email password

**IMPORTANT SECURITY NOTE:**
For better security, Microsoft 365 recommends using an **App Password** instead of your regular password. Here's how to create one:

1. Go to [https://account.microsoft.com/security](https://account.microsoft.com/security)
2. Sign in with your Microsoft 365 account
3. Go to **Security** → **Advanced security options**
4. Under **App passwords**, create a new app password
5. Name it "Netlify Forms" and save the generated password

**OR** you can use your regular Microsoft 365 password if app passwords aren't available.

#### 2.2: Add Environment Variables to Netlify

1. Go to your Netlify dashboard: [https://app.netlify.com/](https://app.netlify.com/)
2. Select your site (a1-service-expert-static)
3. Go to **Site settings** → **Environment variables**
4. Click **Add a variable**
5. Add these TWO variables:

**Variable 1:**
- **Key:** `EMAIL_USER`
- **Value:** `support@a1serviceexpert.com` (your Microsoft 365 email)

**Variable 2:**
- **Key:** `EMAIL_PASSWORD`
- **Value:** Your Microsoft 365 password (or app password from step 2.1)

6. Click **Save**

---

### Step 3: Configure Form Notifications in Netlify

This ensures YOU receive emails when customers submit the form.

1. In Netlify dashboard, go to **Site settings** → **Forms**
2. Click **Form notifications**
3. Click **Add notification** → **Email notification**
4. Configure:
   - **Event to listen for:** New form submission
   - **Form:** `contact` (should appear in dropdown after first deployment)
   - **Email to notify:** `support@a1serviceexpert.com`
5. Click **Save**

**Add Multiple Emails (Optional):**
You can add multiple email addresses to receive notifications:
- Click **Add notification** again
- Add another email (e.g., your personal Gmail)
- Repeat for as many emails as you want

---

### Step 4: Deploy and Test

1. **Commit and push your changes:**
   ```bash
   git add .
   git commit -m "Add email confirmation functionality"
   git push origin main
   ```

2. **Netlify will automatically rebuild** (takes 2-3 minutes)

3. **Test the form:**
   - Go to your website: `https://a1serviceexpert.com/contact`
   - Fill in the contact form
   - Submit

4. **Verify:**
   - ✅ You should receive an email at `support@a1serviceexpert.com` (via Netlify Forms)
   - ✅ The customer should receive an auto-reply confirmation email
   - ✅ Form submission appears in Netlify dashboard under **Forms**

---

## Troubleshooting

### Customer not receiving auto-reply email

**Check 1: Environment Variables**
- Go to Netlify → Site settings → Environment variables
- Verify `EMAIL_USER` and `EMAIL_PASSWORD` are set correctly
- Redeploy the site after making changes

**Check 2: Email Credentials**
- Verify you can send emails using these credentials
- Try logging into [https://outlook.office.com](https://outlook.office.com) with the same credentials
- If login fails, reset your Microsoft 365 password

**Check 3: Function Logs**
- Go to Netlify dashboard → **Functions**
- Click on `submission-created`
- Check the logs for error messages
- Common errors:
  - `Invalid login` → Wrong password
  - `Authentication failed` → Use app password instead
  - `Connection timeout` → SMTP server issue (rare)

**Check 4: Spam Folder**
- Ask test customers to check their spam/junk folder
- Auto-reply emails sometimes get flagged

### Not receiving form submissions yourself

**Check 1: Form Notifications**
- Netlify dashboard → Site settings → Forms → Form notifications
- Verify email address is correct
- Click **Test notification** to test

**Check 2: Form Name**
- The form must have `name="contact"` attribute (already set in code)

### "Form not found" error

**Cause:** Netlify hasn't detected the form yet.

**Solution:**
1. Make a dummy submission on the live site (not localhost)
2. Go to Netlify dashboard → **Forms**
3. The `contact` form should now appear
4. Configure notifications as per Step 3

---

## Email Template Customization

The auto-reply email is defined in `/netlify/functions/submission-created.js`.

To customize the email:

1. Open the file in your code editor
2. Find the `customerEmailContent` object (around line 48)
3. Modify the HTML or text content
4. Save, commit, and push to GitHub
5. Netlify will automatically redeploy

**Email sections you can customize:**
- Subject line (line 50)
- Header logo/text
- Body message
- Call-to-action buttons
- Footer information

---

## Alternative: Using SendGrid Instead of Microsoft 365

If you prefer to use SendGrid (also free for 100 emails/day):

1. Sign up at [https://sendgrid.com/](https://sendgrid.com/)
2. Create an API key
3. In Netlify, update environment variables:
   - Remove `EMAIL_USER` and `EMAIL_PASSWORD`
   - Add `SENDGRID_API_KEY` with your API key
4. Update `/netlify/functions/submission-created.js` to use SendGrid's SDK instead of nodemailer

**Need help with this?** Let me know and I can provide the SendGrid code.

---

## Cost & Limits

### Microsoft 365 (Your Current Setup)
- ✅ **FREE** (you already pay for Microsoft 365)
- ✅ Sending limit: ~10,000 emails/day (way more than you need)
- ✅ Professional: emails come from your real business email
- ❌ Requires email password in Netlify (use app password for security)

### Alternative: SendGrid
- ✅ FREE tier: 100 emails/day
- ✅ No password needed (uses API key)
- ✅ Better deliverability for auto-reply emails
- ❌ Emails come from SendGrid servers (less professional)

**Recommendation:** Stick with Microsoft 365 - it's free and more professional.

---

## Security Best Practices

1. ✅ **Use App Password** instead of your main Microsoft 365 password
2. ✅ **Never commit** `.env` files with passwords to GitHub
3. ✅ **Use Netlify Environment Variables** (they're encrypted)
4. ✅ **Enable spam filtering** in Netlify Forms settings
5. ✅ **Monitor form submissions** in Netlify dashboard for spam

---

## What the Customer Receives

When a customer submits the form, they get a professional email like this:

**Subject:** Thank you for contacting A1 Service Expert

**Body:**
- Professional header with your logo
- Personalized greeting using their name
- Confirmation that you received their message
- Summary of what they submitted
- Call-to-action buttons (Call, WhatsApp)
- Your opening hours
- Contact information

---

## Need Help?

**Common issues:**
1. **Authentication failed** → Use app password, not regular password
2. **Customer not receiving email** → Check spam folder
3. **Function not running** → Check Netlify function logs

**Still stuck?**
- Check Netlify documentation: [https://docs.netlify.com/functions/overview/](https://docs.netlify.com/functions/overview/)
- Contact Netlify support (free on all plans)

---

## Summary Checklist

After setup, verify:

- [ ] `nodemailer` installed (`npm install` completed)
- [ ] Environment variables added to Netlify (`EMAIL_USER`, `EMAIL_PASSWORD`)
- [ ] Form notifications configured (you receive emails)
- [ ] Site deployed to Netlify
- [ ] Test form submission completed
- [ ] Customer receives auto-reply email
- [ ] You receive form notification email
- [ ] Form submission visible in Netlify Forms dashboard

---

**Setup Complete!** 🎉

Your contact form now sends professional auto-reply emails to customers automatically.
