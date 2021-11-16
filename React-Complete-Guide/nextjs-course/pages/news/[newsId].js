import {useRouter} from "next/router"

//our-domain.com/news/something-important

function DetailPage(){

    const router = useRouter()

    return (
        <h1>The detail page</h1>
    )
}

export default DetailPage