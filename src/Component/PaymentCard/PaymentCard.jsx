"use client";

import React from "react";
import { Button, Card } from "antd";
import axios from "axios";

export default function PaymentCardComponent() {
  const handleCreatePayment = () => {
    axios
      .post("http://localhost:5000/create-payment", {
        amount: 3000,
        currency: "USD",
      })
      .then((res) => {
        console.log(res);
        const redirectUrl = res.data.paymentUrl;
        if (redirectUrl) {
          window.location.replace(redirectUrl);
        }
      })
      .catch((err) => {
        console.error("Payment creation failed:", err);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card
        hoverable
        style={{ width: 300 }}
        cover={
          <img
            alt="product"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Button type="primary" onClick={handleCreatePayment} block>
          Buy Now
        </Button>
      </Card>
    </div>
  );
}
