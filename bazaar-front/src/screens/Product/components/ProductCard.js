import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';

const ProductCard = props => {
    return <Paper >
        <div style={{padding: 20}}>
            <img src={props.image} style={{width: '100%'}} />
        </div>
        
        <div className='center' style={{justifyContent: 'space-between', margin: 20}}>
            <Avatar  src={props.seller_image} />
            <div style={{fontSize: "1.25rem"}}>
                <p className='product-name'>{props.name}</p>
                <p className="price">{props.price}</p>
            </div>
        </div>

    </Paper>
}

export default ProductCard;