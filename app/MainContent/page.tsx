'use client'

import { Card, Layout } from "antd";
import React from "react";

const { Content } = Layout;

export interface MainContentProps {
  children: React.ReactNode;
}

export default function MainContent({ children }: MainContentProps) {
  return (
    <Content style={{ overflow: 'hidden', overflowY: "auto", height: "calc(100dvh - 155px)" }}>
      {children}
    </Content>
  )
}