# Admin TODO
> Admin todo es un aplicación realizada en NextJS, Prisma, PostgreSQL, utlizando el REST FULL API'S de Next, y aplicando Prisma como ORM, DockerCompose y TablePLUS.

## Development
 Pasos para levantar la app en desarrollo


1. Levantar la base de datos
```
 docker compose up -d
```
2. Renombrar el .env
3. Reemplazar las variables de entorno
4. Ejecutar el comando ```npm install```
5. Ejecutar el comando ```npm run dev```
6. Ejecutar los comandos de prisma 
```
npx prisma migrate dev

npx prisma generate
```
7. Ejecutar el seed para [crear la base de datos local](localhost:3000/api/seed)

## Prisma commnads
``````
npx prisma init
npx prisma migrate dev
npx prisma generate
```````