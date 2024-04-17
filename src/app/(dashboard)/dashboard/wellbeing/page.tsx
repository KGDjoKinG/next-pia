"use client";

import { Layout } from "@/src/app/ui/components/layout";
import { Area } from "@ant-design/plots";
import { Divider } from "antd";

const testStats = [
    { name: "Employees", description: "Currently active", value: "248" },
    {
        name: "Years of tenure",
        description: "All employee records",
        value: "1.2",
    },
    { name: "Average age", description: "Currently active", value: "31" },
    { name: "Employees", description: "Currently active", value: "95%" },
    { name: "New hires", description: "Last 12 months", value: "45" },
];

export default function Dashboard(): JSX.Element {
    const config = {
        data: {
            type: "fetch",
            value: "https://assets.antv.antgroup.com/g2/stocks.json",
            transform: [
                { type: "filter", callback: (d: any) => d.symbol === "GOOG" },
            ],
        },
        xField: (d: any) => new Date(d.date),
        yField: "price",
        style: {
            fill: "linear-gradient(-90deg, white 0%, darkgreen 100%)",
        },
        axis: {
            y: { labelFormatter: "~s" },
        },
        line: {
            style: {
                stroke: "darkgreen",
                strokeWidth: 2,
            },
        },
    };

    return (
        <Layout
            title="Well-being"
            selectedKey="wellbeing"
            selectedOpenKey="subreports"
        >
            <section className="w-full rounded-3xl">
                <div className="w-full flex flex-col">
                    <div className="w-full h-full flex flex-row">
                        <div className="w-3/4">
                            <Area className="p-2" {...config} />
                        </div>
                        <Divider
                            type="vertical"
                            style={{ margin: "0px", height: "auto" }}
                        />

                        <div className="w-1/4 flex flex-col">
                            {testStats.map((stat) => (
                                <div className="flex-1 flex flex-row gap-4 items-center ml-10">
                                    <div className="text-[#1D1D1FCC] text-[32px] font-bold">
                                        {stat.value}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[#1D1D1FCC] text-md font-medium leading-4">
                                            {stat.name}
                                        </span>
                                        <span className="text-[#1D1D1FCC] text-sm font-light leading-4">
                                            {stat.description}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Divider type="horizontal" style={{ margin: "0px" }} />
                </div>
            </section>
        </Layout>
    );
}
