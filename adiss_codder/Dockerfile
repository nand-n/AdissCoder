FROM node 
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
# RUN npm test - if you want to test before to build
RUN yarn build .

FROM nginx:alpine 
WORKDIR /usr/share/nginx/html
COPY . .
EXPOSE 80
# run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]