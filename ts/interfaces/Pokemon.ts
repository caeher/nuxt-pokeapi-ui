import { IAbility, IGameIndice, IHeldItem, IMove, ISpecie, ISprites, IStat } from "./PokeApi"


export interface IPokemon {
    abilities?: IAbility[],
    next?: string | null,
    previous?: string | null,
    forms?: {
        name?: string,
        url?: string
    }[],
    game_indices?: IGameIndice[],
    height?: number,
    held_items?: IHeldItem[],
    id?:number,
    is_default?: boolean,
    location_area_encounters?: string,
    moves?: IMove[],
    name?: string,
    order?: number,
    past_types?: any,
    species?: ISpecie,
    sprites?: ISprites,
    stats?: IStat[],
    types?: {
        slot?: number,
        type?: {
            name?: string,
            url?: string
        }
    }[],
    weight?: number,
    results?: any,
    count?: number,
    base_experience?: number,
    effect_entries?: {
        effect?: string
    }[]
}