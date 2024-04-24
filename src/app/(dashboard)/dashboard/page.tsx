"use client";
import { Layout } from "@/src/app/ui/components/layout";
// import { Area } from "@ant-design/plots";
import { Divider, Progress } from "antd";
import dynamic from "next/dynamic";
import { Fragment } from "react";

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

const testSubStats = [
    {
        title: "Well-being score",
        subtitle: "Most recent measure",
        value: 73,
        percentage: 70,
        color: "#3A965F",
        description: (
            <>
                Your most recent well-being score of 73{" "}
                <b>is a little low and could be better</b> compared the average
                of 77 across companies.
            </>
        ),
    },
    {
        title: "Stress score",
        subtitle: "Most recent measure",
        value: 29,
        percentage: 20,
        color: "#FD9331",
        description: (
            <>
                Your most recent stress score of 29{" "}
                <b>is a alright but higher than most</b> compared to the average
                of 26 across companies.
            </>
        ),
    },
    {
        title: "eSPN score",
        subtitle: "Most recent measure",
        value: 5,
        percentage: 50,
        color: "#36BFC8",
        description: (
            <>
                Your most recent burnout score of 5{" "}
                <b>is a little low and could be better</b> compared the average
                of 53 across companies.
            </>
        ),
    },
];

const Area = dynamic<any>(
    () => import("@ant-design/plots").then(({ Area }) => Area),
    {
        ssr: false,
    }
);

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
            title="Dashboard"
            selectedKey="dashboard"
            selectedOpenKey="dashboard"
        >
            <section className="w-full h-full rounded-3xl">
                {" "}
                <div className="flex flex-col w-full h-full">
                    <div className="w-full h-full flex flex-row">
                        <div className="w-3/4">
                            <Area className="p-2" {...config} />
                        </div>
                        <Divider
                            type="vertical"
                            style={{ margin: "0px", height: "auto" }}
                        />

                        <div className="w-1/4 flex flex-col">
                            {testStats.map((stat, idx) => (
                                <Fragment key={`stat-iterate-${idx}`}>
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

                                    <Divider
                                        type="horizontal"
                                        style={{ margin: "0px" }}
                                    />
                                </Fragment>
                            ))}
                        </div>
                    </div>

                    <Divider type="horizontal" style={{ margin: "0px" }} />
                    <div className="flex flex-row w-full h-full">
                        <div className="flex flex-row w-3/4">
                            {testSubStats.map((subStat, idx) => (
                                <Fragment key={`substat-iterate-${idx}`}>
                                    <div className="flex-1 flex flex-col p-10 gap-3">
                                        <div className="flex flex-row gap-2 items-center">
                                            <div
                                                className="text-3xl font-bold"
                                                style={{ color: subStat.color }}
                                            >
                                                {subStat.value}
                                            </div>
                                            <div className="flex flex-col">
                                                <span
                                                    className="text-md font-bold leading-4 "
                                                    style={{
                                                        color: subStat.color,
                                                    }}
                                                >
                                                    {subStat.title}
                                                </span>
                                                <span
                                                    className="text-sm font-bold leading-4 "
                                                    style={{
                                                        color: subStat.color,
                                                        opacity: 0.5,
                                                    }}
                                                >
                                                    {subStat.subtitle}
                                                </span>
                                            </div>
                                        </div>
                                        <div>
                                            <Progress
                                                percent={subStat.percentage}
                                                showInfo={false}
                                                trailColor={
                                                    subStat.color + "33"
                                                }
                                                strokeColor={subStat.color}
                                            />
                                        </div>
                                        <div className="font-medium text-[#1D1D1FCC]">
                                            {subStat.description}
                                        </div>
                                    </div>
                                    <Divider
                                        type="vertical"
                                        style={{
                                            margin: "0px",
                                            height: "auto",
                                        }}
                                    />
                                </Fragment>
                            ))}
                        </div>
                        <div className="w-1/4"></div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
