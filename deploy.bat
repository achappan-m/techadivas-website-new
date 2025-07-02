@echo off
REM Tech Adivas Website - Google Cloud Deployment Script for Windows
REM Usage: deploy.bat [app-engine|cloud-run|gke]

set PROJECT_ID=techadivas-website
set REGION=us-central1
set SERVICE_NAME=techadivas-website
set GCLOUD_PATH=C:\Users\Achappan\AppData\Local\Google\Cloud SDK\google-cloud-sdk\bin\gcloud.cmd

echo 🚀 Starting deployment to Google Cloud Platform...

REM Set up Google Cloud SDK environment
if exist "%GCLOUD_PATH%" (
    echo ✅ Found Google Cloud SDK at: %GCLOUD_PATH%
) else (
    echo ❌ Google Cloud SDK not found at: %GCLOUD_PATH%
    echo Please update the GCLOUD_PATH variable in this script.
    exit /b 1
)

REM Check if user is authenticated
"%GCLOUD_PATH%" auth list --filter=status:ACTIVE --format="value(account)" | findstr /r "." >nul
if %errorlevel% neq 0 (
    echo 🔐 Please authenticate with Google Cloud:
    "%GCLOUD_PATH%" auth login
)

REM Set the project
echo 📋 Setting project to: %PROJECT_ID%
"%GCLOUD_PATH%" config set project %PROJECT_ID%

REM Build the application
echo 🔨 Building the application...
call npm ci
call npm run build

REM Deploy based on argument
if "%1"=="app-engine" (
    echo 🌐 Deploying to Google App Engine...
    "%GCLOUD_PATH%" app deploy app.yaml --quiet
    echo ✅ Deployed to App Engine!
    echo 🌍 Your app is available at: https://%PROJECT_ID%.appspot.com
) else if "%1"=="cloud-run" (
    echo 🏃 Deploying to Google Cloud Run...
    
    REM Build and push Docker image
    echo 🐳 Building Docker image...
    docker build -t gcr.io/%PROJECT_ID%/%SERVICE_NAME% .
    
    echo 📤 Pushing to Container Registry...
    docker push gcr.io/%PROJECT_ID%/%SERVICE_NAME%
    
    REM Deploy to Cloud Run
    echo 🚀 Deploying to Cloud Run...
    "%GCLOUD_PATH%" run deploy %SERVICE_NAME% --image gcr.io/%PROJECT_ID%/%SERVICE_NAME% --platform managed --region %REGION% --allow-unauthenticated --port 80 --memory 512Mi --cpu 1 --max-instances 10 --quiet
    
    echo ✅ Deployed to Cloud Run!
    for /f "tokens=*" %%i in ('"%GCLOUD_PATH%" run services describe %SERVICE_NAME% --region=%REGION% --format="value(status.url)"') do set SERVICE_URL=%%i
    echo 🌍 Your app is available at: %SERVICE_URL%
) else if "%1"=="gke" (
    echo ☸️ Deploying to Google Kubernetes Engine...
    echo ⚠️  This requires a GKE cluster to be set up first.
    echo Please ensure you have a GKE cluster running.
    
    REM Apply Kubernetes manifests
    kubectl apply -f k8s/
    
    echo ✅ Deployed to GKE!
) else (
    echo 🌐 Deploying to Google App Engine (default)...
    "%GCLOUD_PATH%" app deploy app.yaml --quiet
    echo ✅ Deployed to App Engine!
    echo 🌍 Your app is available at: https://%PROJECT_ID%.appspot.com
)

echo 🎉 Deployment completed successfully!
echo 📊 Monitor your deployment in the Google Cloud Console 