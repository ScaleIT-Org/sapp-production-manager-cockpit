# ProductionManagerCockpit

## Technology Stack

	.NetCore->Cordova(Typescript->Angular->Ionic)

## How to Start

###Docker:
	 1) docker build -t productionmanagercockpit .
	 2) docker run -p 5002:5002 productionmanagercockpit
	 3) http://localhost:5002/
###Docker Compose
	1) docker-compose build
	2) docker-compose up
	3) http://localhost:5002
###Standalone
	1) dotnet restore
	2) npm install
	3) dotnet build
	4) dotnet run
	5) http://localhost:5000

###Container Security (Optional)
	Build with healtcheck enabled

	HEALTHCHECK --interval=5m --timeout=3s \
  	CMD curl -f http://localhost:5002/ || exit 1

## Screenshots
![S1](https://projects.teco.edu/projects/scaleit-ap2/repository/production-manager-cockpit/revisions/17d7f610600a7f86b98376b295b464fbecf3939b/raw/Resources/Store/Screenshots/Screenshot%20from%202017-10-30%2012-54-00.png)
![S2](https://projects.teco.edu/projects/scaleit-ap2/repository/production-manager-cockpit/revisions/17d7f610600a7f86b98376b295b464fbecf3939b/raw/Resources/Store/Screenshots/Screenshot%20from%202017-10-30%2012-54-59.png)
![S3](https://projects.teco.edu/projects/scaleit-ap2/repository/production-manager-cockpit/revisions/17d7f610600a7f86b98376b295b464fbecf3939b/raw/Resources/Store/Screenshots/Screenshot%20from%202017-10-30%2012-57-20.png)

## Learning Material

Reactive Manifesto: https://www.reactivemanifesto.org/

Reactive Programming: https://gist.github.com/staltz/868e7e9bc2a7b8c1f754

Ionic Presentation: http://ionicframework.com/present-ionic/slides/#/26
