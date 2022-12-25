#!/bin/bash

yarn run build

if [ -z $GITHUB_TOKEN ]; then
  echo "環境変数「GITHUB_TOKEN」が定義されていません" >&2
  exit -1
fi

echo dry-runを実行します...
yarn github-label-setup --dry-run --token $GITHUB_TOKEN --labels dist/label.json gn5r/labels