FROM nginx:alpine
COPY dist/challenge-devops/browser/ /usr/share/nginx/html/
COPY dist/challenge-devops/server/ /usr/share/nginx/server/
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
