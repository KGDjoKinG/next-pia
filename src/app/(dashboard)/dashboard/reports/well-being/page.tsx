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

const Pie = dynamic<any>(
    () => import("@ant-design/plots").then(({ Pie }) => Pie),
    {
        ssr: false,
    }
);

export default function WellBeing(): JSX.Element {
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
            autoFit: true,
            fill: "linear-gradient(-90deg, white 0%, darkgreen 100%)",
        },
        autoFit: true,
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

    const PieConfig = {
        data: [
            { type: "Great", value: 25 },
            { type: "Good", value: 25 },
            { type: "Okay", value: 20 },
            { type: "Poor", value: 30 },
        ],
        angleField: "value",
        colorField: "type",
        paddingRight: 80,
        innerRadius: 0.6,

        legend: {
            color: {
                title: false,
                position: "left",
                rowPadding: 20,
                itemName: {
                    style: {
                        fill: "#000",
                    },
                },
            },
            style: {
                fontSize: 30,
            },
        },
    };

    return (
        <Layout
            title="Well-being"
            selectedKey="well-being"
            selectedOpenKey="subreports"
        >
            <section className="w-full h-full rounded-3xl">
                <div className="flex flex-row w-full h-full">
                    <div className="flex flex-col w-2/5 ">
                        <div className="flex w-full">
                            <Area {...config} />
                        </div>
                        <Divider type="horizontal" style={{ margin: "0px" }} />
                        <div className="">
                            <Pie {...PieConfig} />
                        </div>
                    </div>
                    <div className="flex flex-col w-3/5 bg-red-700"></div>
                </div>
            </section>
        </Layout>
    );
}
