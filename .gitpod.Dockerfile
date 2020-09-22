#FROM gitpod/workspace-full
FROM ubuntu:focal

# Install custom tools, runtimes, etc.
# For example "bastet", a command-line tetris clone:
# RUN brew install bastet
#
# More information: https://www.gitpod.io/docs/config-docker/

RUN apt-get update && apt-get -y upgrade && apt-get autoremove

RUN apt-get install -y nodejs \
    && node --version

CMD [ "bash" ]
    