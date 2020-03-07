FROM kinlan/puppets:latest

# Copy the app
COPY . /app/
#COPY local.conf /etc/fonts/local.conf
WORKDIR app

EXPOSE 3000

CMD /bin/sh -c 'npm i; npm start;'