<template>
    <div class="product-variations">
        <div class="product-variations__top">
            <div class="title">
                Select A {{ variationsType }}
            </div>
            <product-detail-accordian
                v-if="dto.size_guide"
                title="Size"
                :subtitle="'Here\'s how to find your fit'"
            >
                <template v-slot:content>
                    <div class="size" v-html="dto.size_guide"></div>
                </template>
            </product-detail-accordian>
        </div>
        <div ref="container" class="product-variations__viewport">
            <div class="sku-list">
                <div
                    v-for="(sku, i) in skuStates.inStock"
                    :key="'sku-instock-' + i"
                    :ref="'inStock-' + i"
                    :class="['sku-list__item', sku.class, { selected: sku.sku_id === selecteId }]"
                    data-cy="sku--item"
                    @click="sku.sku_id === selecteId ? deselect() : select(sku)"
                >
                    {{ sku.value }}
                </div>
                <div v-if="skuStates.inStock.length && skuStates.outOfStock.length" class="divider"></div>
                <div
                    v-for="(sku, i) in skuStates.outOfStock"
                    :key="'sku-outOfStock-' + i"
                    :ref="'outOfStock-' + i"
                    :class="['sku-list__item', sku.class, { selected: sku.sku_id === selecteId }]"
                    data-cy="sku--item"
                    @click="sku.sku_id === selecteId ? deselect() : select(sku)"
                >
                    {{ sku.value }}
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import ProductDetailAccordian from '@/components/Partials/ProductDetailAccordian'
import * as Obj from '@/util/Obj'
import { mapActions } from 'vuex'
export default {
    name: 'product-variations',
    components: {
        ProductDetailAccordian
    },
    props: {
        skus: {
            type: Array,
            default: () => []
        },
        selected: {
            type: Object,
            default: () => ({})
        },
        dto: {
            type: Object,
            required: true
        }
    },
    data () {
        return {
            isDown: false,
            startX: null,
            scrollLeft: null
        }
    },
    computed: {
        variationsType () {
            return Obj.has(this.skus, '0.fields.Size') ? 'Size'
                : Obj.has(this.skus, '0.fields.Device') ? 'Device'
                    : Obj.has(this.skus, '0.fields.Type') ? 'Type'
                        : 'Size'
        },
        selecteId () {
            return Obj.get(this.selected, 'sku_id')
        },
        skuStates () {
            return this.skus.reduce((skus, sku) => {
                sku.class = (sku.status === 'SOLD OUT')
                    ? 'soldOut'
                    : sku.status === 'ON HOLD'
                        ? 'onHold'
                        : sku.quantity < 5
                            ? 'lowStock'
                            : 'inStock'
                skus[['inStock', 'lowStock'].includes(sku.class) ? 'inStock' : 'outOfStock'].push(sku)
                return skus
            }, {
                inStock: [],
                outOfStock: []
            })
        }
    },
    mounted () {
        this.addEventListeners()

        // If query param contains sku, pre-select it
        let paramSku = this.skus?.find(sku =>
            sku.sku_id === `${this.$route?.query?.sku || ''}`
        )
        // Wait until all components are mounted
        if (paramSku?.quantity > 0)
            this.$nextTick(() => { this.select(paramSku) })
    },
    beforeDestroy () {
        this.removeEventListeners()
    },
    methods: {
        ...mapActions({
            setSelectedSkuQty: 'SET_SELECTED_SKU_QTY'
        }),
        select (val) {
            this.setSelectedSkuQty(val.quantity)
            this.$emit('select', val)
        },
        deselect () {
            this.$emit('deselect')
        },

        // drag-scroll handlers
        dragStart (e) {
            const slider = this.$refs['container']
            this.isDown = true
            slider.classList.add('active')
            this.startX = e.clientX - slider.offsetLeft
            this.scrollLeft = slider.scrollLeft
        },
        dragScroll (e) {
            if (!this.isDown) return
            const slider = this.$refs['container']
            const x = e.clientX - slider.offsetLeft
            const walk = x - this.startX
            slider.scrollLeft = this.scrollLeft - walk
        },
        dragEnd () {
            this.isDown = false
            this.$refs['container'].classList.remove('active')
        },
        addEventListeners () {
            if (!this.$root.$el) return
            this.$refs['container'].addEventListener('mousedown', this.dragStart)
            this.$root.$el.addEventListener('mousemove', this.dragScroll)
            this.$refs['container'].addEventListener('mouseleave', this.dragEnd)
            this.$root.$el.addEventListener('mouseup', this.dragEnd)
        },
        removeEventListeners () {
            if (!this.$root.$el) return
            this.$refs['container'].removeEventListener('mousedown', this.dragStart)
            this.$root.$el.removeEventListener('mousemove', this.dragScroll)
            this.$refs['container'].removeEventListener('mouseleave', this.dragEnd)
            this.$root.$el.removeEventListener('mouseup', this.dragEnd)
        }
    }
}
</script>

<style lang="scss" scoped>
    .title {
        color: $colour-tungsten;
        font-family: "Source Sans Pro", sans-serif;
        font-size: 14px;
        text-size-adjust: 100%;
        text-transform: uppercase;
        font-weight: 600;
        height: 56px;
        display: flex;
        align-items: center;
    }

    .product-variations {
        // stopping all highlighting on this component
        & * {
            -webkit-user-select: none;  /* Chrome all / Safari all */
            -moz-user-select: none;     /* Firefox all */
            -ms-user-select: none;      /* IE 10+ */
            user-select: none;          /* Likely future */
        }
        &__top {
            align-items: flex-start;
            display: flex;
            justify-content: center;
        }

        &__viewport {
            background: $colour-white;
            overflow-x: scroll;
            white-space: nowrap;
            transition: all 0.2s;
            touch-action: pan-x;
            padding-bottom: .5em;
            scrollbar-width: none; // Hide scrollbar for Firefox 64
            -ms-overflow-style: none; // Hide scrollbar for IE and Edge
            &::-webkit-scrollbar {
                display: none; // Hide scrollbar for Chrome, Safari and Opera
            }
        }
    }

    .sku-list {
        height: 56px;
        text-align: left;
        white-space: nowrap;
        width: 100%;
        display: flex;
        align-items: center;
        & > div {
            margin-right: .5em;
            &:last-child {
                margin-right: 0;
            }
        }
        &__item {
            display: inline-flex;
            height: 56px;
            min-width: 56px;
            border: 2px solid $colour-silver;
            border-radius: 28px;
            justify-content: center;
            align-items: center;
            padding: 0 12px;
            flex-shrink: 0;
            color: $colour-tungsten;
            font-size: 14px;
            font-weight: 600;
            box-sizing: border-box;
            cursor: pointer;

            &.inStock {
                &.selected {
                    border-color: $colour-tungsten;
                }
            }
            &.lowStock {
                color: $colour-citrus;
                &.selected {
                    border-color: $colour-citrus;
                }
            }
            &.onHold {
                border-style: dotted;
                &.selected {
                    border-color: $colour-tungsten;
                }
            }
            &.soldOut {
                border-style: dotted;
                text-decoration: line-through;
                &.selected {
                    border-color: $colour-tungsten;
                }
            }
        }
    }


    .divider {
        display: inline-block;
        height: 40px;
        border-right: 1px solid $colour-mercury;
    }
</style>
