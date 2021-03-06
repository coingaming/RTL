FROM node:10-alpine

RUN apk add --no-cache tini xxd jq

WORKDIR /RTL

COPY package.json /RTL/package.json
COPY package-lock.json /RTL/package-lock.json

# Install dependencies
RUN npm install --only=prod

COPY . /RTL

EXPOSE 3000

ENTRYPOINT ["/sbin/tini", "-g", "--", "/RTL/entrypoint.sh"]
