import React, {useState} from "react";
import { Card, CardHeader, CardBody } from "reactstrap";

const defaultBelanja = [
    {barang: "Indomie Goreng", qty: 30, satuan: "Bungkus", tempat: "Indomaret"},
    {barang: "Sari Roti", qty: 1, satuan: "Bungkus", tempat: "Alfamidi"},
    {barang: "Apel", qty: 5, satuan: "Buah", tempat: "Indomaret"},
    {barang: "Obat tikus", qty: 4, satuan: "Bungkus", tempat: "Toko Mak Yusron"},
    {barang: "Teh Botol", qty: 1, satuan: "Botol", tempat: "Indomaret"},

    
]

defaultBelanja[4].qty = defaultBelanja[0].qty * 2


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
                            {" | "}
                            {obj.tempat}
                        </p>
                    ))}
                </CardBody>
            </Card>
        </div>

    );
    
}
