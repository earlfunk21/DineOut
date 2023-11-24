"use client";
import React from "react";
import RestaurantImage from "@/assets/image/SampleRestaurant.png";
import RestaurantImage1 from "@/assets/image/SampleRestaurant1.jpg";
import RestaurantImage2 from "@/assets/image/SampleRestaurant2.jpg";
import Image from "next/image";
import { cn } from "@/lib/utils";

const images = [RestaurantImage, RestaurantImage1, RestaurantImage2];

export default function ImageContainer() {
	const [current, setCurrent] = React.useState(0);
	return (
		<div className="flex flex-col justify-between h-full gap-y-12 drop-shadow-md">
			<div className="relative flex-1 flex items-center overflow-hidden">
				<Image
					src={images[current]}
					alt="Restaurant Image"
					className="object-fill scale-125 w-full h-full blur-sm absolute transition-all ease-in-out duration-300"
				/>
				<Image
					src={images[current]}
					alt="Restaurant Image"
					className="object-scale-down rounded-lg w-full h-full z-10 transition-all ease-in-out duration-300 object-center"
				/>
			</div>

			<div className="flex justify-between">
				{images.map((image, i) => (
					<Image
						src={image}
						alt="Restaurant Image"
            key={i}
						className={cn(
							"object-cover rounded-lg cursor-pointer",
							i === current && "border-4 border-red-300 "
						)}
						width={144}
						height={144}
						onClick={() => setCurrent(i)}
					/>
				))}
			</div>
		</div>
	);
}
