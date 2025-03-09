ARG NODE_VERSION=18.20.4
FROM node:${NODE_VERSION}-alpine

WORKDIR /blood_clock_tower

COPY package*.json ./
RUN yarn install
COPY . .
RUN npx prisma generate
RUN yarn build

EXPOSE 8080
CMD yarn start
