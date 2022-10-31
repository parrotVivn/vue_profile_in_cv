
FROM node:16.18.0 as build
ARG VUE_APP_API_ROOT_URL=http://localhost
COPY package.json ./
WORKDIR /app
COPY . .
RUN npm i --silent && \
    npm run build


FROM nginx:alpine
RUN rm -rf /var/www && \
    rm /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /var/www
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/nginx.conf

EXPOSE 80
CMD [ "nginx","-g","daemon off;" ]