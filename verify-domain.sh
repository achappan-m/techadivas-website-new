#!/bin/bash

echo "=== Google Cloud Domain Mapping Verification ==="
echo ""

# Check current domain mappings
echo "1. Current App Engine domain mappings:"
gcloud app domain-mappings list

echo ""
echo "2. App Engine app info:"
gcloud app describe --format="value(defaultHostname)"

echo ""
echo "3. To verify DNS propagation, run:"
echo "   nslookup yourdomain.com"
echo "   dig yourdomain.com"

echo ""
echo "4. To test HTTPS:"
echo "   curl -I https://yourdomain.com"

echo ""
echo "=== Next Steps ==="
echo "1. Add your domain in Google Cloud Console:"
echo "   https://console.cloud.google.com/appengine/settings/domains"
echo ""
echo "2. Configure DNS records at your domain registrar"
echo ""
echo "3. Wait for DNS propagation (can take up to 48 hours)"
echo ""
echo "4. SSL certificate will be automatically provisioned" 