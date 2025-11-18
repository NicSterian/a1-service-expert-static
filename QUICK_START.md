# Quick Start - Deploy in 30 Minutes

This is your **fast-track guide** to get your website live. For detailed instructions, see [COMPLETE_SETUP_GUIDE.md](COMPLETE_SETUP_GUIDE.md).

---

## ⚡ 30-Minute Deployment

### Step 1: Install Dependencies (2 min)
```bash
cd /Users/nicolaesterian/Projects/a1-service-expert-static
npm install
```

### Step 2: Deploy to Netlify (5 min)
1. Go to [app.netlify.com](https://app.netlify.com/)
2. **Add new site** → **Import from GitHub**
3. Select repo: `NicSterian/a1-service-expert-static`
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click **Deploy site**

Wait 2-3 minutes for build ☕

### Step 3: Connect Domain (10 min)
1. In Netlify → **Domain settings** → **Add custom domain**
2. Enter: `a1serviceexpert.com`
3. Follow DNS instructions for GoDaddy
4. Wait for verification
5. Enable HTTPS (automatic)

### Step 4: Set Up Email (5 min)
1. Netlify → **Environment variables** → Add:
   - `EMAIL_USER` = `support@a1serviceexpert.com`
   - `EMAIL_PASSWORD` = Your Microsoft 365 password
2. **Redeploy** site
3. Netlify → **Forms** → **Add email notification**
4. Enter your email to receive form submissions

### Step 5: Test Everything (5 min)
- ✅ Visit site: `https://a1serviceexpert.com`
- ✅ Test contact form (submit, check email)
- ✅ Test on mobile
- ✅ Click all buttons

### Step 6: Google Analytics (3 min)
1. Get GA4 Measurement ID from [analytics.google.com](https://analytics.google.com/)
2. Add to Netlify environment variables:
   - `PUBLIC_GA_MEASUREMENT_ID` = `G-XXXXXXXXXX`
3. Redeploy

---

## ✅ Done! Your site is live!

**Next steps:**
1. Replace gallery placeholder images (see [GALLERY_IMAGES_GUIDE.md](GALLERY_IMAGES_GUIDE.md))
2. Submit sitemap to Google Search Console
3. Optimize Google My Business
4. Get customer reviews

**Full instructions:** [COMPLETE_SETUP_GUIDE.md](COMPLETE_SETUP_GUIDE.md)

---

## 🆘 Quick Troubleshooting

**Build fails?**
- Run `npm run build` locally to check errors
- Check build logs in Netlify

**Form not working?**
- Check environment variables are set
- Test after redeploying

**Emails not sending?**
- Verify `EMAIL_USER` and `EMAIL_PASSWORD`
- Use app password (not regular password)
- See [FORM_EMAIL_SETUP.md](FORM_EMAIL_SETUP.md)

**Domain not working?**
- DNS can take up to 48 hours
- Check [whatsmydns.net](https://www.whatsmydns.net/)

---

## 📚 All Documentation

| File | Purpose |
|------|---------|
| **[IMPROVEMENTS_SUMMARY.md](IMPROVEMENTS_SUMMARY.md)** | Overview of all improvements |
| **[COMPLETE_SETUP_GUIDE.md](COMPLETE_SETUP_GUIDE.md)** | Master deployment guide |
| **[FORM_EMAIL_SETUP.md](FORM_EMAIL_SETUP.md)** | Email confirmation setup |
| **[SEO_RECOMMENDATIONS.md](SEO_RECOMMENDATIONS.md)** | Complete SEO guide |
| **[GALLERY_IMAGES_GUIDE.md](GALLERY_IMAGES_GUIDE.md)** | How to add/replace images |
| **[IMAGE_OPTIMIZATION_GUIDE.md](IMAGE_OPTIMIZATION_GUIDE.md)** | Optimize images for SEO |

---

**Questions?** Check the relevant guide above or see [COMPLETE_SETUP_GUIDE.md](COMPLETE_SETUP_GUIDE.md)

**Ready to go? Let's deploy! 🚀**
