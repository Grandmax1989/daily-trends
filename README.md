# Daily Trends
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Docker && docker-compose 
```


### Deployment On Linux

```bash
docker-compose up --build -d
```

Add additional notes about how to deploy this on a live system


### Deployment On Windows

```bash
docker-compose up --build -d
```

If you have trouble deploying on windows 

Up mongo
```bash
docker-compose up -d
```

Start apis
```bash
/api npm i && npm start
```

Start Webapp
```bash
/webapp npm i && npm start
```

Add additional notes about how to deploy this on a live system

## Authors

* **David Poveda** - *Initial work* - [PurpleBooth](https://github.com/shurdev)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details