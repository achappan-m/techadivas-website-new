#!/bin/bash

# Tech Adivas Website - Google Cloud Deployment Script
# Usage: ./deploy.sh [app-engine|cloud-run|gke]

set -e

PROJECT_ID="your-project-id"  # Replace with your actual project ID
REGION="us-central1"
SERVICE_NAME="techadivas-website"

echo "🚀 Starting deployment to Google Cloud Platform..."

# Check if gcloud is installed
if ! command -v gcloud &> /dev/null; then
    echo "❌ Google Cloud SDK is not installed. Please install it first."
    echo "Visit: https://cloud.google.com/sdk/docs/install"
    exit 1
fi

# Check if user is authenticated
if ! gcloud auth list --filter=status:ACTIVE --format="value(account)" | grep -q .; then
    echo "🔐 Please authenticate with Google Cloud:"
    gcloud auth login
fi

# Set the project
echo "📋 Setting project to: $PROJECT_ID"
gcloud config set project $PROJECT_ID

# Build the application
echo "🔨 Building the application..."
npm ci
npm run build

# Deploy based on argument
case "${1:-app-engine}" in
    "app-engine")
        echo "🌐 Deploying to Google App Engine..."
        gcloud app deploy app.yaml --quiet
        echo "✅ Deployed to App Engine!"
        echo "🌍 Your app is available at: https://$PROJECT_ID.appspot.com"
        ;;
    
    "cloud-run")
        echo "🏃 Deploying to Google Cloud Run..."
        
        # Build and push Docker image
        echo "🐳 Building Docker image..."
        docker build -t gcr.io/$PROJECT_ID/$SERVICE_NAME .
        
        echo "📤 Pushing to Container Registry..."
        docker push gcr.io/$PROJECT_ID/$SERVICE_NAME
        
        # Deploy to Cloud Run
        echo "🚀 Deploying to Cloud Run..."
        gcloud run deploy $SERVICE_NAME \
            --image gcr.io/$PROJECT_ID/$SERVICE_NAME \
            --platform managed \
            --region $REGION \
            --allow-unauthenticated \
            --port 80 \
            --memory 512Mi \
            --cpu 1 \
            --max-instances 10 \
            --quiet
        
        echo "✅ Deployed to Cloud Run!"
        echo "🌍 Your app is available at: $(gcloud run services describe $SERVICE_NAME --region=$REGION --format='value(status.url)')"
        ;;
    
    "gke")
        echo "☸️ Deploying to Google Kubernetes Engine..."
        echo "⚠️  This requires a GKE cluster to be set up first."
        echo "Please ensure you have a GKE cluster running."
        
        # Apply Kubernetes manifests
        kubectl apply -f k8s/
        
        echo "✅ Deployed to GKE!"
        ;;
    
    *)
        echo "❌ Invalid deployment option. Use: app-engine, cloud-run, or gke"
        exit 1
        ;;
esac

echo "🎉 Deployment completed successfully!"
echo "📊 Monitor your deployment in the Google Cloud Console" 