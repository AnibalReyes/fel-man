#!/bin/bash
SANITY_PROJECT_ID="b1qmda5a"
SANITY_DATASET="production"
SANITY_TOKEN="skwGSm1DspLzRBDkq3eCmCgBbD4fnAj77v5ne9F9emSalE6O6UmrtywLzs0zcs2YYfrmcdyCvMyAZBbEHL05qmjtPxajjB6H1gV66YqFxZHTEd6z3Du4QxGlIafRhr1Nr1j3vRclES9U5EYmxiBFi34TAM7wh3TgIi25uKkFuuwLql18B6Uu"
BLOGS_PATH="src/content/docs/guides"


curl -s -o new_blogs.json "https://$SANITY_PROJECT_ID.api.sanity.io/v1/data/export/$SANITY_DATASET?token=$SANITY_TOKEN"

node addDocs.js

# Añadir, commitear y empujar los cambios
cd $BLOGS_PATH
git add .
git commit -m "Update blog posts from Sanity"
git push origin main
