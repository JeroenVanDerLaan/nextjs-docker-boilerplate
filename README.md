NextJS and Docker boilerplate

# Deployment

## Development

Build and start the Docker services.
```shell
docker-compose up -d --build
```

Start the NextJS development server.
```shell
docker-compose exec node bash -c 'yarn run dev'
```

The application will be served to `127.0.0.1:3000`.

The NextJS development server will recompile and hot-reload any changes you make to the source code.
