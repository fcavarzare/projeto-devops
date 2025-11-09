# Imagem base do NGINX
FROM nginx:latest

# Remove o conteúdo padrão do NGINX
RUN rm -rf /usr/share/nginx/html/*

# Copia os arquivos da sua aplicação
COPY ./ /usr/share/nginx/html

# Expõe a porta 80
EXPOSE 80

# Comando padrão do NGINX
CMD ["nginx", "-g", "daemon off;"]

