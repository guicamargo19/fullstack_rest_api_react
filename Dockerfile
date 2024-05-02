FROM python:3.12

# Python
ENV PYTHONUNBUFFERED=1 \
    # previne criação de arquivo .pyc pelo python
    PYTHONDONTWRITEBYTECODE=1 \
    # pip
    PIP_NO_CACHE_DIR=off \
    PIP_DISABLE_PIP_VERSION_CHECK=on \
    PIP_DEFAULT_TIMEOUT=100
    
WORKDIR /app

COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

RUN apt-get update && apt-get install -y postgresql-client

EXPOSE 8000

COPY ./back-end /app/ 