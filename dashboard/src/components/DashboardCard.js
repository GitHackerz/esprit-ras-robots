"use client"
import React from "react";
import { Card, CardFooter, Image, Button, user } from "@nextui-org/react";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
const DashboardCard = ({
    title,
    total,
    children
}) => {
    const router = useRouter()
    return (
        <Card
        isPressable onPress={() => router.push("/teams/all")}
            isFooterBlurred
            radius="lg"
            className="border-none"
        >
            <Image
                alt="Woman listing to music"
                className="object-cover"
                src="/images/cards/autonome.png"

            />
            <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <h4 className="text-title-md font-bold text-black dark:text-white">
                    {total}
                </h4>   
            </CardFooter>
        </Card>
    );
}

export default DashboardCard