import { Button, Container, Table, Alert } from "react-bootstrap";
import { useContext, useState } from "react";
import { CardContext } from "../contexts/CardContex";
import { collection, addDoc } from "firebase/firestore";
import Form from 'react-bootstrap/Form';
import { db } from '../index';

export const Cart = () => {
    const { clear, objects, removeObject } = useContext(CardContext);
    const [formValues, setFormValues] = useState({
        name: "",
        phone: "",
        email: ""
    });

    const total = () => {
        if (objects) {
            return objects.reduce((acumulador, valorAcumulado) => acumulador + valorAcumulado.quantity * valorAcumulado.precio, 0);
        } else {
            return 0;
        }
    };

    const handleChange = (ev) => {
        const { name, value } = ev.target;
        setFormValues((prev) => ({ ...prev, [name]: value }));
    };

    const order = {
        buyer: formValues,
        objects: objects,
        total: total(),
    };

    const sendOrder = async () => {
        try {
            const orderCollection = collection(db, "orders");
            const docRef = await addDoc(orderCollection, order);
            setFormValues({ name: "", phone: "", email: "" });
            clear();
            console.log("Orden con ID " + docRef.id + " fue creada con éxito");
        } catch (error) {
            console.error("Error al enviar la orden:", error);
        }
    };

    return (
        <Container>
            <h1>Carrito</h1>
            {objects && objects.length > 0 ? (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {objects.map((object) => (
                            <tr key={object.id}>
                                <td>{object.nombre}</td>
                                <td>{object.precio}</td>
                                <td>{object.quantity}</td>
                                <td>
                                    <Button variant="danger" onClick={() => removeObject(object.id)}>
                                        Eliminar
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="3">Total</td>
                            <td>{total()}</td>
                        </tr>
                    </tfoot>
                </Table>
            ) : (
                <Alert variant="warning">El carrito está vacío</Alert>
            )}

            <Form>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={formValues.name}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control
                        type="text"
                        name="phone"
                        value={formValues.phone}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
            </Form>

            <Button variant="primary" type="button" onClick={sendOrder}>
                Enviar Formulario
            </Button>
        </Container>
    );
};
