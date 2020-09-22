#FROM gitpod/workspace-full
FROM ubuntu:focal

# Install custom tools, runtimes, etc.
# For example "bastet", a command-line tetris clone:
# RUN brew install bastet
#
# More information: https://www.gitpod.io/docs/config-docker/

ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get -y upgrade && apt-get autoremove

RUN apt-get install -y nodejs npm curl \
    && node --version

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
    && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update && apt-get install --no-install-recommends yarn

CMD [ "bash" ]
