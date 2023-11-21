import FilterNav from "@/components/FilterNav";
import React from "react";

type SearchParams = {
	searchParams?: {
		tags?: string[];
		ratings?: string;
		cuisine?: string;
		type?: string;
	};
};

export default function page({ searchParams }: SearchParams) {
  console.log(searchParams);
	return (
		<div className="h-screen pt-[140px]">
			<div className="container">
				<aside className="fixed h-full top-[140px] w-[250px] max-w-[250px]">
					<FilterNav />
				</aside>
				<div className="ps-[250px] h-full pt-14">
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
					<div>sdfads</div>
				</div>
			</div>
		</div>
	);
}
