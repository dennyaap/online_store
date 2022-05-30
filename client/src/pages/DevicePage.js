import React from 'react';
import { Container, Col, Image, Row, Card, Button } from 'react-bootstrap';
import bigstar from '../assets/bigstar.png';

const DevicePage = () => {
    const device = {id: 1, name: "Iphone 12 pro", price: 96000, rating: 5, img: 'https://app-room76.ru/wp-content/uploads/2020/10/iphone-12-pro-silver-hero.png'};
    const description = [
        {id: 1, title: 'Оперативная память', description: '5 гб'},
        {id: 2, title: 'Камера', description: '12 гб'},
        {id: 3, title: 'Процессор', description: 'Пентиум 3'},
        {id: 4, title: 'Кол-во ядер', description: '4'},
        {id: 5, title: 'Аккумулятор', description: '4000'},
    ];

    return (
        <Container className='mt-3'>
            <Row>
                <Col md={4}>
                    <Image height={300} src={device.img} />
                </Col>
                <Col md={4}>
                    <Row className='d-flex flex-column align-center'>
                        <h2>{ device.name }</h2>
                        <div 
                            className='d-flex align-items-center justify-content-center' 
                            style={{background: `url(${bigstar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64}}
                        >
                            { device.rating }
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className='d-flex flex-column align-items-center justify-content-around'
                        style={{  height: 300, fontSize: 32, border: '5px solid light'}}
                    >
                        <h3>От: { device.price } руб.</h3>
                        <Button variant='outline-dark'>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className='d-flex flex-column mt-3'>
                <h1 className='mb-4'>Характеристики</h1>
                {description.map((info, index )=> 
                    <Row key={info.id} style={{ background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
}

export default DevicePage;
