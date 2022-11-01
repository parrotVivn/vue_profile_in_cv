FROM node:11-alpine as build
RUN apk add --no-cache yarn
WORKDIR /app
COPY . .
RUN yarn install --silent --cache-folder .yc && \
    yarn build

FROM nginx:alpine
RUN rm -rf /var/www && \
    rm /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /var/www
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/nginx.conf

EXPOSE 80
