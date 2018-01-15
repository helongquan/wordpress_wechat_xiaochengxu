#!/bin/bash
git add .
echo "already add to local resposity"
git commit -m "$1"
echo "finish commit"
git push origin master
echo "push to remote successed!"
