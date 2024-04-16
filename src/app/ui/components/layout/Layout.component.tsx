"use client";
import React, { PropsWithChildren, useState } from "react";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    CommentOutlined,
    LineChartOutlined,
    PieChartOutlined,
    UsergroupAddOutlined,
    QuestionCircleOutlined,
    DashboardOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Space, MenuProps } from "antd";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Sider from "antd/es/layout/Sider";
import { Logo } from "../Icons";
import Title from "antd/es/typography/Title";

const { Header, Content } = Layout;

interface ILayout extends PropsWithChildren {
    title: string;
    selectedKey: string;
    selectedOpenKey?: string;
}
type MenuItem = Required<MenuProps>["items"][number];

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem(
        <Link className="text-xl" href="/dashboard/users">
            Хянах
        </Link>,
        "users",
        <DashboardOutlined style={{ fontSize: "22px" }} />
    ),
    getItem(
        <Link className="text-xl" href="/dashboard/devices">
            Тайлан
        </Link>,
        "devices",
        <LineChartOutlined style={{ fontSize: "22px" }} />
    ),
    getItem(
        <Link className="text-xl" href="/dashboard/groups">
            Үзүүлэлт
        </Link>,
        "groups",
        <PieChartOutlined style={{ fontSize: "22px" }} />
    ),
    getItem(
        <Link className="text-xl" href="/dashboard/monitoring">
            Хэлтэс
        </Link>,
        "monitor",
        <UsergroupAddOutlined style={{ fontSize: "22px" }} />
    ),
    getItem(
        <Link className="text-xl" href="/dashboard/monitoring">
            Санал
        </Link>,
        "monitor",
        <CommentOutlined style={{ fontSize: "22px" }} />
    ),
    getItem(
        <Link className="text-xl" href="/dashboard/monitoring">
            Тусламж
        </Link>,
        "monitor",
        <QuestionCircleOutlined style={{ fontSize: "22px" }} />
    ),
];

const CLayout: React.FC<ILayout> = ({ title, selectedKey = "users", selectedOpenKey = "", children }) => {
    const router = useRouter();
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <link rel="shortcut icon" href="/shortcut-logo.png" type="image/x-icon" />
            </Head>
            <Layout>
                <Sider theme="light" collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                    <div className="my-2">
                        <Logo size="sm" wText />
                    </div>
                    <Menu
                        theme="light"
                        defaultSelectedKeys={[selectedKey]}
                        defaultOpenKeys={[selectedOpenKey]}
                        mode="inline"
                        inlineIndent={40}
                        icon
                        items={items}
                    />
                </Sider>

                <Layout>
                    <Header style={{ padding: 0, background: colorBgContainer }} className="flex items-center justify-between">
                        <Space align="center">
                            <Button
                                type="text"
                                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                                onClick={() => setCollapsed(!collapsed)}
                                style={{
                                    display: "block",
                                    gap: "5",
                                    fontSize: "16px",
                                    width: 64,
                                    height: 64,
                                }}
                            />
                            <Title level={2} style={{ marginBottom: 0 }}>
                                {title}
                            </Title>
                        </Space>
                        <div
                            style={{
                                paddingRight: 16,
                            }}
                        >
                            <div className="flex items-center gap-x-6">
                                <img
                                    className="h-16 w-16 rounded-full"
                                    src={
                                        "https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=2048x2048&w=is&k=20&c=pVHyLB8WzcAZuHHUHKDrna0kokJAY2J6QwImt-smpGA="
                                    }
                                    alt=""
                                />
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{"Давзанравжаа Дундуг"}</h3>
                                    <p className="text-sm font-semibold leading-6 text-indigo-600">{"Гүйцэтгэх захирал"}</p>
                                </div>
                            </div>
                        </div>
                    </Header>
                    <Content
                        style={{
                            margin: "24px 16px",
                            padding: 24,
                            height: "calc(100vh - 64px - 48px)",
                            overflow: "auto",
                            background: colorBgContainer,
                        }}
                    >
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </>
    );
};

export default CLayout;
