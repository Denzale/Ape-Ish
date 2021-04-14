import { Grid } from '@material-ui/core';
import Product from './Product/Product';

const products = [
    { id: 1, name: 'Ape Shit Hoodie', description: '100% cotton pull over hoodie.', price: '$45', image: 'https://image.spreadshirtmedia.com/image-server/v1/mp/products/T111A2MPA3629PT17X67Y20D1029255088FS2288/views/1,width=378,height=378,appearanceId=2,backgroundColor=F2F2F2,modelId=1460,crop=list/baby-monkey-mens-hoodie.jpg'}
];

const Products = () => {
    return (
        <main>
            <Grid container justify = "center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
};

export default Products