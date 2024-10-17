FROM nginx:latest

COPY conf/nginx.conf /etc/nginx/nginx.conf

COPY static /usr/share/nginx/static/

EXPOSE 8080

ENTRYPOINT ["nginx", "-g", "daemon off;"]
