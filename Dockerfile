FROM alpine
RUN apk add nodejs
COPY . .
EXPOSE 8081
CMD ["node","s7.js"]
