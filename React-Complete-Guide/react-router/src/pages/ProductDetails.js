import { useParams } from "react-router-dom"

function ProductDetails(){

    const param = useParams()

    console.log(param.productId)

    return (
        <section>
            <h1>Product details</h1>
            <p>{param.productId}</p>
        </section>
    )

}

export default ProductDetails