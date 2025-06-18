// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
import React from 'react'
import CardProduct from './components/CardProduct'
import { Row, Col } from 'antd'

import datrus from "./mockery.json";

function App() {

    return (
        <>
            <Row>
                {datrus.map(p => (
                    <Col key={p.id} xs={24} sm={12} md={8} lg={6}>
                        <CardProduct d={p}/>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default App
