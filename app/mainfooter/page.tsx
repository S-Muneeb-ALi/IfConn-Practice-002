'use client'

import { Layout } from "antd";
import React from "react";

const { Footer } = Layout;


export default function MainFooter() {
  return (
    <Footer style={{ textAlign: 'center' }}>
     {new Date().getFullYear()}
    </Footer>
  )
}