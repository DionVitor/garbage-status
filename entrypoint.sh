#!/bin/bash
set -e

echo "Executando migrações do Django..."
python backend/manage.py migrate

echo "Executando comandos personalizados..."
python backend/manage.py create_sample_data

echo "Iniciando o servidor do Django..."
python backend/manage.py runserver 0.0.0.0:8000
