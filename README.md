Para requisições de login do usuário, utilize o Json abaixo. Guarde o TOKEN de segurança para não ter o acesso negado, TOKEN se expira em 24hrs!
- POST https://zap-backend.onrender.com/login
	
```json	
 {
    "name": "Maycon Cabral",	
    "password": "abc123"	
 }	
```

 Há três usuários, pré-cadastrado no banco de dados, que utilizam a mesma senha, escolha um deles e have fun!

* Seles Oliveira
* Vincius
* Maycon Cabral      
___________________________

É possível se cadastrar também! Envie seu nome, número de telefone e senha como no exemplo Json abaixo. Guarde o TOKEN de segurança para não ter o acesso negado, TOKEN se expira em 24hrs!
- POST https://zap-backend.onrender.com/register

```json
{
   "name": "Maycon Cabral",
   "phoneNumber": "61983269646",
   "password": "abc123"	
}
```
OBS:. Não será permitido cadastrar o mesmo usuário, usuário sem nome ou com senha menor do que 6 digitos.
____________________________

Cada usuário possui sua lista de contados vinculado ao seu ID, basta enviar o seu ID.
- GET https://zap-backend.onrender.com/register

```json
{
   "userId": "3"
}
```
Não possui contatos? Não tem problema, cadastre novos usuários para a sua lista!!! Ressalvo que somente usuários registrados poderão ser adicionados a sua lista. Para adicionar, veja o Json abaixo.
-  POST https://zap-backend.onrender.com/contact

```json
{
  "name": "Marcus Vincius",
  "phone": "61998132647",
  "userId": "3"
}
```
OBS:. Só poderá haver um contato com o mesmo número.

____________________________
Para enviar menssagens, envie o seu ID e o ID do seu contato.
- POST https://zap-backend.onrender.com/message

```json
{
  "sender": "seu ID vem aqui!",
  "message": "Olá mundo!",
  "receiver": "o ID do seu contato!"
}
```




   
   
