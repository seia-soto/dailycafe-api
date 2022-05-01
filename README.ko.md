# Dailycafe API

이것은 커뮤니티를 위해 만들어진 일상카페 애플리케이션의 API입니다.
저는 그들의 앱 서비스가 사용성이 부족하고 커뮤니티 기반 프로젝트들에 의해 향상될 수 있다고 생각합니다.

API 엔드포인트를 알기 위해 리버스 엔지니어링 기술 또한 사용되지 않았습니다.
단지 그들의 모바일 웹 사이트에서 가져왔을 뿐입니다.

저는 일상카페가 건강한 커뮤니티 기반 서비스가 되길 바랍니다. 🥳

> **조직이나 기업에서 이 패키지를 사용하여 프로젝트를 게시할 계획이신가요?**
> 이 라이브러리의 사용은 명시적으로 금지되어 있습니다.
> 라이선스(license) 부분에서 추가 정보를 확인하세요.

## Table of Contents

- [API](#api)
- [License](#license)

# API

저희는 개발자 경험을 위해 2가지 묶음의 함수들을 제공하고 있습니다.

- Stateless (module), 상태가 저장되지 않는 함수 집합
- Statefull (class), 위 함수 집합을 사용하여 만들어진 상태 유지가 가능한 class 래퍼

래핑된 함수 이름들은 상태가 stateless 버전들과는 다르다는 것을 명심하세요.
주로 카테고리 이름을 추가로 넣고 있습니다.

아래 예시와 같이 간단하게 말이죠.

```typescript
import { Dailycafe, baseClient, api } from 'dailycafe-api'

const dailycafe = new Dailycafe()

// stateless
api.coupons.getDailyDiscounts(baseClient)

// statefull
dailycafe.getDiscountsByDaily()
```

프로젝트 형태에 따라 선호하는 스타일을 선택하시면 됩니다.
typescript 타입에 관하여서는 소스코드를 참고해주세요.

이 프로젝트가 공식 클라이언트가 아니기 때문에 저희는 그 어떤 개발의 도움에도 참여하지 않을 것입니다.

## Stateless (module)

먼저 다음 모듈들을 프로젝트 목적에 맞게 준비하세요.
- tough-cookie (요청 상태를 쿠키 등과 함께 유지하고 싶으시다면)

저희는 stateless 함수를 다음 카테고리로 구성하고 있습니다.
- coupons
- cards

모든 함수는 `got` 인스턴스를 첫 번째 선택적 인자로 가집니다.

이 패키지에서 제공하는 `api` 모듈로 시작해보세요.

```typescript
import { api, baseClient } from 'dailycafe-api'

const client = baseClient.extend({
  ... // 당신의 옵션을 여기에 넣어주세요
})

api.coupons.getDailyDiscounts(client) // promise를 반환
```

### `coupons` module

저희는 쿠폰과 관련된 것을 이 카테고리에서 다루고 있습니다.

#### `getDailyDiscounts`

#### `getRecentSeen`

#### `getInterestedByFriends`

#### `getFeaturedDiscounts`

## Statefull (class)

저희는 가독성을 위해 몇몇 카테고리 이름을 stateless 모듈로부터 재구성했습니다.
이 경우에는 저희는 함수의 첫 번째 인자로 `got` 인스턴스를 가지지 않을 예정입니다.

만약 직접 변화를 주신 `got` 인스턴스를 대신 사용하고 싶으시다면 stateless 모듈을 사용하는 것이 좋습니다.

### `coupons` module (identified as `discounts` in statefull section)

#### `public getDiscountsByDaily`

#### `public getDiscountsRecentSeen`

#### `public getDiscountsInterestedByFriends`

#### `public getDiscountsFeatured`

# License

커뮤니티를 위해 기본적으로 MIT 라이선스를 채택하고 있지만 (비영리를 포함한) 회사에서의 사용은 금지됩니다.
여전히 이 라이브러리를 사용하고 싶으시다면, 일상카페 애플리케이션 소유자인 즐거운과 계약을 맺으십시오.

> 저는 "즐거운"이나 그 어떤 회사와도 연관되어 있지 않으며 제 3자 개발작에 그 어떤 지원도 하지 않습니다.
