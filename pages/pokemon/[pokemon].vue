<script setup lang="ts">
import { moveCursor } from 'readline';
import IMove from '~~/ts/interfaces/Moves'
const { params } = useRoute()
const { public: { pokeApi } } = useRuntimeConfig()
const { data: pokemonData, error: pokemonError, pending: pokemonPending } = await useAsyncData('pokemon', async () => {
    return $fetch(`${pokeApi}/pokemon/${params.pokemon.toString()}`)
}, { pick: ['moves', 'base_experience', 'name', 'height', 'weight', 'species', 'types', 'stats', 'moves', 'abilities', 'held_items', 'id', 'sprites'] })

if (pokemonError.value) {
    // showError(404)
    throw createError({ statusCode: 404, message: 'Not found', fatal: true })
}
const moves: IMove[] = []
if (pokemonData.value) {
    moves.push(...pokemonData.value.moves.map(move => {
        const group = move.version_group_details.map(group => {
            return {
                learn_method: group.move_learn_method.name,
                version: group.version_group.name,
                level_learned: group.level_learned_at,
            }
        })
        const newMove: IMove = {
            name: move.move.name,
            learn_method: '',
            level_learned: 0,
            version: '',
            ...group[0]
        }
        return newMove
    }))
}

console.log(moves)


</script>
<template>
    <div class="min-h-screen">
        <div class="my-12 px-3 sm:px-12 md:px-20 lg:px-32 xl:px-40">
            <div>
                <div class="grid grid-cols-1 md:grid-cols-12 gap-3">
                    <div class="md:col-span-4">
                        <div class="bg-slate-100 dark:bg-gray-800 dark:text-gray-100 p-3 rounded-lg drop-shadow">
                            <figure class="mx-auto">
                                <img class="mx-auto" :src="pokemonData?.sprites.other.home.front_default" alt="" />
                            </figure>
                            <div class="mt-3 bg-white -mx-3 -mb-3 pb-3 rounded-b-lg px-3">
                                <h1 class="text-5xl text-center font-bold text-slate-900 pb-6 capitalize">{{ pokemonData?.name }}
                                </h1>
                                <div class="grid grid-cols-2 grid-rows-2 gap-3">
                                    <div>
                                        <p>
                                            height:
                                            <AppBadge type="success">{{ pokemonData?.height }}</AppBadge>
                                        </p>

                                    </div>
                                    <div>
                                        <p>
                                            weight:
                                            <AppBadge type="info"> {{ pokemonData?.weight }}</AppBadge>
                                        </p>

                                    </div>
                                    <div class="col-span-2">
                                        types:
                                        <template v-for="item in pokemonData?.types">
                                            <AppBadge>{{ item?.type.name }}</AppBadge>
                                        </template>
                                    </div>
                                </div>
                                <div class="mt-6 flex items-center gap-3">
                                    <span class="text-slate-500">XP</span>
                                    <div class="flex-1">
                                        <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                            <div class="bg-indigo-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                                                style="width: 100%">{{ pokemonData.base_experience }}</div>
                                        </div>
                                    </div>
                                </div>
                                <div v-for="stat in pokemonData.stats" class="mt-6 grid grid-cols-12 items-center">
                                    <span class="block text-slate-500 col-span-3 capitalize">{{ stat.stat.name }}</span>
                                    <div class="col-span-9">
                                        <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                            <div class="bg-emerald-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                                                style="width: 100%">{{ stat.base_stat }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="md:col-span-8">
                        <div>
                            <AppTable :header="['name', 'learn method', 'level learned', 'version']" :body="moves" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>