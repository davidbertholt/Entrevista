# HeroesApp

Steps to build a Docker image:

    docker-compose up --build

Steps to Run a Docker image:

    docker-compose up

Steps to change delay image:
    
    - in docker-compose.yml change flag --d XXXX (ms)

Steps to remove delay image:

    - in docker-compose.yml remove flag --d XXXX

Steps to run tests:

    - in app.module.ts remplance production provider for test
    
    - in heroes-app/ run the command  ng test
