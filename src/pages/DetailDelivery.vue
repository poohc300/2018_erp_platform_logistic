<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33">
        <nav-tabs-card>
          <template slot="content">
             <div class="md-autocomplete">
            <md-autocomplete class="search" v-model="selectedEmployee" :md-options="employees">
              <label>Search...</label>
            </md-autocomplete>
          </div>
          </template>
        </nav-tabs-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50">
        <nav-tabs-card>
          <template slot="content">
              <md-tab id="tab-detail" md-label="상세보기테스트">
                <DetailView/>
                 <md-table-cell>
              </md-table-cell>
              </md-tab>
              <md-table-row>
              </md-table-row>
          </template>
        </nav-tabs-card>
      </div>
    </div>
    <Modal/>
  </div>
</template>

<script>
import {
  StatsCard,
  NavTabsCard,
  Modal,
  DeliveryHistory,
  RefundHistory,
  TodayDelivery,
  DetailView
} from '@/components'

export default{
  components: {
    NavTabsCard,
    DeliveryHistory,
    RefundHistory,
    TodayDelivery,
    DetailView
  },
  data () {
    return {
    }
  }
}
</script>
