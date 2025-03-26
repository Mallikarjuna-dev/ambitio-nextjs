import Image from "next/image";
import React from "react";

const images = [
    "/images/p1.png",
    "/images/l1.png",
    "/images/p2.png",
    "/images/l2.png",
    "/images/p3.png",
    "/images/l3.png",
    "/images/p4.png",
    "/images/l4.png",
    "/images/p5.png",
    "/images/l5.png",
    "/images/p6.png",
    "/images/l6.png",
    "/images/p8.png",
    "/images/l7.png",
    // dupicates
];

const MarqueeRow = ({ images, reverse = false }) => (
    <div className={`flex w-[200%] ${reverse ? "animate-marqueeReverse" : "animate-marquee"} space-x-6`}>
        {[...images, ...images].map((src, index) => (
            <div key={index} className="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden bg-gray-200">
                <Image src={src} alt="logo" width={64} height={64} className="object-cover" />
            </div>
        ))}
    </div>
);

const Marquee = () => {
    return (
        <div className="relative w-full overflow-hidden py-8">
            <div className="space-y-6">
                <MarqueeRow images={images} reverse={false} />
                <MarqueeRow images={images} reverse={true} />
                <MarqueeRow images={images} reverse={false} />
            </div>
        </div>
    );
};

export default Marquee;
