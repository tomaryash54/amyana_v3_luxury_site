# Instagram Feed Setup Guide

## Quick Start
This project now features a dynamic Instagram feed that rotates through your latest posts with smooth animations. Here's how to set it up:

---

## Step 1: Create a Meta Developer Account
1. Go to [developers.facebook.com](https://developers.facebook.com)
2. Click "Get Started" and sign in with your Facebook account
3. Complete the verification process

---

## Step 2: Create an App
1. In the Developer Dashboard, click "Create App"
2. Choose app type: **Business**
3. Fill in app details:
   - **App Name**: `Amyana Instagram Feed` (or similar)
   - **Contact Email**: your email
   - **App Purpose**: Choose "Manage my business"
4. Click "Create App"

---

## Step 3: Get Your Access Token (Easiest Method)
The simplest way is to use the **Graph API Explorer**:

1. Go to [Graph API Explorer](https://developers.facebook.com/tools/explorer/)
2. In the top dropdown on the right, select your newly created app
3. In the bottom left, click "Get User Access Token"
4. Grant these permissions:
   - `instagram_basic`
   - `instagram_business_content_publish` (optional for later)
5. Copy the **access token** shown

**Note**: This token is short-lived. See "Token Expiration" section below.

---

## Step 4: Get Your Instagram Account ID
1. Stay in the Graph API Explorer
2. In the query field at the top, paste:
   ```
   /me?fields=instagram_business_account
   ```
3. Hit "Submit"
4. Look for the `instagram_business_account` section (only appears if you have a business account)
5. Copy the `id` value

**Important**: You need an **Instagram Business Account**, not a personal account.
- To convert: Go to Instagram → Settings → Account → Switch to Professional Account → Choose "Business"

---

## Step 5: Create Long-Lived Token (Recommended for Production)
Short-lived tokens expire in ~1 hour. For production, generate a long-lived token:

1. Get your **App Secret** from Settings → Basic in your app dashboard
2. Use this endpoint in your browser URL bar:
   ```
   https://graph.instagram.com/v18.0/oauth/access_token?grant_type=fb_exchange_token&client_id={APP_ID}&client_secret={APP_SECRET}&access_token={SHORT_LIVED_TOKEN}
   ```
   Replace:
   - `{APP_ID}` → Your App ID (from Settings → Basic)
   - `{APP_SECRET}` → Your App Secret (from Settings → Basic)
   - `{SHORT_LIVED_TOKEN}` → The token from Step 3

3. Paste the URL in your browser
4. Copy the returned `access_token` from the JSON response

This token is valid for **~60 days**.

---

## Step 6: Configure Your Application

### Local Development
1. Create a `.env.local` file in the project root (copy from `.env.local.example`):
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` and add your token:
   ```
   VITE_INSTAGRAM_ACCESS_TOKEN=your_long_lived_token_here
   ```

3. Start your dev server:
   ```bash
   npm run dev
   ```

### Production (Vercel)
1. Go to your Vercel project dashboard
2. Go to **Settings → Environment Variables**
3. Add a new variable:
   - **Name**: `VITE_INSTAGRAM_ACCESS_TOKEN`
   - **Value**: Your long-lived access token
4. **Important**: Add to these environments:
   - ✅ Production
   - ✅ Preview
   - ✅ Development
5. Redeploy your project

---

## Token Expiration & Refresh

- **Short-lived tokens**: Expire in **1 hour**
- **Long-lived tokens**: Expire in **~60 days**

To refresh a long-lived token:
1. Use the same endpoint from Step 5 with your current long-lived token
2. This gives you another 60-day window

---

## Features

✨ **What You Get:**
- Dynamic carousel of your latest Instagram posts
- Smooth fade animations between posts
- Manual navigation with arrow buttons
- Thumbnail indicators for quick jumping
- Responsive design (mobile-friendly)
- Automatic 5-second rotation
- Fallback message if token is missing

🎨 **Customization:**
- Edit rotation speed in `src/components/InstagramFeed.jsx` (line ~70, `5000` = 5 seconds)
- Adjust number of posts shown (line ~42, `slice(0, 12)`)
- Modify carousel styling in `src/index.css` (search for `.instagram-feed-container`)

---

## Troubleshooting

### Feed not loading?
- ❌ Check that token is in `.env.local` (dev) or Vercel Environment Variables (production)
- ❌ Verify token hasn't expired (> 60 days old)
- ❌ Ensure you have an Instagram **Business Account** (not personal)
- ❌ Check browser console for error messages

### Token expired?
- Generate a new long-lived token using Step 5
- Update in `.env.local` or Vercel

### No posts showing?
- You may not have public posts on your business account
- Create a few posts and ensure they're public/not archived

---

## Next Steps
1. Set up your credentials from Steps 1-5
2. Add token to `.env.local` (local) or Vercel (production)
3. Test locally: `npm run dev`
4. Deploy and enjoy your dynamic Instagram feed!

Questions? Check the [Meta Documentation](https://developers.facebook.com/docs/instagram-basic-display-api)
