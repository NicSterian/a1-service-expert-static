# Google Analytics 4 Setup Guide

This guide will help you set up Google Analytics 4 (GA4) for the A1 Service Expert website.

## Step 1: Create a Google Analytics 4 Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click **Admin** (gear icon in bottom left)
4. Click **Create Property**
5. Fill in the property details:
   - **Property name:** A1 Service Expert
   - **Reporting time zone:** (GMT) United Kingdom
   - **Currency:** Pound Sterling (£)
6. Click **Next**
7. Fill in business details:
   - **Industry category:** Automotive
   - **Business size:** Small (1-10 employees)
8. Click **Next**
9. Select business objectives (choose what applies):
   - Get baseline reports
   - Measure customer engagement
10. Click **Create**
11. Accept the Terms of Service

## Step 2: Set Up a Data Stream

1. Select **Web** as your platform
2. Fill in the stream details:
   - **Website URL:** https://a1serviceexpert.com
   - **Stream name:** A1 Service Expert Website
3. Click **Create stream**
4. **IMPORTANT:** Copy your **Measurement ID** (format: G-XXXXXXXXXX)
   - You'll need this in the next steps

## Step 3: Add Measurement ID to Your Website

### For Local Development:

1. Create a `.env` file in the project root (if it doesn't exist)
2. Add your Measurement ID:
   ```
   PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
   (Replace `G-XXXXXXXXXX` with your actual Measurement ID)

### For Netlify Deployment:

1. Go to your Netlify dashboard
2. Select your site (a1-service-expert-static)
3. Go to **Site settings** → **Environment variables**
4. Click **Add a variable**
5. Add the following:
   - **Key:** `PUBLIC_GA_MEASUREMENT_ID`
   - **Value:** `G-XXXXXXXXXX` (your Measurement ID)
6. Click **Save**
7. **Redeploy** your site for changes to take effect

## Step 4: Verify Installation

After deploying with your Measurement ID:

1. Go to your Google Analytics property
2. Click **Reports** → **Realtime**
3. Visit your website (https://a1serviceexpert.com)
4. You should see yourself as an active user in the Realtime report within 30 seconds

If you don't see data:
- Check that the Measurement ID is correct
- Ensure you redeployed after adding the environment variable
- Try clearing your browser cache and visiting again
- Check browser console for any errors

## Step 5: Configure Enhanced Measurement (Optional but Recommended)

Enhanced measurement automatically tracks additional interactions:

1. In Google Analytics, go to **Admin** → **Data Streams**
2. Click on your web stream
3. Click **Enhanced measurement**
4. Ensure these are enabled:
   - ✅ Page views (enabled by default)
   - ✅ Scrolls
   - ✅ Outbound clicks
   - ✅ Site search (if applicable)
   - ✅ Video engagement (if applicable)
   - ✅ File downloads

## Step 6: Set Up Custom Events (Optional)

The website is configured to track these custom events automatically:

### Phone Call Clicks
- **Event name:** `phone_call`
- **Parameters:** `method` (location of the button clicked)

### WhatsApp Clicks
- **Event name:** `whatsapp_click`
- **Parameters:** `method` (location of the button clicked)

### Form Submissions
- **Event name:** `form_submit`
- **Parameters:** `form_name` (which form was submitted)

These events will appear in your GA4 reports after users interact with your site.

## Step 7: Create Useful Reports

### Recommended Reports to Set Up:

1. **Traffic Sources**
   - See where your visitors come from (Google, direct, social media)
   - Go to **Reports** → **Acquisition** → **Traffic acquisition**

2. **Popular Pages**
   - See which service pages get the most visits
   - Go to **Reports** → **Engagement** → **Pages and screens**

3. **Conversions**
   - Track phone calls, WhatsApp clicks, and form submissions
   - Go to **Reports** → **Engagement** → **Conversions**
   - Mark important events as conversions

4. **User Location**
   - See where your customers are located
   - Go to **Reports** → **User** → **Demographics**

## Troubleshooting

### Analytics not showing data?

**Check 1:** Measurement ID is correct
```bash
# In your .env file or Netlify environment variables
PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX  # Should start with "G-"
```

**Check 2:** Environment variable is set in Netlify
- Go to Netlify dashboard → Site settings → Environment variables
- Verify `PUBLIC_GA_MEASUREMENT_ID` exists with correct value

**Check 3:** Browser console
- Open your website
- Press F12 to open browser console
- Look for any errors related to Google Analytics
- You should see gtag.js loaded in the Network tab

**Check 4:** Ad blockers
- Some ad blockers block Google Analytics
- Try disabling ad blockers or use incognito mode for testing

### Still having issues?

Contact support or check the [Google Analytics Help Center](https://support.google.com/analytics).

## Privacy and GDPR Compliance

Your Google Analytics setup is already configured for privacy:

✅ IP anonymization is enabled by default in GA4
✅ Cookie policy page explains analytics cookies
✅ Users can opt-out using browser settings or Google's opt-out plugin

### Recommended: Add Cookie Consent Banner (Optional)

For full GDPR compliance, consider adding a cookie consent banner. Popular options:
- [CookieYes](https://www.cookieyes.com/)
- [Cookiebot](https://www.cookiebot.com/)
- [OneTrust](https://www.onetrust.com/)

These services integrate with Google Analytics and only load tracking after user consent.

## Useful Links

- [Google Analytics Help](https://support.google.com/analytics)
- [GA4 Quickstart Guide](https://support.google.com/analytics/answer/9304153)
- [Google Analytics Opt-out Browser Add-on](https://tools.google.com/dlpage/gaoptout)
- [GA4 Event Reference](https://support.google.com/analytics/answer/9267735)

---

**Questions?** Contact Nicolae Sterian or refer to the [official Google Analytics documentation](https://developers.google.com/analytics).
