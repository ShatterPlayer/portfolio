FROM node:18.17.0-alpine
WORKDIR /app
RUN npm install -g serve
COPY ["package.json", "package-lock.json*", "./"]
RUN npm ci --ignore-scripts
COPY . .
RUN npm run build
EXPOSE 80
CMD ["serve", "build", "-l", "80"]
