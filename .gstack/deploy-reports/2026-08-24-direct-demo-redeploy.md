# Direct demo redeploy report

- Target: `http://47.105.113.38/shengya-demo/`
- Method: isolated Docker images and Nginx path location
- Release: `20260824-150820`
- Frontend image: `shengya-demo-frontend:20260824-150820b`
- Backend image: `shengya-demo-backend:20260824-150820`
- CI: local admin build, frontend lint and typecheck passed
- Canary: isolated pre-switch frontend/backend containers passed
- Verification: homepage, doctors, contact, content API, doctors API, and 33 media URLs passed
- Existing site: root path returned HTTP 200 after deployment
- Status: deployed and verified
