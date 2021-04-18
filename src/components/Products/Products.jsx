import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';
const products = [
    { id: 1, name: 'Ape Shit Hoodie', description: '100% cotton pullover hoodie.', price: '$45', image: 'https://image.spreadshirtmedia.com/image-server/v1/mp/products/T111A2MPA3629PT17X67Y20D1029255088FS2288/views/1,width=378,height=378,appearanceId=2,backgroundColor=F2F2F2,modelId=1460,crop=list/baby-monkey-mens-hoodie.jpg'}

];

const Products = () => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
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