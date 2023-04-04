FROM node:19.8-alpine3.16 as dependencies
WORKDIR /app
COPY . /app
RUN npm install

FROM node:19.8-alpine3.16
WORKDIR /app
COPY . /app
COPY --from=dependencies /app/node_modules /app/node_modules
CMD ["node", "/app/index.js"]