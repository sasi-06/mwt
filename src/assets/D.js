FROM node:20 As build
WORKDIR /app
COPY package*.json ./
RUN npm install --include=dev
COPY . .
RUN npm run build

FROM node:20 As production
WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/dist ./dist
EXPOSE 3000
ENTRYPOINT []
CMD ["serve","-s","dist","-l","3000"]




node_modules
npm-debug.log
.git
.gitignore
README.md
.env
nyc_output
coverage
.vs_code
.Ds_code
*.log
dist
