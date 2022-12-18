import { IFirmness, IFlavor} from './PokeApi'

export interface IBerry {
    firmness?: IFirmness,
    flavors?: IFlavor[],
    growth_time?: number,
    id?: number,
    item?: {
        name?: string,
        url?: string
    },
    max_harvest?: number,
    name?: string,
    natural_gift_power?: number,
    natural_gift_type?: {
        name?: string,
        url?: string
    },
    size?: number,
    smoothness?: number,
    soil_dryness?: number
}