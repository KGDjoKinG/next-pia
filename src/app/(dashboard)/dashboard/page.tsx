"use client";

import { Layout } from "@/src/app/ui/components/layout";

export default function Dashboard(): JSX.Element {
    return (
        <Layout title="Dashboard" selectedKey="dashboard" selectedOpenKey="dashboard">
            <section className="w-full rounded-3xl">
                <div className="xl:px-[50px] pb-[66px]">
                    <div className="pb-8 mb-10 border-b">
                        <h1 className="font-[700] text-[28px] leading-[36px] text-[#1F2A44] dark:text-white font-noto">Dashboard</h1>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
