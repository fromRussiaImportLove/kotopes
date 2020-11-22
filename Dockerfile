FROM python:3.8-slim

VOLUME /code/base
WORKDIR /code
COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD python manage.py runserver 0.0.0.0:7000

