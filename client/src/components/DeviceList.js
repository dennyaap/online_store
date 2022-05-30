import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import Context from '../index.js';
import DeviceItem from './DeviceItem.js';
import { Row } from 'react-bootstrap';

const deviceList = observer (() => {
    const { device } = useContext(Context);
    return (
        <Row className='d-flex'>
            { 
                device.devices.map(item => 
                    <DeviceItem key={ item.id } device={ item }/>
                )
            }
        </Row>
    )
});

export default deviceList;