import React, { useContext, useState } from 'react';
import { Modal, Button, Form, Dropdown, Col, Row} from 'react-bootstrap';
import Context from '../../index.js';

const CreateDevice = ({ show, onHide }) => {
    const { device } = useContext(Context);
    const [ info, setInfo ] = useState([]);

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', id: Date.now()}])
    }
    const removeInfo = (id) => {
        setInfo(info.filter(item => item.id !== id));
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
                            <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {
                                    device.types.map(type =>
                                         <Dropdown.Item key={type.id}>{ type.name }</Dropdown.Item>
                                    )
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className='mt-2'>
                            <Dropdown.Toggle>Выберите бренд</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {
                                    device.brands.map(brand =>
                                         <Dropdown.Item key={brand.id}>{ brand.name }</Dropdown.Item>
                                    )
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                        <Form.Control
                            className='mt-3'
                            placeholder='Название устройства..'
                        />
                        <Form.Control
                            className='mt-3'
                            placeholder='Стоимость устройства..'
                            type='number'
                        />
                        <Form.Control
                            className='mt-3'
                            type='file'
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
                                        <Form.Control placeholder='Введите название свойства' />
                                    </Col>
                                    <Col md={4}>
                                        <Form.Control placeholder='Введите описание свойства' />
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
                    <Button variant='outline-success' onClick={onHide}>Добавить</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default CreateDevice;