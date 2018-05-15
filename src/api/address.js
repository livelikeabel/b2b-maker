import { address } from "../utils/platingRequest";

//user address와 형태를 맞춘다.
//address nomalizer에게 params로 주소를 보내고, res 받은 주소 리스트를 map돌려서 트리밍
export function getAddressInfo(params) {
  return address.get("/", { params }).then(res =>
    res.data.map(addr => ({
      breakfastDeliveryAvailable: addr.goodMorningAvailable,
      lunchDeliveryAvailable: addr.lunchAvailable,
      deliveryAvailable: addr.available,
      address: addr.jibunAddress,
      lat: addr.latitude,
      lon: addr.longitude,

      // 기존형태도 보존하기
      ...addr
    }))
  );
}
