FROM --platform=linux/amd64 node:19.1.0-alpine3.16

RUN mkdir -p /home/app/ && chown -R node:node /home/app
WORKDIR /home/app
COPY --chown=node:node . .

USER node

RUN yarn install --frozen-lockfile
RUN npx prisma generate
RUN yarn build

EXPOSE 3000
CMD [ "yarn", "start" ]