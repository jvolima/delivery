# Funcionalidades da API

## Cadastro de clientes

**RF**
- Deve ser possível cadastrar um novo cliente.

**RN**
- Não deve ser possível cadastrar um novo cliente se já tiver um cliente cadastrado com o username informado.


## Autenticação de clientes

**RF**
- Deve ser possível autenticar um cliente.

**RN**
- Não deve ser possível autenticar um cliente se o username não existir.
- Não deve ser possível autenticar um cliente se a senha do cliente encontrado pelo username não bater com a senha informada.

## Cadastro de entregadores

**RF**
- Deve ser possível cadastrar um novo entregador.

**RN**
- Não deve ser possível cadastrar um novo entregador se já tiver um entregador com o username informado.

## Autenticação de entregadores

**RF**
- Deve ser possível autenticar um entregador.

**RN**
- Não deve ser possível autenticar um entregador se o username não existir.
- Não deve ser possível autenticar um entregador se a senha do entregador encontrado pelo username não bater com a senha informada.

## Cadastro de entregas

**RF**
- Deve ser possível um cliente cadastrar uma nova entrega.
- O id do entregador deve vir como nulo até um entregador assumir essa entrega.
- A data de encerramento da entrega deve vir como nula para quando o entregador terminar a entrega essa data ser preenchida.

**RN**
- Não deve ser possível cadastrar uma nova entrega se o cliente não estiver autenticado no programa.

## Listagem de entregas disponíveis

**RF**
- Deve ser possível um entregador visualizar as entregas disponíveis.

**RN**
- Apenas entregadores autenticados podem acessar essa rota.

## Adicionando entregador em uma entrega

**RF**
- Deve ser possível um entregador se cadastrar em uma entrega disponível.

**RN**
- Não deve ser possível um entregador se cadastrar em uma entrega indisponível.

## Listagem de entregas do cliente 

**RF**
- Deve ser possível um cliente poder visualizar seu histórico de entregas.

**RN**
- Apenas clientes autenticados podem acessar essa rota.
