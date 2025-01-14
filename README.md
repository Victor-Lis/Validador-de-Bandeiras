# Validador de Bandeiras de Cartão

Este projeto é um validador de bandeiras de cartão de crédito, que suporta as seguintes bandeiras: Visa, Mastercard, American Express, Amex, Elo, Hipercard e Discover.

## Estrutura do Projeto
```
## Estrutura do Projeto

```
card-validator
├── src
│   ├── index.js          # Ponto de entrada da aplicação
│   └── validators
│       └── cardValidator.js # Função para validar bandeiras de cartão
├── package.json          # Configuração do npm
├── .gitignore            # Arquivos a serem ignorados pelo Git
└── README.md             # Documentação do projeto
```

## Algoritmo de Luhn

O algoritmo de Luhn, também conhecido como "módulo 10", é um método simples de verificação de erros usado para validar números de identificação, como números de cartões de crédito. O algoritmo é eficiente e pode detectar qualquer erro simples de digitação.

### Como Funciona

1. **Comece da direita para a esquerda**: Pegue o número do cartão e comece a processá-lo do último dígito (à direita) para o primeiro (à esquerda).
2. **Dobre os dígitos em posições ímpares**: Dobre cada segundo dígito (aqueles nas posições ímpares se contarmos da direita para a esquerda). Se o dobro de um dígito for maior que 9, subtraia 9 do resultado.
3. **Some todos os dígitos**: Some todos os dígitos do número do cartão, incluindo os dígitos dobrados e os dígitos que não foram dobrados.
4. **Verifique a divisibilidade por 10**: Se a soma total for divisível por 10 (ou seja, o resto da divisão por 10 for 0), o número do cartão é válido de acordo com o algoritmo de Luhn.

### Exemplo

Vamos validar o número de cartão `4539 1488 0343 6467` usando o algoritmo de Luhn:

1. **Número original**: 4539 1488 0343 6467
2. **Dobrando os dígitos nas posições ímpares**: 8 5 6 9 2 4 16 8 0 6 4 3 12 4 12 7
3. **Subtraindo 9 dos valores maiores que 9**: 8 5 6 9 2 4 7 8 0 6 4 3 3 4 3 7
4. **Somando todos os dígitos**: 8 + 5 + 6 + 9 + 2 + 4 + 7 + 8 + 0 + 6 + 4 + 3 + 3 + 4 + 3 + 7 = 77
5. **Verificação de divisibilidade**: 77 não é divisível por 10, logo `4539 1488 0343 6467` não é um número de cartão válido.

O algoritmo de Luhn é amplamente utilizado devido à sua simplicidade e eficácia na detecção de erros de digitação comuns.

## Instalação

Para instalar as dependências do projeto, execute o seguinte comando:

```
npm install
```

## Uso

Para validar uma bandeira de cartão, você pode executar o arquivo `index.js`. Certifique-se de passar um número de cartão válido como entrada.

```bash
node src/index.js
```

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções. Abra um pull request ou crie uma issue para discutir mudanças.

## Autores
- [@Victor-Lis](https://www.linkedin.com/in/victor-lis-bronzo)
