#Deriving the latest base image
FROM python:3.8


#Labels as key value pair
# LABEL Maintainer= "{jhe2021, caoxi, hanzheng} @seas.upenn.edu"
MAINTAINER jhe2021, caoxi, hanzheng @seas.upenn.edu


# Any working directory can be chosen as per choice like '/' or '/home' etc
# i have chosen /usr/app/src
# WORKDIR /Users/hanzheng/idea-workspace/RestaurantRecommender/recommender/proto
# ADD . /Users/hanzheng/idea-workspace/RestaurantRecommender/recommender/proto
ADD rpc_server.py /

#to COPY the remote file at working directory in container
# COPY rpc_server.py ./
# Now the structure looks like this '/usr/app/src/test.py'

RUN pip3 install grpcio
RUN pip3 install 


#CMD instruction should be used to run the software
#contained by your image, along with any arguments.

CMD [ "python", "./rpc_server.py"]