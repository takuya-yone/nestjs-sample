FROM public.ecr.aws/docker/library/node:19.6.0-alpine AS builder

WORKDIR /app
ENV NODE_ENV=production 
COPY . .
RUN npm i -g @nestjs/cli
RUN yarn install --frozen-lockfile
RUN yarn build


FROM public.ecr.aws/docker/library/node:19.6.0-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production 
RUN apk update
RUN apk add --no-cache curl
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY package.json ./




# CMD ["node", "main.js"]
EXPOSE 3000
CMD ["yarn", "start:prod"]
# CMD ["sleep","3000"]




