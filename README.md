# React-subscriptionly-checkout

This component is used to help developers process payments anywhere on their sites.

## Installation

There are a few pieces you need to get started
```node
npm install react-stripe-elements react-subscriptionly-checkout
```

Then you need to wrap our component with react-stripe-elements

```
import { StripeProvider, Elements } from 'react-stripe-elements'
import { SubCheckout } from 'react-subscriptionly-checkout'; 

    <StripeProvider apiKey="pk_live_ or pk_test_ from stripe">
      <Elements>
         <SubCheckout price={100} />
      </Elements>
    </StripeProvider>
```

## Reach out
email us at info@subscriptionly.io for more info

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://choosealicense.com/licenses/mit/)