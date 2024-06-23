<script lang="ts" setup>
import { Icon } from '@iconify/vue';
import {
  useDashboard,
  LoadingStatus,
  type ChainConfig,
} from '@/stores/useDashboard';
import ChainSummary from '@/components/ChainSummary.vue';
import AdBanner from '@/components/ad/AdBanner.vue';

import { computed, onMounted, ref } from 'vue';
import { useBlockchain } from '@/stores';

const dashboard = useDashboard();

const keywords = ref('');
const chains = computed(() => {
  if (keywords.value) {
    const lowercaseKeywords = keywords.value.toLowerCase();

    return Object.values(dashboard.chains).filter(
      (x: ChainConfig) => x.chainName.toLowerCase().indexOf(lowercaseKeywords) > -1 
      || x.prettyName.toLowerCase().indexOf(lowercaseKeywords) > -1
    );
  } else {
    return Object.values(dashboard.chains);
  }
});

const featured = computed(() => {
  const names = ["cosmos", "osmosis", "akash", "celestia", "evmos", "injective", "dydx", "noble"];
  return chains.value
    .filter(x => names.includes(x.chainName))
    .sort((a, b)=> (names.indexOf(a.chainName) - names.indexOf(b.chainName)))
})

const chainStore = useBlockchain()

</script>
<template>
  <div class="">
    <div class="flex md:!flex-row flex-col items-center justify-center mb-6 mt-14 gap-2">
      <div class="w-16 rounded-full">
        <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
  <ellipse style="fill: rgb(255, 255, 255);" cx="500.196" cy="500.891" rx="497.122" ry="497.086" transform="matrix(1, 0, 0, 1, 0, 1.4210854715202004e-14)"/>
  <g transform="matrix(0.10000000149011612, 0, 0, -0.10000000149011612, 0, 1000)" fill="#000000" stroke="none">
    <path d="M4705 8944 c-539 -41 -967 -159 -1445 -398 -574 -287 -1034 -665&#10;-1401 -1152 -81 -105 -303 -434 -297 -438 6 -5 347 -166 394 -187 l47 -20 25&#10;23 c13 13 66 85 118 162 125 183 223 303 374 460 577 596 1378 980 2185 1047&#10;179 15 610 6 764 -16 726 -102 1421 -444 1949 -959 197 -192 324 -345 479&#10;-576 39 -58 79 -113 90 -123 19 -16 22 -16 59 -1 46 19 397 184 403 189 8 8&#10;-255 390 -355 515 -130 164 -468 504 -619 624 -301 239 -662 444 -1055 599&#10;-341 135 -585 193 -970 232 -146 15 -636 27 -745 19z"/>
    <path d="M865 6989 c11 -98 62 -290 104 -394 130 -317 401 -611 789 -852 129&#10;-80 469 -261 1009 -536 693 -354 870 -457 1183 -691 159 -118 434 -386 559&#10;-545 209 -264 334 -487 441 -786 25 -71 51 -129 56 -129 5 1 19 28 31 60 12&#10;33 38 104 59 159 173 467 565 955 1044 1300 268 194 454 299 1164 662 492 252&#10;832 432 936 497 356 221 621 489 761 769 77 153 169 491 142 518 -9 9 -39 -14&#10;-115 -81 -195 -176 -324 -261 -600 -394 -708 -343 -1710 -551 -2923 -606&#10;l-240 -11 -87 -92 c-48 -51 -107 -118 -130 -150 -37 -50 -44 -56 -53 -41 -19&#10;33 -110 140 -180 211 l-70 72 -240 11 c-1246 57 -2265 274 -2986 635 -224 113&#10;-360 206 -553 380 l-108 99 7 -65z"/>
    <path d="M1127 5733 c-9 -15 -27 -119 -43 -243 -21 -171 -30 -658 -15 -830&#10;118 -1359 924 -2551 2146 -3175 1386 -707 3045 -537 4259 435 815 653 1318&#10;1551 1453 2595 25 199 26 777 0 981 -20 156 -37 236 -52 241 -5 1 -68 -43&#10;-140 -99 -71 -55 -168 -126 -214 -157 l-83 -56 8 -110 c12 -152 10 -506 -5&#10;-645 -45 -442 -177 -877 -387 -1279 -180 -343 -385 -603 -724 -919 -275 -256&#10;-461 -388 -767 -543 -384 -195 -773 -310 -1218 -361 -143 -16 -538 -16 -685 1&#10;-567 63 -1106 259 -1580 574 -266 177 -724 627 -912 897 -230 330 -441 813&#10;-532 1223 -67 299 -98 704 -74 990 l13 169 -95 65 c-52 37 -135 98 -185 138&#10;-97 77 -150 115 -158 115 -3 0 -8 -3 -10 -7z"/>
    <path d="M2600 4887 c0 -70 7 -160 15 -204 91 -479 512 -909 989 -1009 156&#10;-33 495 -27 642 12 73 19 124 43 124 58 0 20 -53 94 -136 191 l-77 90 -246 5&#10;-246 5 -86 36 c-288 120 -527 384 -585 647 -24 107 -55 138 -219 217 -194 94&#10;-175 99 -175 -48z"/>
    <path d="M7340 4986 c-94 -39 -215 -103 -249 -132 -41 -34 -56 -64 -76 -150&#10;-57 -245 -299 -515 -562 -624 -105 -44 -152 -50 -383 -50 l-207 0 -39 -42&#10;c-63 -68 -150 -180 -167 -214 -15 -29 -15 -33 2 -48 62 -56 421 -92 659 -65&#10;500 56 995 524 1077 1018 27 166 31 332 7 331 -4 -1 -32 -11 -62 -24z"/>
  </g>
