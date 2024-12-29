# Gerenciador de Map CLI

Uma interface de linha de comando (CLI) desenvolvida em JavaScript que permite gerenciar pares chave-valor utilizando a estrutura **Map**. O usuário pode adicionar, remover, atualizar, listar e verificar elementos no Map, diretamente no terminal.

## Sumário

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Status](#status)
- [Descrição](#descrição)
- [Funcionalidades](#funcionalidades)
- [Documentação](#documentação)
- [Como Usar](#como-usar)
- [Autor](#autor)

## Tecnologias Utilizadas

<div style="display: flex; flex-direction: row;">
  <div style="margin-right: 20px; display: flex; justify-content: flex-start;">
    <img src="img/js.png" alt="Logo Linguagem" width="100"/>
  </div>
  <div style="margin-right: 20px; display: flex; justify-content: flex-start;">
    <img src="img/node.png" alt="Logo Linguagem" width="100"/>
  </div>
</div>

## Status

![Em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=RED&style=for-the-badge)

## Descrição

Este projeto oferece uma maneira prática e interativa de gerenciar pares chave-valor no terminal. Ele utiliza o módulo `readline` para capturar entradas do usuário e executar ações no **Map**, permitindo manipulações como adicionar, atualizar, remover, listar e verificar a existência de chaves e valores.

## Funcionalidades

- **Adicionar pares chave-valor:** Insere uma nova chave com um valor associado no Map.
- **Remover uma chave:** Elimina uma chave e seu valor associado.
- **Atualizar valores:** Atualiza o valor de uma chave existente.
- **Listar todas as entradas:** Exibe todos os pares chave-valor armazenados.
- **Verificar existência de chave ou valor:** Verifica se uma chave ou valor está presente no Map.
- **Limpar o Map:** Remove todos os pares chave-valor.
- **Encerrar:** Finaliza a execução da CLI.

### Dependências

- **Node.js**: Ambiente de execução JavaScript para rodar o projeto.
- **readline**: Módulo nativo do Node.js utilizado para capturar interações no terminal.