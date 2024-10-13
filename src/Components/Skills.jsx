"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "./ui/animated-beam";
import akashLogo from '../assets/akashLogo.png'
import { FaCss3, FaNodeJs, FaReact } from "react-icons/fa6";
import { LiaReact } from "react-icons/lia";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandRedux } from "react-icons/tb";

const Circle = forwardRef(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-[0.7rem] shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
                className
            )}
        >
            {children}
        </div>
    );
});

Circle.displayName = "Circle";

export default function Skills() {
    const containerRef = useRef(null);
    const div1Ref = useRef(null);
    const div2Ref = useRef(null);
    const div3Ref = useRef(null);
    const div4Ref = useRef(null);
    const div5Ref = useRef(null);
    const div6Ref = useRef(null);
    const div7Ref = useRef(null);
    const div8Ref = useRef(null);
    const div9Ref = useRef(null);
    const div10Ref = useRef(null);
    const div11Ref = useRef(null);

    return (
        <div
            className="relative flex h-[30rem] items-center justify-center w-full p-10 overflow-hidden"
            ref={containerRef}
        >
            <div className="flex flex-col justify-between max-w-[60rem] gap-8  size-full">
                <div className="relative flex flex-col gap-8 top-[3.5rem]">
                    <div className="flex flex-row items-center justify-between">
                        <Circle ref={div1Ref}>
                            <Icons.javascript />
                        </Circle>
                        <Circle ref={div5Ref}>
                            <Icons.react />
                        </Circle>
                    </div>
                    <div className="flex flex-row items-center justify-between ">
                        <Circle ref={div8Ref}>
                            <Icons.tailwindCSS />
                        </Circle>
                        <Circle ref={div10Ref}>
                            <Icons.redux />
                        </Circle>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-center">
                    {/* <Circle ref={div2Ref}>
                        <Icons.react />
                    </Circle> */}
                    <Circle ref={div4Ref} className="size-16">
                        <Icons.logo />
                    </Circle>
                    {/* <Circle ref={div6Ref}>
                        <Icons.nodejs />
                    </Circle> */}
                </div>
                <div className="relative flex flex-col gap-8 bottom-[3.4rem]">
                    <div className="flex flex-row items-center justify-between ">
                        <Circle ref={div3Ref}>
                            <Icons.nodejs />
                        </Circle>
                        <Circle ref={div7Ref}>
                            <Icons.express />
                        </Circle>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <Circle ref={div9Ref}>
                            <Icons.mongoDB />
                        </Circle>
                        <Circle ref={div11Ref}>
                            <Icons.CSS />
                        </Circle>
                    </div>
                </div>
            </div>

            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div1Ref}
                toRef={div4Ref}
                curvature={-75}
                endYOffset={-1}
            />
            {/* <AnimatedBeam
                containerRef={containerRef}
                fromRef={div2Ref}
                toRef={div4Ref}
            /> */}
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div8Ref}
                toRef={div4Ref}
                curvature={-25}
                endYOffset={-1}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div10Ref}
                toRef={div4Ref}
                curvature={-25}
                endYOffset={-1}
            />

            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div3Ref}
                toRef={div4Ref}
                curvature={15}
                endYOffset={1}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div5Ref}
                toRef={div4Ref}
                curvature={-75}
                endYOffset={-10}
                reverse
            />
            {/* <AnimatedBeam
                containerRef={containerRef}
                fromRef={div6Ref}
                toRef={div4Ref}
                reverse
            /> */}
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div7Ref}
                toRef={div4Ref}
                curvature={15}
                endYOffset={1}
                reverse
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div9Ref}
                toRef={div4Ref}
                curvature={75}
                endYOffset={10}
                reverse
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div11Ref}
                toRef={div4Ref}
                curvature={75}
                endYOffset={10}
                reverse
            />
        </div>
    );
}

const Icons = {
    react: () => (
        <FaReact className="text-[#1ea3dc] text-[15rem]" />
    ),
    logo: () => (
        <img src={akashLogo} alt="" />
    ),
    tailwindCSS: () => (
        <SiTailwindcss className="text-[#38BDF8] text-[15rem]" />
    ),
    express: () => (
        <SiExpress className="text-[#333333] text-[15rem]" />
    ),
    javascript: () => (
        <IoLogoJavascript className="text-[#ff9e1e] text-[15rem]" />
    ),
    nodejs: () => (
        <FaNodeJs className="text-[#60A05B] text-[15rem]" />
    ),
    redux: () => (
        <TbBrandRedux className="text-[#9c40ff] text-[15rem]" />
    ),
    mongoDB: () => (
        <SiMongodb className="text-[#001E2B] text-[15rem]" />
    ),
    CSS: () => (
        <FaCss3 className="text-[#2D53E5] text-[15rem]" />
    ),
};
