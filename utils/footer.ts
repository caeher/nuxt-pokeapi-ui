import IListUrlItem from "~~/ts/interfaces/ListUrlItem";

export const footer: IListUrlItem[] = [
    {
        name: 'Resources',
        links: [
            {
                name: 'PokeApi',
                url: 'https://pokeapi.co/',
            },
            {
                name: 'Tailwind CSS',
                url: 'https://tailwindcss.com',
                key: 'tailwindcss'
            }
        ]
    },
    {
        name: 'Resources',
        links: [
            {
                name: 'Discord',
                url: '#discord',
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
                url: '#privacyandpolicy',
                key: 'privacyandpolicy'
            }
        ]
    },
]
