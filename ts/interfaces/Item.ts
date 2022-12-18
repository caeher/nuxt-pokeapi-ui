import { IAttribute, ICategory, IEffectEntry, IFlavorTextEntry, IGameIndice, ISprites } from './PokeApi'

export interface IItem {
    attributes?: IAttribute[],
    category?: ICategory,
    cost?: number,
    effect_entries?: IEffectEntry[],
    flavor_text_entries?: IFlavorTextEntry[],
    fling_effect?: any,
    fling_power?: any,
    game_indices?: IGameIndice[],
    held_by_pokemon?: any,
    id?: number,
    machines?: any,
    name?: string,
    names?: any,
    sprites?: ISprites
}