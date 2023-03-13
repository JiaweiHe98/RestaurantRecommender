FROM python:3.8

WORKDIR /app

COPY . .

RUN apt-get update -y
RUN apt-get upgrade -y
RUN pip3 install numpy scikit-learn pandas grpcio google-api-python-client

CMD [ "python3", "./rpc_server.py"]
