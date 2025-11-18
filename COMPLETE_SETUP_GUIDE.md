# Complete Setup & Deployment Guide - A1 Service Expert

This is your **master guide** for deploying and configuring the A1 Service Expert website. Follow these steps in order for a smooth launch.

---

## 📋 Pre-Deployment Checklist

Before deploying, ensure you have:

- [ ] GitHub account with repository access
- [ ] Netlify account (free tier is fine)
- [ ] Domain: a1serviceexpert.com (via GoDaddy)
- [ ] Microsoft 365 email: support@a1serviceexpert.com
- [ ] 30-60 minutes of time for setup

---

## 🚀 Step 1: Install Dependencies

If you haven't already, install the required packages:

```bash
cd /Users/nicolaesterian/Projects/a1-service-expert-static
npm install
```

This installs:
- Astro framework
- Tailwind CSS
- nodemailer (for email confirmations)
- All other dependencies

---

## 🎯 Step 2: Deploy to Netlify

### 2.1: Connect GitHub Repository

1. Go to [https://app.netlify.com/](https://app.netlify.com/)
2. Sign up or log in (use GitHub for easy auth)
3. Click **"Add new site"** → **"Import an existing project"**
4. Choose **"Deploy with GitHub"**
5. Authorize Netlify to access your GitHub account
6. Select repository: `NicSterian/a1-service-expert-static`

### 2.2: Configure Build Settings

Netlify should auto-detect these settings, but verify:

- **Branch to deploy:** `main`
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** 18 (set in netlify.toml)

Click **"Deploy site"**

Netlify will now:
- Install dependencies
- Run type checking
- Build your static site
- Deploy to a temp URL (e.g., `random-name-123456.netlify.app`)

This takes 2-3 minutes. ☕

---

## 🌐 Step 3: Connect Custom Domain

### 3.1: Add Domain in Netlify

1. In Netlify dashboard, click your deployed site
2. Go to **Site settings** → **Domain management**
3. Click **"Add custom domain"**
4. Enter: `a1serviceexpert.com`
5. Click **"Verify"**

Netlify will ask you to configure DNS.

### 3.2: Configure DNS at GoDaddy

You have two options:

#### Option A: Use Netlify DNS (RECOMMENDED - Easier)

1. In Netlify, under Domain settings, click **"Set up Netlify DNS"**
2. Netlify provides you with nameservers (e.g., `dns1.p01.nsone.net`)
3. Go to [GoDaddy Domains](https://account.godaddy.com/products)
4. Click on `a1serviceexpert.com` → **DNS** → **Nameservers**
5. Click **"Change"** → **"Enter my own nameservers"**
6. Paste the Netlify nameservers
7. Save

DNS propagation: 15 minutes - 48 hours (usually <1 hour)

#### Option B: Use GoDaddy DNS (Manual)

1. Go to [GoDaddy DNS Management](https://account.godaddy.com/products)
2. Click `a1serviceexpert.com` → **DNS** → **Manage DNS**
3. Add/modify these records:

   **A Record:**
   - Type: `A`
   - Name: `@`
   - Value: `75.2.60.5` (Netlify load balancer)
   - TTL: 600

   **CNAME Record:**
   - Type: `CNAME`
   - Name: `www`
   - Value: `your-site-name.netlify.app`
   - TTL: 600

4. Save changes

DNS propagation: 15 minutes - 48 hours

### 3.3: Verify DNS & Enable HTTPS

1. Wait 15-30 minutes for DNS to propagate
2. Check status: [https://www.whatsmydns.net/](https://www.whatsmydns.net/)
3. In Netlify → **Domain settings**, click **"Verify DNS configuration"**
4. Once verified, click **"Enable HTTPS"**
5. Netlify auto-provisions SSL certificate (free via Let's Encrypt)

✅ **Your site is now live at** `https://a1serviceexpert.com`

---

## 📧 Step 4: Configure Email Confirmations

### 4.1: Add Email Environment Variables

1. In Netlify dashboard → **Site settings** → **Environment variables**
2. Click **"Add a variable"**
3. Add these TWO variables:

**Variable 1:**
- **Key:** `EMAIL_USER`
- **Value:** `support@a1serviceexpert.com`

**Variable 2:**
- **Key:** `EMAIL_PASSWORD`
- **Value:** Your Microsoft 365 email password

**IMPORTANT:** For better security, use an **App Password**:
- Go to [Microsoft Account Security](https://account.microsoft.com/security)
- Create an app password named "Netlify Forms"
- Use that generated password instead of your regular password

4. Click **"Save"**
5. **Redeploy** the site for changes to take effect:
   - Go to **Deploys** → click **"Trigger deploy"** → **"Deploy site"**

### 4.2: Configure Form Notifications

This ensures YOU receive emails when customers submit the contact form.

1. In Netlify → **Site settings** → **Forms**
2. Click **"Form notifications"**
3. Click **"Add notification"** → **"Email notification"**
4. Configure:
   - **Event:** New form submission
   - **Form:** `contact` (appears after first form submission)
   - **Email to notify:** `support@a1serviceexpert.com`
5. Click **"Save"**

**Add Multiple Emails (Optional):**
- Repeat step 3-5 for each additional email
- You can add personal Gmail, Outlook, etc.

### 4.3: Test Contact Form

1. Go to `https://a1serviceexpert.com/contact`
2. Fill in and submit the form
3. **Verify:**
   - ✅ You receive notification at `support@a1serviceexpert.com`
   - ✅ Customer receives auto-reply confirmation email
   - ✅ Submission appears in Netlify dashboard → **Forms**

**See detailed instructions:** [FORM_EMAIL_SETUP.md](FORM_EMAIL_SETUP.md)

---

## 📊 Step 5: Set Up Google Analytics 4

### 5.1: Create GA4 Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with Google account
3. Click **Admin** (bottom left) → **Create Property**
4. Fill in:
   - **Property name:** A1 Service Expert
   - **Time zone:** United Kingdom
   - **Currency:** Pound Sterling (£)
5. Click **Next**
6. **Industry:** Automotive
7. **Business size:** Small (1-10)
8. Click **Create**
9. Accept Terms of Service

### 5.2: Set Up Data Stream

1. Select platform: **Web**
2. Enter:
   - **Website URL:** `https://a1serviceexpert.com`
   - **Stream name:** A1 Service Expert Website
3. Click **"Create stream"**
4. **COPY YOUR MEASUREMENT ID** (format: `G-XXXXXXXXXX`)

### 5.3: Add Measurement ID to Netlify

1. In Netlify → **Site settings** → **Environment variables**
2. Click **"Add a variable"**
3. Add:
   - **Key:** `PUBLIC_GA_MEASUREMENT_ID`
   - **Value:** `G-XXXXXXXXXX` (your actual ID)
4. Click **"Save"**
5. **Redeploy** the site

### 5.4: Verify Analytics Working

1. Go to Google Analytics → **Reports** → **Realtime**
2. Visit your website: `https://a1serviceexpert.com`
3. You should see yourself as an active user within 30 seconds

**See detailed instructions:** [GOOGLE_ANALYTICS_SETUP.md](GOOGLE_ANALYTICS_SETUP.md)

---

## 🔍 Step 6: Submit to Google Search Console

### 6.1: Add Property

1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Click **"Add property"**
3. Enter: `https://a1serviceexpert.com`
4. **Verify ownership** (multiple methods):
   - **DNS verification** (if using Netlify DNS)
   - **HTML file upload** to `/public/`
   - **HTML meta tag** (add to `<head>`)

### 6.2: Submit Sitemap

1. Once verified, go to **Sitemaps** (left sidebar)
2. Enter sitemap URL: `https://a1serviceexpert.com/sitemap-index.xml`
3. Click **"Submit"**

Google will now:
- Crawl your site
- Index all pages
- Show in search results (takes 1-7 days)

### 6.3: Monitor Performance

Check Search Console weekly for:
- **Performance:** Clicks, impressions, CTR
- **Coverage:** Indexed pages, errors
- **Enhancements:** Mobile usability, Core Web Vitals

---

## 📱 Step 7: Update Social Media & Business Listings

### 7.1: Google My Business

1. Go to [Google Business Profile](https://business.google.com/)
2. Find your listing for "A1 Service Expert"
3. Update website URL to: `https://a1serviceexpert.com`
4. Add link in description
5. Post an update about your new website

### 7.2: Facebook Page

1. Go to your Facebook business page
2. Update **Website** field: `https://a1serviceexpert.com`
3. Create a post announcing the new website
4. Pin the post to the top

### 7.3: Instagram

1. Update bio to include: `🌐 a1serviceexpert.com`
2. Add website link (if you have 10k+ followers)
3. Post about the new website

### 7.4: Other Directories

Update your website URL on:
- Yelp
- Yell.com
- Thomson Local
- AutoTrader (if listed)
- Any other automotive directories

---

## ✅ Step 8: Post-Deployment Testing

### 8.1: Test All Pages

Visit and verify each page works:

- [ ] Home: `https://a1serviceexpert.com/`
- [ ] Services: `/services`
- [ ] All service pages: `/car-servicing`, `/air-conditioning`, etc.
- [ ] About: `/about`
- [ ] Contact: `/contact`
- [ ] FAQ: `/faq`
- [ ] Gallery: `/gallery`
- [ ] Legal pages: `/terms`, `/privacy`, `/cookie-policy`

### 8.2: Test Features

- [ ] Contact form submission (receive emails)
- [ ] Call buttons work on mobile
- [ ] WhatsApp links open correctly
- [ ] Google Maps embed loads
- [ ] All images display properly
- [ ] Mobile navigation menu works
- [ ] Cookie consent banner appears

### 8.3: Test Performance

1. **PageSpeed Insights**
   - Go to: [https://pagespeed.web.dev/](https://pagespeed.web.dev/)
   - Enter: `https://a1serviceexpert.com`
   - Target score: 90+ mobile, 95+ desktop

2. **Mobile-Friendly Test**
   - Go to: [https://search.google.com/test/mobile-friendly](https://search.google.com/test/mobile-friendly)
   - Enter your URL
   - Should pass all checks

3. **SSL Certificate**
   - Go to: [https://www.ssllabs.com/ssltest/](https://www.ssllabs.com/ssltest/)
   - Enter: `a1serviceexpert.com`
   - Should get A or A+ rating

### 8.4: Test on Devices

- [ ] Desktop (Chrome, Firefox, Safari)
- [ ] Mobile (iPhone Safari, Android Chrome)
- [ ] Tablet (iPad)
- [ ] Different screen sizes

---

## 🔄 Step 9: Set Up Continuous Deployment

Your site is now configured for automatic deployment:

**How it works:**
1. You make changes to code on your Mac
2. Commit changes to Git:
   ```bash
   git add .
   git commit -m "Description of changes"
   ```
3. Push to GitHub:
   ```bash
   git push origin main
   ```
4. Netlify automatically detects the push
5. Builds and deploys in 2-3 minutes
6. Your site is live!

**View deployment status:**
- Netlify dashboard → **Deploys**
- See build logs, errors, and deploy preview

---

## 🎓 Step 10: Learn How to Make Updates

### Update Content

**Change text on a page:**
1. Open the page file in `/src/pages/` (e.g., `about.astro`)
2. Edit the text
3. Save, commit, and push to GitHub

**Add a new service page:**
1. Duplicate an existing service page (e.g., `brake-repair.astro`)
2. Rename and edit content
3. Update navigation in `Header.astro`
4. Commit and push

### Update Images

**Replace an image:**
1. Optimize your new image (see [GALLERY_IMAGES_GUIDE.md](GALLERY_IMAGES_GUIDE.md))
2. Copy to `/public/images/` with the same filename
3. Commit and push

**Add a new image:**
1. Optimize the image (WebP format, <200 KB)
2. Add to `/public/images/`
3. Reference in your page: `/images/filename.webp`
4. Add descriptive `alt` text
5. Commit and push

### Update Business Information

**Opening hours, phone number, etc.:**
1. Search codebase for the value (e.g., "07394 433889")
2. Update in all relevant files
3. Don't forget to update structured data in `StructuredData.astro`
4. Commit and push

---

## 🆘 Troubleshooting

### Site not deploying

**Check:**
- Build logs in Netlify → Deploys
- Common issues:
  - TypeScript errors → Run `npm run build` locally first
  - Missing dependencies → Run `npm install`
  - Syntax errors → Check the error message

### Form not working

**Check:**
1. Netlify dashboard → Forms (form should appear after first submission)
2. Form has `data-netlify="true"` attribute (already set)
3. Environment variables for email are correct
4. Check function logs: Netlify → Functions → `submission-created`

### Email confirmations not sending

**See:** [FORM_EMAIL_SETUP.md](FORM_EMAIL_SETUP.md) troubleshooting section

**Common fixes:**
- Verify `EMAIL_USER` and `EMAIL_PASSWORD` in Netlify
- Use app password instead of regular password
- Check Microsoft 365 account is active

### Images not loading

**Check:**
- File path is correct (case-sensitive!)
- Image exists in `/public/images/`
- Clear browser cache (Cmd+Shift+R)

### Domain not working

**Check:**
- DNS propagation: [https://www.whatsmydns.net/](https://www.whatsmydns.net/)
- Can take up to 48 hours
- Verify DNS records in GoDaddy match Netlify instructions

---

## 📚 Additional Resources

| Guide | Purpose |
|-------|---------|
| [README.md](README.md) | Project overview and tech stack |
| [DEPLOYMENT.md](DEPLOYMENT.md) | Detailed deployment instructions |
| [FORM_EMAIL_SETUP.md](FORM_EMAIL_SETUP.md) | Email confirmation setup |
| [GOOGLE_ANALYTICS_SETUP.md](GOOGLE_ANALYTICS_SETUP.md) | GA4 configuration |
| [GALLERY_IMAGES_GUIDE.md](GALLERY_IMAGES_GUIDE.md) | How to add/replace gallery images |
| [IMAGE_OPTIMIZATION_GUIDE.md](IMAGE_OPTIMIZATION_GUIDE.md) | Optimize images for SEO |
| [SEO_RECOMMENDATIONS.md](SEO_RECOMMENDATIONS.md) | Complete SEO checklist |

---

## 🎉 Congratulations!

Your A1 Service Expert website is now:
- ✅ Live on https://a1serviceexpert.com
- ✅ Optimized for SEO
- ✅ Mobile-responsive
- ✅ Sending email confirmations
- ✅ Tracking with Google Analytics
- ✅ Indexed by Google
- ✅ Fast and secure

**Next steps:**
1. Monitor Google Analytics for traffic
2. Check Search Console for indexing progress
3. Update Google My Business listing
4. Promote on social media
5. Keep content fresh (add blog posts, update services)

---

## 🔧 Maintenance Schedule

**Weekly:**
- Check Google Analytics (traffic, popular pages)
- Monitor Search Console (errors, performance)
- Review form submissions in Netlify

**Monthly:**
- Update npm dependencies: `npm update`
- Check PageSpeed score
- Review and respond to customer feedback

**Quarterly:**
- Update content (services, pricing, images)
- Add new blog posts (if applicable)
- Review and improve SEO

---

## 📞 Support

**Questions or issues?**

1. Check the relevant guide (see Additional Resources above)
2. Netlify Documentation: [https://docs.netlify.com/](https://docs.netlify.com/)
3. Astro Documentation: [https://docs.astro.build/](https://docs.astro.build/)
4. Contact Nicolae Sterian (developer)

---

**Built with ❤️ by Nicolae Sterian**
**Last updated:** November 2024
