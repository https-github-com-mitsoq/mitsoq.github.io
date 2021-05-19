<template>
    <div>
        <h3 :style="styles">Random words:</h3>
        <p>{{ text }}</p>
    </div>

</template>

<script>

    export default {
        name: 'FilterMenu',
        props: {
            text: {
                type: String,
                default: 'Something'
            },
            myFunc: {
                type: Function,
                default: () => {
                    return
                }
            }
        },
        data() {
            return {
                styles: {
                    margin: '0 5px 0 0',
                    textAlign: 'left'
                }
            }
        }
    }
</script>
