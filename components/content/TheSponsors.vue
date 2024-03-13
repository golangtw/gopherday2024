<template>
  <div>
    <h3>{{ $t('sponsor_level.platinum') }}</h3>
    <div class="flex gap-4 mt-4">
      <TheSponsor
        class="w-full"
        name="資策會"
        url="https://www.iii.org.tw/"
        logo="/sponsors/iii.png"
        hide-name
      />
    </div>

    <h3>{{ $t('sponsor_level.silver') }}</h3>
    <div class="flex gap-4 mt-4">
      <TheSponsor
        class="w-40"
        name="MaiCoin"
        url="https://www.maicoin.com/"
        logo="/sponsors/maicoin.png"
        hide-name
      />
      <TheSponsor
        class="w-40"
        name="Dcard"
        url="https://www.dcard.tw/"
        logo="/sponsors/dcard.png"
        hide-name
      />
    </div>

    <h3>{{ $t('sponsor_level.bronze') }}</h3>
    <div class="flex gap-4 mt-4">
      <TheSponsor
        class="w-40"
        name="TSMC 台灣積體電路製造股份有限公司"
        url="https://www.tsmc.com/chinese"
        logo="/sponsors/tsmc.jpg"
        hide-name
      />
    </div>
  </div>
</template>
