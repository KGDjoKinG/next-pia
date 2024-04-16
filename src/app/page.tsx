"use client";
import { Button, Checkbox, Input } from "antd";
import Head from "next/head";
import Image from "next/image";
import { LoginOutlined } from "@ant-design/icons";
import { Logo } from "./ui/components/Icons";
import { Dispatch, FunctionComponent, SetStateAction, useState } from "react";

interface ICustomScreenProps {
    // setStep: Dispatch<SetStateAction<"Company" | "Login">>;
}

const CustomScreen: FunctionComponent<ICustomScreenProps> = () => {
    const [input, setInput] = useState<string>("");
    const [step, setStep] = useState<"Company" | "Login">("Company");

    if (step === "Company")
        return (
            <div className="flex flex-col gap-4">
                <div>
                    <label htmlFor="company" className="block text-sm font-medium leading-6 text-gray-900">
                        Байгууллагын нэр
                    </label>
                    <div className="mt-2">
                        <Input
                            id="company"
                            name="company"
                            type="company"
                            autoComplete="company"
                            required
                            onChange={(e) => setInput(e.target.value)}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <Button className="rounded-full" type="primary" block disabled={input.length === 0} onClick={() => setStep("Login")}>
                    Нэвтрэх
                </Button>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Байгууллага тань олдохгүй байна уу?{" "}
                    <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Бид тусалъя
                    </a>
                </p>
            </div>
        );
    else {
        return (
            <div className="flex flex-col gap-4">
                <div>
                    <div className="mt-2 flex flex-col gap-4">
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            placeholder="И-мэйл хаяг"
                            required
                            onChange={(e) => setInput(e.target.value)}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="password"
                            placeholder="Нууц үг"
                            required
                            onChange={(e) => setInput(e.target.value)}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        <Checkbox>Намайг сана</Checkbox>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Button type="primary" className="w-40 rounded-full" disabled={input.length === 0} onClick={() => setStep("Login")}>
                        Нэвтрэх
                    </Button>
                </div>

                <p className="mt-20 underline text-center text-sm text-gray-500">
                    <a href="#">Холбоо барих</a>
                </p>
            </div>
        );
    }
};

export default function Home() {
    const [step, setStep] = useState<"Company" | "Login">("Company");
    const login = () => {
        console.log("login here");
    };
    const checkCompany = () => {
        console.log("login here");
    };
    return (
        <>
            <Head>
                <title>Login</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
                <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
            </Head>
            <main className="absolute flex items-center justify-center w-full h-full">
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <Logo wText />
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <CustomScreen />
                    </div>
                </div>
            </main>
        </>
    );
}
