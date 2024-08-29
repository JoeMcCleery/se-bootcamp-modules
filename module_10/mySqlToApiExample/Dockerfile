FROM node:19-alpine
WORKDIR /app
# Copy package.json and package-lock.json (or yarn.lock) to the working directory.
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8081
CMD ["npm","start" ]
