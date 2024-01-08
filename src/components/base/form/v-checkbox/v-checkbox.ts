// @ts-ignore
import type {PropType} from 'vue'
import {computed, defineComponent} from 'vue'

type CheckboxColor =
    | undefined
    | 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'

export default defineComponent({
    props: {
        value: {
            type: [String, Number],
            required: true,
        },
        label: {
            type: String,
            default: undefined,
        },
        checked:{
            type: Boolean,
            default: false,
        },
        modelValue: {
            type: Array,
            default: () => [],
        },
        color: {
            type: String as PropType<CheckboxColor>,
            default: undefined,
            validator: (value: CheckboxColor) => {
                // The value must match one of these strings
                if (
                    [undefined, 'primary', 'info', 'success', 'warning', 'danger'].indexOf(
                        value
                    ) === -1
                ) {
                    console.warn(
                        `V-Checkbox: invalid "${value}" color. Should be primary, info, success, warning, danger or undefined`
                    )
                    return false
                }

                return true
            },
        },
        circle: {
            type: Boolean,
            default: false,
        },
        solid: {
            type: Boolean,
            default: false,
        },
    },

    emits:['update:modelValue'],

    setup(props, {emit, attrs}) {
        const change = () => {
            const values = [...props.modelValue]
            if(props.checked){
                values.splice(values.indexOf(props.value), 1)
            }else{
                values.push(props.value)
            }
            emit('update:modelValue', values)
        }

        const classes = computed(()=>{
            const defaultClasses: any = attrs?.class || []
            return [
                ...defaultClasses,
                props.solid ? 'is-solid' : 'is-outlined',
                props.circle && 'is-circle',
                props.color && `is-${props.color}`
            ]
        })

        return{
            change,
            classes,
        }
    }
})
