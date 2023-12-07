docker build --no-cache -f SQL\Dockerfile.PostgreSql -t school-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t school-java/app ../../..
