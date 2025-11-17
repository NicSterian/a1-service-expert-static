# A1 Service Expert Static Website - Deployment Guide

This guide will walk you through deploying the A1 Service Expert static website to Netlify.

## 📋 Prerequisites

- GitHub account (already set up)
- Netlify account (free tier is sufficient)
- Domain: a1serviceexpert.com

## 🚀 Deployment Steps

### Step 1: Push Code to GitHub

The code is currently in the development environment. To get it on your Mac and GitHub:

1. **Clone the repository to your Mac:**
   ```bash
   cd /Users/nicolaesterian/Projects
   git clone https://github.com/NicSterian/a1-service-expert-static.git
   cd a1-service-expert-static
   ```

2. **Verify the files:**
   ```bash
   ls -la
   ```
   You should see all the project files including `src/`, `public/`, `package.json`, etc.

### Step 2: Deploy to Netlify

#### Option A: Deploy via Netlify Dashboard (Recommended)

1. Go to [https://app.netlify.com/](https://app.netlify.com/)
2. Sign up or log in
3. Click **"Add new site"** → **"Import an existing project"**
4. Choose **"Deploy with GitHub"**
5. Authorize Netlify to access your GitHub account
6. Select the repository: `NicSterian/a1-service-expert-static`
7. Configure build settings:
   - **Branch to deploy:** `main`
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
8. Click **"Deploy site"**

Netlify will now:
- Install dependencies
- Build your site
- Deploy it to a temporary URL (e.g., `random-name-123456.netlify.app`)

#### Option B: Deploy via Netlify CLI

If you prefer using the command line:

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Initialize Netlify site:**
   ```bash
   cd /Users/nicolaesterian/Projects/a1-service-expert-static
   netlify init
   ```

4. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

### Step 3: Configure Custom Domain

1. In Netlify dashboard, go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter: `a1serviceexpert.com`
4. Netlify will provide DNS instructions

#### Configure DNS (GoDaddy):

1. Log in to your GoDaddy account
2. Go to **My Products** → **DNS**
3. Update DNS records:

   **If using Netlify DNS (Recommended):**
   - Point nameservers to Netlify's nameservers (provided in Netlify dashboard)

   **If using GoDaddy DNS:**
   - **A Record:**
     - Type: `A`
     - Name: `@`
     - Value: `75.2.60.5` (Netlify's load balancer IP)
   - **CNAME Record (www):**
     - Type: `CNAME`
     - Name: `www`
     - Value: `your-site-name.netlify.app`

4. Wait for DNS propagation (can take up to 48 hours, usually 15-30 minutes)

### Step 4: Enable HTTPS

1. In Netlify dashboard → **Domain settings**
2. Click **"Verify DNS configuration"**
3. Once verified, click **"Enable HTTPS"**
4. Netlify will automatically provision an SSL certificate (free via Let's Encrypt)

### Step 5: Configure Environment Variables

1. In Netlify dashboard → **Site settings** → **Environment variables**
2. Add the following variable:
   - **Key:** `PUBLIC_GA_MEASUREMENT_ID`
   - **Value:** (leave empty for now, or add your GA4 ID later)
3. Click **Save**

**Note:** See `GOOGLE_ANALYTICS_SETUP.md` for how to get your GA4 Measurement ID.

### Step 6: Set Up Form Notifications

The contact form will automatically work with Netlify Forms.

1. Go to **Site settings** → **Forms**
2. Click **"Form notifications"**
3. Add **Email notification:**
   - **Email to notify:** `support@a1serviceexpert.com`
   - **Event to listen for:** New form submission
4. Optional: Enable spam filtering
   - **reCAPTCHA:** Can be added if spam becomes an issue

### Step 7: Test Your Deployment

1. Visit `https://a1serviceexpert.com` (or your Netlify URL)
2. Test all pages:
   - ✅ Home page loads correctly
   - ✅ All service pages work
   - ✅ Contact form submits successfully
   - ✅ Call and WhatsApp buttons work on mobile
   - ✅ Navigation works
   - ✅ Footer displays correctly

3. Test contact form:
   - Fill in the form at `/contact`
   - Submit
   - Check if email arrives at `support@a1serviceexpert.com`
   - Check Netlify dashboard → Forms for submission

4. Test on mobile devices:
   - Open on iPhone/Android
   - Test navigation menu
   - Test Call/WhatsApp buttons
   - Verify responsive layout

## 🔄 Continuous Deployment

Netlify is now set up for continuous deployment:

1. **Make changes** to your code locally
2. **Commit** to git:
   ```bash
   git add .
   git commit -m "Your commit message"
   ```
3. **Push** to GitHub:
   ```bash
   git push origin main
   ```
4. **Netlify automatically rebuilds** and deploys (takes 2-3 minutes)

## 📊 Monitoring

### Netlify Analytics (Optional, Paid)

Netlify offers server-side analytics (not affected by ad blockers):
- Cost: ~$9/month
- Provides traffic data without cookies
- Alternative to Google Analytics

### Google Analytics (Free)

See `GOOGLE_ANALYTICS_SETUP.md` for setup instructions.

## 🛠️ Common Issues

### Build Fails

**Error:** "npm ERR! Missing script: build"
- **Solution:** Ensure `package.json` has `"build": "astro check && astro build"`

**Error:** "Module not found"
- **Solution:** Delete `node_modules` and `package-lock.json`, run `npm install`

### Contact Form Not Working

**Issue:** Form doesn't submit
- **Check 1:** Form has `data-netlify="true"` attribute
- **Check 2:** Form has `name="contact"` attribute
- **Check 3:** Hidden input with `name="form-name"` and `value="contact"`

**Issue:** Not receiving emails
- **Check:** Netlify dashboard → Forms → Form notifications
- **Verify:** `support@a1serviceexpert.com` is set as notification email

### Domain Not Working

**Issue:** Site not accessible on custom domain
- **Check 1:** DNS records are correctly configured
- **Check 2:** Wait for DNS propagation (up to 48 hours)
- **Check 3:** Use [WhatsMyDNS](https://www.whatsmydns.net/) to check propagation

### HTTPS Not Working

**Issue:** SSL certificate not provisioning
- **Ensure:** DNS is fully propagated first
- **Wait:** Up to 24 hours for first certificate
- **Contact:** Netlify support if issues persist

## 📱 Post-Deployment Checklist

After successful deployment:

- [ ] Test all pages load correctly
- [ ] Verify contact form works and emails arrive
- [ ] Test on mobile devices (iOS and Android)
- [ ] Check Call/WhatsApp buttons work
- [ ] Verify navigation works properly
- [ ] Test all service pages
- [ ] Check footer links work
- [ ] Verify opening hours display correctly
- [ ] Set up Google Analytics (if desired)
- [ ] Submit sitemap to Google Search Console
- [ ] Test site speed with [PageSpeed Insights](https://pagespeed.web.dev/)

## 🎯 Next Steps

1. **Google Search Console:**
   - Add property for `a1serviceexpert.com`
   - Submit sitemap: `https://a1serviceexpert.com/sitemap-index.xml`
   - Monitor indexing and search performance

2. **Google My Business:**
   - Ensure your Google Business Profile is up to date
   - Add website URL: `https://a1serviceexpert.com`

3. **Social Media:**
   - Update Facebook page with new website URL
   - Update Instagram bio with website link

4. **Marketing Materials:**
   - Update business cards, flyers, etc. with new website
   - Update email signatures

## 💡 Tips

- **Backup:** GitHub is your backup - all code is version controlled
- **Rollback:** Can rollback to previous deployments in Netlify dashboard
- **Preview:** Netlify creates preview deployments for branches/PRs
- **Logs:** Check build logs in Netlify for any issues

## 🆘 Support

**Netlify Support:**
- Documentation: [https://docs.netlify.com/](https://docs.netlify.com/)
- Community: [https://answers.netlify.com/](https://answers.netlify.com/)

**DNS/Domain Issues:**
- GoDaddy Support: Contact if DNS issues persist

**Website Updates:**
- Contact Nicolae Sterian (developer)

---

**Congratulations!** 🎉 Your A1 Service Expert website is now live!
