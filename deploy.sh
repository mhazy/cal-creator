yarn build
aws s3 rm s3://${CE_DEPLOY_BUCKET}/dist --recursive
aws s3 sync ./build s3://${CE_DEPLOY_BUCKET}/dist --acl public-read --cache-control "public, max-age=86400"
aws s3api copy-object --copy-source ${CE_DEPLOY_BUCKET}/dist/index.html --cache-control "public, max-age=60" --content-type "text/html" --bucket ${CE_DEPLOY_BUCKET} --key dist/index.html --metadata-directive="REPLACE"

