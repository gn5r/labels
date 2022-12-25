#!/bin/bash

yarn run build

if [ -z $GITHUB_TOKEN ]; then
  echo "環境変数「GITHUB_TOKEN」が定義されていません" >&2
  exit -1
fi

echo labelを登録します...
yarn github-label-setup --token $GITHUB_TOKEN --labels dist/label.json gn5r/labels