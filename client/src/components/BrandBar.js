import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import Context from '../index.js';
import { Row, Card } from 'react-bootstrap';

const BrandBar = observer(() => {
    const { device } = useContext(Context);
    return (
        <div className='d-flex flex-wrap'>
            { device.brands.map(brand =>
                <Card
                    key={ brand.id }
                    className='p-3'
                    onClick={ () => device.setSelectedBrand( brand ) }
                    border={ brand.id === device.selectedBrand.id ? 'success' : 'light'}
                    style={ { cursor: 'pointer' } }
                >
                    { brand.name }
                </Card> 
            )}
        </div>
    )
})

export default BrandBar;