FROM nginx:alpine

# Define o diretório de trabalho padrão
WORKDIR /usr/share/nginx/html

# Remove o conteúdo padrão do NGINX
RUN rm -rf ./*

# Copia apenas o conteúdo de dentro da pasta "site"
# para o diretório raiz do NGINX
COPY site/ .

# Corrige permissões de leitura
RUN chmod -R 755 /usr/share/nginx/html

# Expõe a porta padrão
EXPOSE 80

# Inicia o NGINX
CMD ["nginx", "-g", "daemon off;"]

