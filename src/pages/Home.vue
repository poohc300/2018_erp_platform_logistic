<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50">
        <nav-tabs-card>
          <template slot="content">
            <md-tabs md-sync-route class="md-success" md-alignment="centered" >
              <md-tab id="tab-today" md-label="당일배송">
                <TodayDelivery/>
              </md-tab>
              <md-tab id="tab-history" md-label="배송내역" >
               <DeliveryHistory/>
              </md-tab>

              <md-tab id="tab-refund" md-label="반품내역" >
                <RefundHistory/>
              </md-tab>
            </md-tabs>
          </template>
        </nav-tabs-card>
      </div>
    </div>
  </div>
</template>

<script>
import {
  StatsCard,
  NavTabsCard,
  DeliveryHistory,
  RefundHistory,
  TodayDelivery
} from '@/components'

export default{
  components: {
    NavTabsCard,
    DeliveryHistory,
    RefundHistory,
    TodayDelivery,
  },
  data () {
    return {
    }
  }
}
</script>
