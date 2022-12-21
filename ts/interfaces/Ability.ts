export interface IFullAbility {
    name?: string,
    effect_entries?: {
        effect: string | null,
        short_effect: string | null
        language?: {
            name?: string
        }
    }[],
}