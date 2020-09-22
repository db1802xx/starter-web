#FROM gitpod/workspace-full
FROM ubuntu:focal

# Install custom tools, runtimes, etc.
# For example "bastet", a command-line tetris clone:
# RUN brew install bastet
#
# More information: https://www.gitpod.io/docs/config-docker/

RUN apt-get update && apt-get -y upgrade && apt-get autoremove \
    apt-get install -y wget

RUN wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash \
    source ~/.profile \
    nvm --version \
    nvm ls-remote \
    nvm install 13.2.0 \
    node -v


    