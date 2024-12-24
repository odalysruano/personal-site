# How to Push to Prod:
This code base follows a simple prod deployment method. All changes can be seen locally via `npm start`.

In order to push to prod, make sure all commits have been uploaded to upstream, there is nothing else to commit, and run `npm run build`.

Commit this build with "push to prod" and upload those changes to upstream. Run git status to ensure there is nothing else to commit. The changes will be reflected on the live site in 24 hours.

For instant changes, check that AWS CodePipeline has run successfully and then create an invalidation in the AWS CloudFront console by entering the path you want to invalidate (e.g., /index.html or /* for all content).
