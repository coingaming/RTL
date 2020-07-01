#!/bin/sh

set -e

COMMIT="$(git rev-parse --verify HEAD --short)"
TAG="heathmont/rtl:$COMMIT"

if [ "$1" = "--push" ]; then
  docker push "$TAG"
else
  docker build . -t "$TAG"
fi
