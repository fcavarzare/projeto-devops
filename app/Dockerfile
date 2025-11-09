FROM nginx:alpine

# Diretório padrão do NGINX
WORKDIR /usr/share/nginx/html

# Remove o conteúdo padrão do NGINX
RUN rm -rf ./*

# Copia os arquivos do seu site
COPY site/ .

# Corrige permissões para o usuário nginx
RUN chmod -R 755 /usr/share/nginx/html

# Expõe a porta padrão
EXPOSE 80

# Inicia o NGINX
CMD ["nginx", "-g", "daemon off;"]

