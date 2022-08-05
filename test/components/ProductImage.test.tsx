import React from 'react'
import renderer from 'react-test-renderer'
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('<ProductImage />', () => {
    test('It should render successfully the given image', () => {
        const wrapper = renderer.create(
            <ProductImage img='http:://thereisanimage.com/image.jpg' className='custom-class' />
        )
        expect( wrapper.toJSON() ).toMatchSnapshot()
    });
    test('It should display the component with the product image', () => {
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <ProductImage />
                    )                    
                }
            </ProductCard>
        )
        expect( wrapper.toJSON() ).toMatchSnapshot()
    });
});