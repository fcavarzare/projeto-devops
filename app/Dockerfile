FROM nginx:alpine

# Cria diretório padrão do NGINX
WORKDIR /usr/share/nginx/html

# Remove arquivos padrões do NGINX
RUN rm -rf ./*

# Copia diretamente o conteúdo do site para o diretório raiz do NGINX
# Isso garante que o index.html fique em /usr/share/nginx/html/index.html
COPY site/index.html ./index.html
COPY site/js ./js

# Corrige permissões (leitura para todos)
RUN chmod -R 755 /usr/share/nginx/html

# Porta padrão HTTP
EXPOSE 80

# Inicia o NGINX
CMD ["nginx", "-g", "daemon off;"]

