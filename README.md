<h1 align="center">Garbage Status</h1>
<p align="center"> Sistema com ReactJS e DjangoRF para mostrar status de estações de coleta de lixo.</p>


## Tecnologias :rocket: 
- ReactJS
- Django REST Framework
- Docker
- Docker Compose

## Arquitetura :triangular_ruler:
No Backend foi utilizado Clean Architecture para dividir as resposabilidades das classes. O Django REST Framework foi utilizado para criar uma API RESTful e essa é a camada mais externa da aplicação (pasta app), aquela que conhece todas as outras camadas internas, assim essa chama classes no domínio, (pasta domain/use_cases) onde as regras do negócio ficam armazenadas. Existe também princípios de injeção de dependência para que as classes não fiquem acopladas e possam ser testadas de forma isolada e trocadas caso necessário, essas estão descritas na pasta repositories.

<p align="center">
    <kbd>
        <img src="docs/clean-arch.png" alt="clean-arch">
    </kbd>
</p>