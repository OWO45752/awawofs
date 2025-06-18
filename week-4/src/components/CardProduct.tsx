// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
import React from "react";
import { Card, Image } from "antd";

interface ICardProductProps {
    id: number;
    title: string;
    desc: string;
    image: string
}

const CardProduct = (prop: { d: ICardProductProps }) => {

    return (
        <Card title={prop.d.title}>
            <Image src={prop.d.image} />
            <p>{prop.d.desc}</p>
        </Card>
    )
}

export default CardProduct;