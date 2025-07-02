# Domain Mapping Guide for Tech Adivas Website

## Overview
This guide will help you map your custom domain (e.g., `techadivas.com`) to your Google App Engine application.

## Current App Status
- **App ID**: `techadivas-website`
- **Default URL**: `https://techadivas-website.uc.r.appspot.com`
- **Region**: `us-central`

## Step-by-Step Process

### 1. Add Custom Domain in Google Cloud Console

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Select your project: `techadivas-website`
3. Navigate to **App Engine** → **Settings** → **Custom Domains**
4. Click **"Add Custom Domain"**
5. Enter your domain (e.g., `techadivas.com`)
6. Click **"Continue"**

### 2. Configure DNS Records

Add these records to your domain registrar's DNS settings:

#### A Records (for root domain):
```
Type: A
Name: @
Value: 216.239.32.21
TTL: 3600

Type: A
Name: @
Value: 216.239.34.21
TTL: 3600

Type: A
Name: @
Value: 216.239.36.21
TTL: 3600

Type: A
Name: @
Value: 216.239.38.21
TTL: 3600
```

#### CNAME Record (for www subdomain):
```
Type: CNAME
Name: www
Value: ghs.googlehosted.com.
TTL: 3600
```

### 3. Verification Commands

```bash
# Check domain mappings
gcloud app domain-mappings list

# Verify DNS propagation
nslookup yourdomain.com
dig yourdomain.com

# Test HTTPS
curl -I https://yourdomain.com
```

### 4. SSL Certificate

- Google Cloud automatically provisions SSL certificates
- Certificates are managed by Google
- No additional configuration needed

### 5. Troubleshooting

#### Common Issues:

1. **DNS Propagation Delay**
   - Can take up to 48 hours
   - Use online DNS checkers to verify

2. **SSL Certificate Issues**
   - Wait 24-48 hours after DNS setup
   - Check certificate status in Google Cloud Console

3. **Domain Not Found**
   - Verify DNS records are correct
   - Check TTL settings
   - Ensure domain is added in App Engine settings

### 6. Testing Your Setup

Once configured, test these URLs:
- `https://yourdomain.com` (root domain)
- `https://www.yourdomain.com` (www subdomain)
- Both should redirect to your React app

## Support Resources

- [Google Cloud Domain Mapping Documentation](https://cloud.google.com/appengine/docs/standard/python/mapping-custom-domains)
- [DNS Configuration Guide](https://cloud.google.com/appengine/docs/standard/python/mapping-custom-domains#dns)
- [SSL Certificate Management](https://cloud.google.com/appengine/docs/standard/python/mapping-custom-domains#ssl) 