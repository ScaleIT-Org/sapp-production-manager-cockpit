FROM microsoft/dotnet:1.1.2-sdk

RUN apt-get update \
    && apt-get -y install gnupg \
    && curl -sL https://deb.nodesource.com/setup_6.x | bash \
    && apt-get -y install nodejs \
    && apt-get -y install bzip2 \
    && apt-get -y install libfontconfig

RUN mkdir -p /root/src/app/dockertest

COPY . /app
WORKDIR /app

RUN ["dotnet", "restore"]
RUN ["npm", "install"]
RUN ["dotnet", "build"]

ENTRYPOINT ["dotnet", "run", "--server.urls", "http://*:5002"]
ENV ASPNETCORE_URLS=http://+:5002
EXPOSE 5002/tcp

