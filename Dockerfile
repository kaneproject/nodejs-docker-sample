FROM node:6

RUN npm install -g nodemon
WORKDIR /mnt

CMD nodemon --debug-brk
