#!/usr/bin/env bash

npm run build &&
cd build/ &&
git init &&
git add . &&
git commit -m "deploy" &&
git remote add origin git@github.com:AzusaRin/TomatoBilling-website.git &&
git branch -M main &&
git push -u origin main -f
cd -

