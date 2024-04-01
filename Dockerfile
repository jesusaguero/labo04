FROM node
RUN git clone -q https://github.com/jesusaguero/lab04.git
WORKDIR /jesusaguero
COPY package*json