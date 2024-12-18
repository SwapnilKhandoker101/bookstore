import {z} from 'zod'

const orderValidationSchema=z.object({
    email:z.string().email(),
    product:z.string(),
    quantity:z.number().min(1),
    totalPrice:z.number().min(0)
})

export default orderValidationSchema;