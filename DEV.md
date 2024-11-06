# How to Push to Prod:
This code base follows a simple prod deployment method. All changes can be seen locally via `npm start`.

In order to push to prod, make sure all commits have been uploaded to upstream, and run `npm run build`.

Commit those changes and upload those changes to upstream. The changes will be reflected in 24 hours.

For instant changes, create an invalidation in AWS CloudFront console by entering the path you want to invalidate 
(e.g., /index.html or /* for all content).
