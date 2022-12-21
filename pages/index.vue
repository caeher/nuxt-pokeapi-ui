<script lang="ts" setup>
import { AsyncData } from '#app';
import { IBerry } from '~~/ts/interfaces/Berry';
import { IItem } from '~~/ts/interfaces/Item';
import { IPokemon } from '~~/ts/interfaces/Pokemon';

const { public: { pokeApi, pokeSvg } } = useRuntimeConfig()
const select = ref('pokemon')
const { query } = useRoute()
const { push } = useRouter()
const search = ref('')

const paginationCount = usePaginationCounter
if (query.page) {
  paginationCount.value.count = parseInt(query.page.toString())
}
const uri = ref(`${pokeApi}/${select.value}?limit=20&offset=${paginationCount.value.count * 20}`)
const { data: pokeApiData, error: pokeApiError, pending: pokeApiPeding, refresh: pokeApiRefresh } = <AsyncData<IPokemon, Error>> await useAsyncData('pokeapi', async () => $fetch(uri.value))

const pokeApiOptions = [
  'pokemon', 'berry', 'item'
]

async function movePaginateTo(nextPrev: 'next' | 'previous') {
  if (pokeApiData.value != null && pokeApiData?.value[nextPrev]) {
    if (nextPrev == 'next' && paginationCount.value.count >= 0) {
      paginationCount.value.count++;
    } else {
      paginationCount.value.count--;
    }
    if (paginationCount.value.count == 0) {
      push(`/`)
    } else {
      push(`/?page=${paginationCount.value.count}`)
    }
    uri.value = pokeApiData?.value[nextPrev] ?? ''
    await pokeApiRefresh()
  }
}

function imgPokemon(index: number) {
  if (paginationCount.value.count == 0) {
    return (index + 1)
  } else {
    return (index + 1) + paginationCount.value.count * 20
  }
}
const pokeSearchData: any = reactive({ data: {} }), pokeSearchError = reactive({ data: {} })
let pokeSearchRefresh: any = {};
async function onSearch() {
  if (search.value != '') {
    const { data: SearchData, error: SearchError, refresh: SearchRefresh, pending: SearchPending } = <AsyncData<IPokemon|IBerry|IItem, Error>> await useAsyncData('search', async () => {
      return $fetch(`${pokeApi}/${select.value}/${search.value}`)
    })
    pokeSearchData.data = SearchData
    pokeSearchError.data = SearchError
    pokeSearchRefresh = SearchRefresh
  }
}


async function onSelectChange(selected: string) {
  select.value = selected
  search.value = ''
  if (pokeSearchRefresh instanceof Function) {
    // pokeSearchRefresh()
    pokeSearchError.data = true
  }
}

</script>
<template>
  <div>
    <AppSimpleHero />
    <div class="my-20">
      <div class="px-3 sm:px-12 md:px-20 lg:px-32 xl:px-40">
        <AppSearchBar label="Pokemon" placeholder="Search" v-model="search" :options="pokeApiOptions"
          @select-change="onSelectChange" @search="onSearch" />
        <div v-if="!pokeSearchError.data" class="my-12">
          <template v-if="select == 'pokemon'">
            <div class="bg-slate-100 dark:bg-gray-800 rounded-lg drop-shadow p-3">
              <div class="grid items-start grid-cols-12">
                <figure class="col-span-4">
                  <img :src="`${pokeSvg}/${pokeSearchData.data?.id}.png`" :alt="search">
                </figure>
                <div class="col-span-8">
                  <h2 class="text-3xl md:text-5xl lg:text-6xl font-bold capitalize text-slate-900">{{
                      pokeSearchData.data?.name
                  }}</h2>
                  <p class="mb-3">Types: </p>
                  <AppBadge class="inline mr-3" v-for="item in pokeSearchData.data?.types" type="info">
                    {{ item.type.name }}
                  </AppBadge>
                  <p class="my-3">Abilities: </p>
                  <AppBadge class="inline mr-3" v-for="item in pokeSearchData.data?.abilities" type="success">
                    {{ item.ability.name }}
                  </AppBadge>
                </div>
              </div>
            </div>
          </template>
          <template v-if="select == 'berry'">
            <div class="bg-slate-100 dark:bg-gray-800 rounded-lg drop-shadow p-3 my-12">
              <h2 class="text-3xl md:text-5xl lg:text-6xl font-bold capitalize text-slate-900">{{
                  pokeSearchData.data?.name
              }}</h2>
              <p class="mb-3">Flavors: </p>
              <AppBadge class="inline mr-3" v-for="item in pokeSearchData.data?.flavors" type="info">
                {{ item.flavor.name }}
              </AppBadge>
            </div>
          </template>
          <template v-if="select == 'item'">
            <div class="bg-slate-100 dark:bg-gray-800 rounded-lg drop-shadow p-3">
              <div class="">
                <div>
                  <figure class="flex items-center gap-x-3">
                    <img class="w-12 h-12" :src="`${pokeSearchData.data?.sprites?.default}`" :alt="search" />
                    <h2 class="text-3xl md:text-5xl lg:text-6xl font-bold capitalize text-slate-900">{{
                        pokeSearchData.data?.name
                    }}</h2>
                  </figure>
                  <div v-for="effect in pokeSearchData.data?.effect_entries">
                    <p class="mt-3">Effect: {{ effect.effect }}</p>
                    <p class="mt-3">Short effect: {{ effect.short_effect }}</p>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
        <div class="my-12">
          <template v-if="pokeApiData">
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <template v-for="(pokemon, index) in pokeApiData?.results">
                <AppCard :title="pokemon.name" :image="`${pokeSvg}/${imgPokemon(index)}.png`" />
              </template>
            </div>
          </template>
          <div class="mt-6">
            <AppSimplePagination @pagination="movePaginateTo" :total="pokeApiData?.count?? 0" :limit="20" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
