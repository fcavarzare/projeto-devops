FROM nginx:alpine

# Define o diretório de trabalho padrão do NGINX
WORKDIR /usr/share/nginx/html

# Remove os arquivos padrão do NGINX
RUN rm -rf ./*

# Copia os arquivos do seu site para dentro do container
COPY site/ .

# Expõe a porta padrão do NGINX
EXPOSE 80

# Inicia o NGINX
CMD ["nginx", "-g", "daemon off;"]

