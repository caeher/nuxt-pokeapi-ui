import IListUrlItem from "~~/ts/interfaces/ListUrlItem";

export const footer: IListUrlItem[] = [
    {
        name: 'Resources',
        links: [
            {
                name: 'PokeApi',
                url: '/',
                // key: ''
            },
            {
                name: 'Tailwind CSS',
                url: 'https://tailwindcc.com',
                key: 'tailwindcss'
            }
        ]
    },
    {
        name: 'Resources',
        links: [
            {
                name: 'Discord',
                url: 'https://discord.com',
                key: 'discord'
            },
            {
                name: 'Github',
                url: 'https://github.com/caeher',
                key: 'github'
            }
        ]
    },
    {
        name: 'Legal',
        links: [
            {
                name: 'PokeApi',
                url: 'https://pokeapi.com',
                key: 'pokeapi'
            },
            {
                name: 'Privacy and policy',
                url: 'privacyandpolicy',
                key: 'privacyandpolicy'
            }
        ]
    },
]
