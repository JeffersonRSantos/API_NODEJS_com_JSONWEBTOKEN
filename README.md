- API NODE JS com JSONWEBTOKEN

Uma pequena integracao para geracao do Access Token e validacao

- ROTAS: [
    /
    /login
    /register
    /listar -> (validada por middleware)
    /criar-item -> (validada por middleware)
]

- REQUESTS: {
    login, register = [
        'name': 'your_username',
        'password': 'your_password
    ],

    listar: {
        headers: [
            x-access-token: 'your_access-token'
        ]
    },

    criar-item: {
        headers: [
            x-access-token: 'your_access-token'
        ],
        'name': 'new_item'
    }
}

obs: codigo simples para entendimento