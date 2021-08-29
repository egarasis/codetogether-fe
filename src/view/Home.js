import React, {useState} from "react";
import { Card, CardHeader, CardBody } from "reactstrap";

const defaultBelanja = [
    {barang: "Indomie Goreng", qty: 30, satuan: "Bungkus"},
    {barang: "Sari Roti", qty: 1, satuan: "Bungkus"},
    {barang: "Apel", qty: 5, satuan: "Buah"},
    {barang: "Obat tikus", qty: 4, satuan: "Bungkus"}
]

export default function Home(props){
    const [dataBelanja, setDataBelanja] = useState(defaultBelanja)
    return (
        <div style={{ padding: "30px"}}>
            <Card>
                <CardHeader>List belanja keluarga cemara</CardHeader>
                <CardBody>
                    {dataBelanja.map((obj, index) => (
                        <p>
                            {index + 1}
                            {". "}
                            {obj.barang}
                            {" | "}
                            {obj.qty} {obj.satuan}
                        </p>
                    ))}
                </CardBody>
            </Card>
        </div>

    );
    
}
