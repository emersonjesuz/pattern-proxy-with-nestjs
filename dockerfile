
FROM node:18-alpine


WORKDIR /usr/src/app


COPY package*.json ./

RUN npm install

COPY prisma ./prisma

COPY . .

RUN npx prisma generate

RUN npm run build

CMD sh -c "npx prisma migrate deploy && npm start"