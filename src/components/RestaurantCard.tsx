import Image from "next/image";
import React from "react";
import RestaurantImage from "@/assets/image/SampleRestaurant.png";
import { MdOutlineStar } from "react-icons/md";
import Link from "next/link";

type Props = {
  id: number;
	image: string;
	name: string;
	location: string;
	ratings: number;
};

export default function RestaurantCard({
  id,
	image,
	name,
	location,
	ratings,
}: Props) {
	return (
		<Link href={`/restaurant/${id}`}>
			<div className="flex flex-col gap-y-2 hover:drop-shadow-md p-4 rounded-md cursor-pointer bg-cornsilk-500">
				{
					<Image
						src={
							image
								? `http://localhost:8080/api/images/${image}`
								: RestaurantImage
						}
						alt="Restaurant Image"
						className="object-cover rounded-lg"
						width={208}
						height={144}
					/>
				}
				<h6 className="text-xl font-bold truncate">{name}</h6>
				<h6 className="text-gray-500 text-sm">{location}</h6>
				<div className="flex">
					{Array.from({ length: ratings }, (_, index) => (
						<MdOutlineStar
							key={index}
							className="text-yellow-500"
						/>
					))}
				</div>
			</div>
		</Link>
	);
}
