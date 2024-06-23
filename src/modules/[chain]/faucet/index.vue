<script lang="ts" setup>
import AdBanner from '@/components/ad/AdBanner.vue';
import { get } from '@/libs';
import { useBlockchain, useFormatter, useGovStore } from '@/stores';
import { ref, onMounted, computed } from 'vue';

const chainStore = useBlockchain();
const format = useFormatter();
interface FaucetResponse {
    status: string;
    result: any;
    message: string;
}

const address = ref('');
const faucet = ref('');
const balances = ref([]);
const faucetModal = ref(false);
const ret = ref({} as FaucetResponse); 
const configChecker = ref('');

const checklist = computed(() => {
    const endpoint = chainStore.current?.endpoints?.rest
    const bs = balances.value.length > 0 && balances.value.findIndex((v:any) => v.amount <= 10) === -1;
    return [
        { title: 'Rest Endpoint', status: endpoint && endpoint[0].address !== '' },
        { title: 'Faucet Configured', status: chainStore.current?.faucet !== undefined },
        { title: 'Faucet Account', status: faucet.value !== ''},
        { title: 'Faucet Balance', status: bs},
    ];
});

const notReady = computed(() => {
    for (const it of checklist.value) {
        if (!it.status) return true;
    }
    return false;
});

const validAddress = computed(() => {
    if (!address.value) return true;
    return address.value.startsWith(chainStore.current?.bech32Prefix || '1');
});

const faucetUrl = computed(() => {
    return `https://faucet.ping.pub/${chainStore.current?.chainName}`;
    // return `http://localhost:3000/${chainStore.current?.chainName}`;
});


function claim() {
    
    ret.value = {} as FaucetResponse;
    const prefix = chainStore.current?.bech32Prefix || 'cosmos';
    if (!address.value ) return;
    faucetModal.value = true;
    // @ts-ignore
    get(`${faucetUrl.value}/send/${address.value}`).then( (res: FaucetResponse) => {
        console.log(res);
        ret.value = res;
    });
}

function balance() {
    get(`${faucetUrl.value}/balance`).then(res => {
        if(res.status === 'error') {
            configChecker.value = res.message;
            return;
        }
        balances.value = res.result?.balance;
        faucet.value = res.result?.address;
    });
}

onMounted(() => {
    if (chainStore.current && chainStore.current.faucet) {
        balance();
    }
});


</script>
<template>
    <div>
        <div class="flex flex-col items-center justify-center mb-6 mt-14 gap-4">
            <img v-if="chainStore.current?.logo" :src="`${chainStore.current?.logo}`" class="w-16 rounded-md" />
            <div v-else class="w-16 rounded-full">
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
            <h1 class="text-primary text-3xl md:!text-6xl font-bold capitalize">
                {{ chainStore.chainName }} Faucet
            </h1>
        </div>
        <div class="bg-base-100 my-5 px-4 pt-3 pb-4 rounded shadow">
            <h2 class="card-title">Get Tokens</h2>
            <input type="text" v-model="address" class="mt-4 mb-4 w-full border border-gray-300 rounded-md p-2"
                :class="{'input-error' : !validAddress}"
                :disabled="notReady" placeholder="Enter your address" />
            <button class="btn btn-primary w-full bg-primary text-white" :disabled="notReady" @click="claim()">Get
                Tokens</button>
        </div>

        <AdBanner id="home-banner-ad" unit="banner" />

        <div class="bg-base-100 my-5 px-4 pt-3 pb-4 rounded shadow">
            <h2 class="card-title">Enable Faucet</h2>
            <div class="mt-4">
                <span class="text-base"> 1. Submit chain configuation</span>
                <div class="mockup-code bg-base-200 my-2 gap-4">
                    <div v-for="it in checklist">
                        <pre><code class="text-gray-800 dark:invert">{{ it.title }}: </code>{{ it.status ? '✅' : '❌' }} </pre>
                    </div>

                    <pre class=" text-xs text-red-500">{{ configChecker }}</pre>
                    <pre></pre>
                    <a class=" btn-ghost text-white rounded-md p-2 ml-4"
                        href="https://github.com/ping-pub/ping.pub/blob/main/faucet.md">Update</a>
                </div>

                <span class="text-base"> 2. Fund the faucet account</span>
                <div class="mockup-code bg-base-200 my-2">
                    <pre data-prefix=">"><code class=" text-gray-800 dark:invert"> Faucet Address: {{ faucet }} </code></pre>
                    <pre
                        data-prefix=">"><code class="text-gray-800 dark:invert"> Balances: {{ format.formatTokens(balances) }} </code></pre>
                </div>
            </div>
        </div>
        <input type="checkbox" v-model="faucetModal" id="my_modal_6" class="modal-toggle" />
        <div class="modal" role="dialog">
            <div class="modal-box">
                <div v-if="ret.status === 'error'">
                    <h3 class="font-bold text-red-500"> Error </h3>
                    <div>{{ ret.message }}</div>
                </div>
                <div v-else-if="ret.status === 'ok'">
                    <h3 class="font-bold text-green-500"> Token Sent! </h3>
                    <div class=" text-center mt-4"><RouterLink :to="`/${chainStore.chainName}/tx/${ret.result.txhash}`">View Transaction</RouterLink></div>
                </div>
                <h3 v-else class="font-bold text-lg"> Processing <span class="loading loading-bars loading-sm"></span> </h3>
 
                <div class="modal-action">
                    <label for="my_modal_6"  class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                </div>
                <p class="py-2">
                <div>
                    <AdBanner id="popup-ad" unit="popup" />
                </div>
                </p>
            </div>
        </div>
    </div>
</template>
