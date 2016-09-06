FROM mhart/alpine-node:5

RUN mkdir -p /app
WORKDIR /app
ADD package.json /app/package.json
ADD src /app/src
ADD test /app/test
ADD .eslintrc /app/.eslintrc
ADD .babelrc /app/.babelrc

RUN npm install
RUN mkdir -p /app/build
RUN npm run build

EXPOSE 3000
CMD ["npm","run","serve"]
