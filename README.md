# OSMG-Product-Card

This is a testing package for a npm deploy

### Oscar MG

## Example

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'osmg-product-card';
```

```
<ProductCard 
    product={product}
    initialValues={{
        count: 1,
        maxCount: 10
    }}
>
    {
        ({ count, increaseBy, maxCount, isMaxCountReached, reset }) => (
            <>
                <ProductImage   />
                <ProductTitle   />
                <ProductButtons />								
            </>
        )
    }
</ProductCard>
```