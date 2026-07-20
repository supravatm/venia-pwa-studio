FROM node:20-alpine as build

# working directory
WORKDIR /usr/src/app

# global environment setup : yarn + dependencies needed to support node-gyp
RUN apk --no-cache --virtual add \
    python3 \
    make \
    g++ \
    yarn

# node:alpine comes with a configured user and group
RUN chown -R node:node /usr/src/app
# copy build from previous stage
USER node
# command to run application
# CMD [ "yarn", "workspace", "@magento/venia-concept", "run", "watch"]
CMD ["yarn","watch"]