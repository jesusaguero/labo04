FROM node
RUN git clone -q https://github.com/jesusaguero/lab04.git
WORKDIR /jaguero
RUN npm install > /dev/null
EXPOSE 10700
CMD ["npm","start"]
