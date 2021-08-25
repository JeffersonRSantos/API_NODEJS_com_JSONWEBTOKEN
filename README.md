- API NODE JS com JSONWEBTOKEN

Uma pequena integracao para geracao do Access Token, validacao e apresentação de conteúdo

1. ROTAS: [
   1.  /
   2.  /login
   3.  /register
   4.  /listar -> (validada por middleware)
   5.  /criar-item -> (validada por middleware)
]

2. REQUESTS: {
    1. login, register = [
        'name': 'your_username',
        'password': 'your_password
    ],

    2. listar: {
        headers: [
            x-access-token: 'your_access-token'
        ]
    },

    3. criar-item: {
        headers: [
            x-access-token: 'your_access-token'
        ],
        'name': 'new_item'
    }
}

obs: codigo simples para entendimento.
