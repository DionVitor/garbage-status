FROM python:3.9-slim

WORKDIR /app/

COPY backend/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY . .

EXPOSE 8000

RUN chmod +x ./entrypoint.sh
CMD ["./entrypoint.sh"]
