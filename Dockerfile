# develop stage
FROM node:10.19.0 as develop-stage
RUN mkdir -p /home/easyshop/app
WORKDIR /home/easyshop/app
RUN yarn global add @quasar/cli
COPY . .
EXPOSE 8080

# build stage
FROM develop-stage as build-stage
RUN yarn
RUN quasar build

# production stage
FROM nginx:1.17.5-alpine as production-stage
COPY --from=build-stage home/easyshop/app/dist/spa /usr/share/nginx/html
EXPOSE 8080
CMD ["/bin/sh", "-c", "sed -i 's/listen  .*/listen 8080;/g' /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"]