FROM node:12.4.0-alpine
RUN mkdir /app
COPY . /app
WORKDIR /app
RUN npm install @babel/core
RUN npm install

EXPOSE 5000
CMD ["npm", "start"]