</svg>
      </div>
      <h1 class="text-primary dark:invert text-3xl md:!text-6xl font-bold">
        {{ $t('pages.title') }}
      </h1>
    </div>
    <div class="text-center text-base">
      <p class="mb-1">
        {{ $t('pages.slogan') }}
      </p>
    </div>
    <div
      v-if="dashboard.status !== LoadingStatus.Loaded"
      class="flex justify-center"
    >
      <progress class="progress progress-info w-80 h-1"></progress>
    </div>

    <div v-if="featured.length>0" class="text-center text-base mt-6 text-primary">
      <h2 class="mb-6"> Featured Blockchains 🔥 </h2>
    </div>

    <div v-if="featured.length>0"
      class="grid grid-cols-1 gap-4 mt-6 md:!grid-cols-3 lg:!grid-cols-4 2xl:!grid-cols-5"
    >
    <ChainSummary
        v-for="(chain, index) in featured"
        :key="index"
        :name="chain.chainName"
      />
    </div>

    <AdBanner id="home-banner-ad" unit="banner" width="970px" height="90px" />

    <div class="text-center text-base mt-6 text-primary">
      <h2 class="mb-6">{{ $t('pages.description') }}</h2>
    </div>

    <div class="flex items-center rounded-lg bg-base-100  border border-gray-200 dark:border-gray-700 mt-10">
      <Icon icon="mdi:magnify" class="text-2xl text-gray-400 ml-3"/>
      <input :placeholder="$t('pages.search_placeholder')" class="px-4 h-10 bg-transparent flex-1 outline-none text-base" v-model="keywords" />
      <div class="px-4 text-base hidden md:!block">{{ chains.length }}/{{ dashboard.length }}</div>
    </div>

    <div
      class="grid grid-cols-1 gap-4 mt-6 md:!grid-cols-3 lg:!grid-cols-4 2xl:!grid-cols-5"
    >
      <ChainSummary
        v-for="(chain, index) in chains"
        :key="index"
        :name="chain.chainName"
      />
    </div>
  </div>
</template>

<style scoped>
 .logo path{
  fill: #171d30;
}
</style>@/components/ad/ad
