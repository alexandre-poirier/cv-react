#!/usr/bin/env bash

# Adapted from https://blog.doit-intl.com/deploying-a-react-app-to-googles-app-engine-6efa8f4732c7
# Copy into parent folder and run from there

# enable GCP apis
gcloud services enable appengine.googleapis.com

export APP_NAME="cv-alex"
export PROJECT_ID="cv-alex1212"

cd $APP_NAME

# install app
npm install
npm audit fix # just in case vulnerabilities

# build app for production (creates build/ folder)
npm run-script build

# create app engine config file (app.yaml)
cat > app.yaml << EOF
env: standard
runtime: nodejs14
instance_class: F1

automatic_scaling:
  target_cpu_utilization: 0.65
  min_instances: 0
  max_instances: 1
  min_pending_latency: 30ms
  max_pending_latency: automatic
  max_concurrent_requests: 50

service: default
handlers:
  - url: /static
    static_dir: build/static
  - url: /(.*\.(json|ico|js))$
    static_files: build/\1
    upload: build/.*\.(json|ico|js)$
  - url: .*
    static_files: build/index.html
    upload: build/index.html
EOF

# deploy app to app engine (if first deploy potentially select region)
gcloud app deploy --project=$PROJECT_ID --quiet

# wait several minutes then visit the URL provided in output
gcloud app browse -s $APP_NAME