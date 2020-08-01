FROM alpine
RUN apk add nodejs
COPY . .
EXPOSE 8080
CMD ["node","s6.js"]
