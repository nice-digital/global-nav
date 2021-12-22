FROM node:10.24.1

RUN mkdir -p /tests

WORKDIR /tests

COPY package.json /tests
COPY package-lock.json /tests

RUN npm i

COPY . /tests
