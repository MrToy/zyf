FROM node:slim
ADD . .
RUN npm install --production
CMD npm start