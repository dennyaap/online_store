import React, { useContext, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import BrandBar from '../components/BrandBar';
import TypeBar from '../components/TypeBar';
import DeviceList from '../components/DeviceList';
import Context from '../index';
import { fetchBrands, fetchDevices, fetchTypes } from '../http/deviceAPI';
import { observer } from 'mobx-react-lite';


const Shop = observer ( () => {
    const { device } = useContext(Context);

    useEffect( () => {
        fetchTypes().then(data => device.setTypes(data));
        fetchBrands().then(data => device.setBrands(data));
        fetchDevices().then(data => device.setDevices(data.rows));

    }, [])
    return (
        <Container>
            <Row className="mt-4">
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <BrandBar />
                    <DeviceList />
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;
