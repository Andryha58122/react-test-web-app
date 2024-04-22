import andreyImg from "../images/andrey.jpg";
import armenImg from "../images/armen.jpg";
import kiryaImg from "../images/kirya.jpg";
import vladImg from "../images/vlad.jpg";
import mishaImg from "../images/misha.jpg";
import sashaImg from "../images/sasha.jpg";
import sergeyImg from "../images/sergey.jpg";

export function getData() {
  return [
    { title: "Andrey", price: 999.99, Image: andreyImg,id:1 },
    { title: "Armenio", price: 1281.99, Image: armenImg,id:2 },
    { title: "Kirya", price: 1212.99, Image: kiryaImg ,id:3},
    { title: "VladiSlave", price: 1000.99, Image: vladImg,id:4 },
    { title: "Mishyil", price: 999.99, Image: mishaImg,id:5 },
    { title: "Alexandrio", price: 1001, Image: sashaImg,id:6 },
    { title: "Sergio", price: 1488, Image: sergeyImg,id:7 },
  ];
}