import { useRouter } from "next/router"

export default function Review() {
    const router = useRouter();
    const {productId,reviewId} = router.query;
  return (
    <div>{productId} and {reviewId}</div>
  )
}
