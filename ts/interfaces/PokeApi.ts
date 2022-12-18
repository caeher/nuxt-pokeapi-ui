export interface IAbility {
    ability?: {
        name?: string,
        url?: string
    },
    is_hidden?: boolean,
    slot?: number
}

export interface IGameIndice {
    game_index?: number,
    version?: {
        name?: string,
        url?: string
    },
    generation?: {
        name?: string,
        url?: string
    }
}

export interface IHeldItem {
    item?: {
        name?: string,
        url?: string
    },
    version_details?: {
        rarity: number,
        version?: {
            name?: string,
            url?: string
        }
    }[]
}

export interface IMove {
    move?: {
        name?: string,
        url?: string
    },
    version_group_details?: {
        level_learned_at?: number,
        move_learn_method?: {
            name?: string,
            url?: string
        },
        version_group?: {
            name?: string,
            url?: string
        }
    }[],
    learn_method?: string,
    level_learned?: number,
    version?: string,
    name?: string
}

export interface ISpecie {
    name?: string,
    url?: string
}

export interface ISprites {
    back_default?: string | null,
    back_female?: string | null,
    back_shiny?: string | null,
    back_shiny_female?: string | null,
    front_default?: string | null,
    front_female?: string | null,
    front_shiny?: string | null,
    front_shiny_female?: string | null,
    other?: {
        dream_world?: {
            front_default?: string | null,
            front_female?: string | null
        },
        home?: {
            front_default?: string | null,
            front_female?: string | null,
            front_shiny?: string | null,
            front_shiny_female?: string | null
        }
    },
    versions?: any | null
}

export interface IStat {
    base_stat?: number,
    effort?: number,
    stat?: {
        name?: string,
        url?: string
    }
}




export interface ICategory {
    name?: string,
    url?: string
}

export interface IAttribute {
    name?: string,
    url?: string
}

export interface IEffectEntry {
    effect?: string,
    short_effect?: string
}

export interface IFlavorTextEntry {
    language?: {
        name?: string,
        url?: string
    },
    text?: string,
    version_group?: {
        name?: string,
        url?: string
    }
}





// Interfaces for Berry 

export interface IFirmness {
    name?: string,
    url?: string
}

export interface IFlavor {
    flavor?: {
        name?: string,
        url?: string
    },
    potency?: number
}


