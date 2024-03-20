import React from 'react'
import Table from 'react-bootstrap/Table';

export const ListProducts = ({ listProducts }) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>price</th>
                    <th>category</th>
                </tr>
            </thead>
            <tbody>
                {
                    listProducts.map((element) => {
                        return (
                            <tr>
                                <td>{element.id}</td>
                                <td>{element.title}</td>
                                <td>{element.price}</td>
                                <td>{element.category}</td>
                            </tr>
                        )
                    })
                }

            </tbody>
        </Table>
    )
}
