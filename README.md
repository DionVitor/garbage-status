<h1 align="center">Garbage Status</h1>
<p align="center"> Sistema com ReactJS e DjangoRF para mostrar status de estações de coleta de lixo.</p>


## Tecnologias :rocket: 
- ReactJS
- Django REST Framework
- Docker
- Docker Compose

## Como rodar e utilizar :computer:
Para rodar a aplicação é necessário ter o Docker e o Docker Compose instalados na máquina.

Faça o clone do repositório:
```
git clone https://github.com/DionVitor/garbage-status.git
```

Entre na pasta do projeto:
```
cd garbage-status
```

Rode o comando abaixo para subir a aplicação:
```
docker-compose up --build -d
```

Acesse a aplicação no navegador:
```
http://localhost:3000/
```

Acesse a documentação da API no navegador:
```
http://localhost:8000/swagger/
```

Acesse o admin do Django para visualizar os dados:
- Usuário: admin
- Senha: admin
```
http://localhost:8000/admin/
```

Acesse o Flower para acompanhar o Worker e as tarefas:
```
http://localhost:5555/
```

## Arquitetura :triangular_ruler:
No Backend foi utilizado Clean Architecture para dividir as resposabilidades das classes. O Django REST Framework foi utilizado para criar uma API RESTful e essa é a camada mais externa da aplicação (pasta app), aquela que conhece todas as outras camadas internas, assim essa chama classes no domínio, (pasta domain/use_cases) onde as regras do negócio ficam armazenadas. Existe também princípios de injeção de dependência para que as classes não fiquem acopladas e possam ser testadas de forma isolada e trocadas caso necessário, essas estão descritas na pasta repositories.

<p align="center">
    <kbd>
        <img src="docs/clean-arch.png" alt="clean-arch">
    </kbd>
</p>

Além disso, foi utilizado o Docker para criar containers para cada serviço, assim o desenvolvedor não precisa se preocupar com a instalação de dependências e configurações do ambiente.

Foi utilizado o Celery Beat com o RabbitMQ para ativamente (a cada 5 segundos) verificar o status das estações de coleta de lixo e atualizar o banco de dados caso exista necessidade de criar um alerta de estação de coleta com mais de 80% de sua capacidade.

<p align="center">
    <kbd>
        <img src="docs/celery-arch.png" alt="clean-arch">
    </kbd>
</p>
