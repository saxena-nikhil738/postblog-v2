import { Container } from "@mui/material";
import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
export default function Slidder() {
  const [imageNum, setImageNum] = useState(1);
  const sliderImages = [
    {
      url: "https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3RyZWV0JTIwZG9nfGVufDB8fDB8fHww&w=1000&q=80",
    },
    {
      url: "https://media.istockphoto.com/id/1269580436/photo/sleeping-street-puppy-dogs.jpg?s=612x612&w=0&k=20&c=CkZ9loaJkuWQdb1ndAFevBJpounsyHtb6toGYCUM-RE=",
    },
    {
      url: "https://www.ecns.cn/hd/2020/04/10/0ddcea2f98334075bedcaf5920732c27.jpg",
    },
    {
      url: "https://t4.ftcdn.net/jpg/05/12/15/95/360_F_512159575_iEb7MBaNzLGfnoYHvYD5AxaLWL7dkQjC.jpg",
    },
    {
      url: "https://st3.depositphotos.com/1400069/15082/i/600/depositphotos_150825682-stock-photo-lonely-puppy-on-an-empty.jpg",
    },
  ];
  return (
    <div className="justify-content-center mx-auto">
      <SimpleImageSlider
        width={1550}
        height={700}
        images={sliderImages}
        showBullets={true}
        // showNavs={true}
        autoPlay={true}
        style={{
          display: "flex",
          margin: "auto",
          marginTop: "85px",
        }}
        onStartSlide={(index, length) => {
          setImageNum(index);
        }}
        autoPlayDelay={3}
      ></SimpleImageSlider>
    </div>
  );
}
