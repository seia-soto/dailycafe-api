# Dailycafe API

This is API of Dailycafe application made for community.
I think their app services are not usable enough and can be improved from community-driven projects.

There are even no reverse engineering skills used to get the API endpoints.
I just got them from their mobile website.

I hope Dailycafe to be a healthy community-driven service. 🥳

> **Are you going to publish any projects using this package from organization or company?**
> The use of this library is prohibited by license explicitally.
> See additional info from license section.

## Table of Contents

- [API](#api)
- [License](#license)

# API

We're providing two set of functions for developer experience.

- Stateless (module), a set of functions
- Statefull (class), a statefull class wrapper for stateless functions

Note that wrapped function names are not same with stateless version.
It generally put category name additionally.

Simply, like example:

```typescript
import { Dailycafe, baseClient, api } from 'dailycafe-api'

const dailycafe = new Dailycafe()

// stateless
api.coupons.getDailyDiscounts(baseClient)

// statefull
dailycafe.getDiscountsByDaily()
```

You can choose your prefered style by project type.
For typescript types, please refer the source code.

We doesn't provide support for any development since this is not an official client.

## Stateless (module)

First of all, please prepare following modules by your project target:
- tough-cookie (if you want maintain the request state with cookies)

We consist our stateless function set with categories:
- coupons
- cards

Note that all function parameters take `got` instance as an optional first argument of the function.

You may start with `api` module exported from this package.

```typescript
import { api, baseClient } from 'dailycafe-api'

const client = baseClient.extend({
  ... // your options here
})

api.coupons.getDailyDiscounts(client) // returns promise
```

### `coupons` module

We handle coupon related topic in this category.

#### `getDailyDiscounts`

#### `getRecentSeen`

#### `getInterestedByFriends`

#### `getFeaturedDiscounts`

## Statefull (class)

We remapped some category names from stateless module for readability.
In this case, we don't take `got` instance as a first argument of the function.

It's encouraged to use stateless module if you want to give customized `got` instance instead.

### `coupons` module (identified as `discounts` in statefull section)

#### `public getDiscountsByDaily`

#### `public getDiscountsRecentSeen`

#### `public getDiscountsInterestedByFriends`

#### `public getDiscountsFeatured`

# License

I picked up the MIT license by default for community, but use of this package from companies (including non-profit) are prohibited.
If you still want to use this library, please make a contract with dailycafe application owner, zlgoon.

> I am not associated with "zlgoon" or any companies, and doesn't provide any support on the third-party development.
