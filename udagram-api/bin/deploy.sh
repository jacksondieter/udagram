echo "\ndeploy:\n  artifact: www/api.zip" >> .elasticbeanstalk/config.yml && eb deploy --staged