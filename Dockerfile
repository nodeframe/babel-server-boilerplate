FROM mhart/alpine-node:5

RUN mkdir -p /app
WORKDIR /app
ADD package.json /app/package.json
ADD build /app/build

EXPOSE 3000
CMD ["npm","run","serve"]
