FROM node:lts-alpine as build
WORKDIR /app
RUN apk add curl
COPY . /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN apk update && apk upgrade
RUN apk add git
RUN npm install && npm run build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "node", ".output/server/index.mjs" ]
