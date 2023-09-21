import { Button, Container, Table } from "react-bootstrap"
import { useContext, useState } from "react";
import { CardContext } from "../contexts/CardContex";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Form from 'react-bootstrap/Form';





export const Cart = () => {

    const [formValues, setFormValues] = useState({
        name: "",
        phone: "",
        email: ""
    })

    const { clear, objects, removeObject } = useContext(CardContext)



    const total = () =>
        objects.reduce(
            (acumulador, valorAcumulado) =>
                acumulador + valorAcumulado.quantity * valorAcumulado.precio,
            0
        )


    const handleChange = ev => {
        setFormValues(prev => ({
            ...prev,
            [ev.target.name]: ev.target.value
        }))
    }
    
    
    const sendOrder = () => {
        const order = ({
            buyer: formValues,
            objects: objects,
            total: total(),
        })

    };

    
    const firebaseConfig = {
        const db = getFirestore()
        const orderCollection = collection(db, "orders")
        addDoc(orderCollection, order).then(({ id }) => {

            if (id) {
                setFormValues({
                    name: "",
                    phone: "",
                    email: "",
                }
                )
            }
            clear()
            console.log("orden con id" + id + "fue creada con exito");
    
        }),
    
    };
    const app = initializeApp(firebaseConfig);
    
    

    return (
        <Container>
            <h1>Carrito</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th></th>
                        <th>nombre</th>
                        <th>precio</th>
                        <th>cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    {objects.map(object => (
                        <tr key={object.id}>
                            <td>{object.nombre}</td>
                            <td>{object.precio}</td>
                            <td>{object.quantity}</td>
                            <td>
                                <button>
                                    onClick={() => removeObject(object.id)}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td>total</td>
                        <td>{total()}</td>

                    </tr>
                </tfoot>
            </Table>
            <button onClick={sendOrder}>Comprar</button>

            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>nombre</Form.Label>
                    <Form.Control
                        onChange={handleChange}
                        value={formValues.name}
                        type="text"
                        name="name"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        onChange={handleChange}
                        value={formValues.email}
                        type="email"
                        name="email"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control
                        onChange={handleChange}
                        value={formValues.phone}
                        type="text"
                        name="phone"
                        required
                    />
                </Form.Group>
            </Form>
            <Button variant="primary" type="button" onClick={sendOrder}>enviar</Button>
        </Container>
    )

}





