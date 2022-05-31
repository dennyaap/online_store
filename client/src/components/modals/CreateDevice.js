import React, { useContext, useState, useEffect } from 'react';
import { Modal, Button, Form, Dropdown, Col, Row} from 'react-bootstrap';
import Context from '../../index.js';
import { fetchBrands, fetchTypes, createDevice } from '../../http/deviceAPI';
import { observer } from 'mobx-react-lite';

const CreateDevice = observer(({ show, onHide }) => {
    const { device } = useContext(Context);
    const [ name, setName ] = useState('');
    const [ price, setPrice ] = useState(0);
    const [ file, setFile ] = useState(null);
    const [ info, setInfo ] = useState([]);

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', id: Date.now()}])
    }
    const removeInfo = (id) => {
        setInfo(info.filter(item => item.id !== id));
    }

    const selectFile = (e) => {
        setFile(e.target.files[0]);
    }

    useEffect( () => {
        fetchTypes().then(data => device.setTypes(data));
        fetchBrands().then(data => device.setBrands(data));
    }, [])

    const changeInfo = (key, value, id) => {
        setInfo(info.map(item => item.id === id ? {...item, [key]: value} : item))
    }

    const addDevice = () => {
        const formData = new FormData();

        formData.append('name', name);
        formData.append('price', `${price}`);
        formData.append('img', file)
        formData.append('typeId', device.selectedType.id);
        formData.append('brandId', device.selectedBrand.id);
        formData.append('info', JSON.stringify(info));

        createDevice(formData).then( data => onHide() );
    }

    return (
        <div>
            <Modal
                show={show}
                onHide={onHide}
                size="lg"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Добавить устройство
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Dropdown className='mt-2'>
                            <Dropdown.Toggle>{device.selectedType.name || 'Выберите тип'}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {
                                    device.types.map(type =>
                                         <Dropdown.Item 
                                         key={type.id} 
                                         onClick={ () => device.setSelectedType(type)}
                                         >
                                            { type.name }
                                         </Dropdown.Item>
                                    )
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className='mt-2'>
                            <Dropdown.Toggle>{device.selectedBrand.name || 'Выберите бренд'}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {
                                    device.brands.map(brand =>
                                         <Dropdown.Item 
                                         key={brand.id} 
                                         onClick={ () => device.setSelectedBrand(brand)}
                                         >
                                            { brand.name }
                                         </Dropdown.Item>
                                    )
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                        <Form.Control
                            className='mt-3'
                            placeholder='Название устройства..'
                            value={name}
                            onChange={ (e) => setName(e.target.value)}
                        />
                        <Form.Control
                            className='mt-3'
                            placeholder='Стоимость устройства..'
                            type='number'
                            value={price}
                            onChange={ (e) => setPrice(Number(e.target.value))}
                        />
                        <Form.Control
                            className='mt-3'
                            type='file'
                            onChange={selectFile}
                        />
                        <hr/>
                        <Button
                            variant={'outline-dark'}
                            onClick={addInfo}
                        >
                            Добавить новое свойство
                        </Button>
                        {
                            info.map(item => 
                                <Row className='mt-3' key={item.id}>
                                    <Col md={4}>
                                        <Form.Control
                                            value={item.title} 
                                            onChange = { (e) => changeInfo('title', e.target.value, item.id)}
                                            placeholder='Введите название свойства' 
                                        />
                                    </Col>
                                    <Col md={4}>
                                        <Form.Control
                                            value={item.description} 
                                            onChange = { (e) => changeInfo('description', e.target.value, item.id)}
                                            placeholder='Введите описание свойства' 
                                        />
                                    </Col>
                                    <Col md={4}>
                                        <Button
                                            variant='outline-danger'
                                            onClick={ () => removeInfo(item.id)}
                                        >
                                            Удалить
                                        </Button>
                                    </Col>
                                </Row>
                            )
                        }
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
                    <Button variant='outline-success' onClick={addDevice}>Добавить</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
});

export default CreateDevice;