FROM mhart/alpine-node:5
RUN npm install -g yarn
RUN mkdir -p /app
WORKDIR /app
ADD package.json /app/package.json
ADD configs /app/configs
ADD src /app/src
ADD .eslintrc /app/.eslintrc
ADD .babelrc /app/.babelrc

RUN yarn install
RUN npm run build

EXPOSE 3000
CMD ["npm","run","serve"]
