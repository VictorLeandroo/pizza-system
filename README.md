# Documentação Inicial do Projeto - Sistema de Pedidos de Pizzaria

## Visão Geral

Este projeto é um sistema de pedidos de pizzaria desenvolvido utilizando tecnologias web modernas. O sistema visa facilitar o processo de registro e monitoramento de pedidos, proporcionando uma experiência eficiente para os atendentes e aqueles que preparam as pizzas.

## Ferramentas Utilizadas

### Front-end

- **Vue.js:** Framework JavaScript para construção de interfaces de usuário reativas.
- **HTML5 e CSS3:** Tecnologias padrão para estruturação e estilização de páginas web.
- **Tailwind CSS:** Framework de utilitários CSS para estilização eficiente.

### Back-end

- **Node.js:** Ambiente de execução JavaScript do lado do servidor.
- **Express.js:** Framework para construção de aplicativos web em Node.js.

### Banco de Dados

- **MySQL**

### Controle de Versão

- **Git:** Sistema de controle de versão distribuído.

### Hospedagem

- **Vercel**

## Funcionalidades Principais

1. **Registro de Pedido:**
   - O atendente pode registrar os pedidos dos clientes, incluindo detalhes como sabores, tamanho da pizza, bebidas, etc.
   - Cada pedido é armazenado no banco de dados para posterior monitoramento.

2. **Tela de Preparação de Pedidos:**
   - Existe uma tela dedicada para aqueles responsáveis por preparar as pizzas.
   - Os pedidos registrados são exibidos nesta tela, permitindo a confirmação de que a pizza foi preparada.

3. **Interação em Tempo Real:**
   - O sistema utiliza WebSocket para atualizações em tempo real na tela de preparação, mantendo todos os usuários sincronizados.


