<script lang="ts" setup>
const { public: { pokeApi,pokeSvg } } = useRuntimeConfig()
const select = ref('pokemon')
const {query} = useRoute()
const {push} = useRouter()
const search = ref('')
const searchPending = ref(false)

const paginationCount = usePaginationCounter
if(query.page) {
  paginationCount.value.count = parseInt(query.page.toString())
}
const uri = ref(`${pokeApi}/${select.value}?limit=20&offset=${paginationCount.value.count*20}`)
const { data: pokeApiData, error: pokeApiError, pending: pokeApiPeding, refresh: pokeApiRefresh } = await useAsyncData('pokeapi', async () => $fetch(uri.value))

const pokeApiOptions = [
  'berry', 'item', 'location', 'machine', 'move', 'pokemon'
]

async function movePaginateTo(nextPrev: 'next' | 'previous') {
  if(pokeApiData?.value[nextPrev]) {
    if(nextPrev == 'next' && paginationCount.value.count >= 0) {
      paginationCount.value.count++;
    }else {
      paginationCount.value.count--;
    }
    if(paginationCount.value.count == 0) {
      push(`/`)
    }else {
      push(`/?page=${paginationCount.value.count}`)
    }
    uri.value = pokeApiData?.value[nextPrev]
    await pokeApiRefresh()
  }
}

function imgPokemon(index:number){ 
  if(paginationCount.value.count == 0) {
    return (index + 1)
  }else {
    return (index + 1) + paginationCount.value.count*20
  }
}

const {data: pokeSearchData, error: pokeSearchError, refresh: pokeSearchRefresh} = await useAsyncData('search',async () => {
  return $fetch(`${pokeApi}/${select.value}/${search.value}`)
})

async function onSelectChange (selected:string) {
  select.value = selected
}
await pokeSearchRefresh()

console.log(pokeSearchData)
</script>
<template>
  <div>
    <AppSimpleHero />
    <div class="my-20">
      <div class="px-3 sm:px-12 md:px-20 lg:px-32 xl:px-40">
        <AppSearchBar label="Pokemon" placeholder="Search" :options="pokeApiOptions" @select-change="onSelectChange"/>
        <div 
          v-if="search != '' && !searchPending"
          class="my-12">
          <div class="">
            Buscados
          </div>
        </div>
        <div class="my-12">
          <template v-if="pokeApiData">
            <!-- <AppTable :header="header" :body="pokeApiData.results"/> -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <template v-for="(pokemon, index) in pokeApiData?.results">
                <AppCard :title="pokemon.name" :image="`${pokeSvg}/${imgPokemon(index)}.svg`"/>
              </template>
            </div>
          </template>
          <div class="mt-6">
            <AppSimplePagination 
              @pagination="movePaginateTo"
              :total="pokeApiData?.count"
              :limit="20"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
