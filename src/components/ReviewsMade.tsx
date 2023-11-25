"use client";
import { getReviewsByUserId } from "@/app/action";
import Pagination from "@/components/Pagination";
import useAuth from "@/components/hooks/useAuth";
import { useSearchParams } from "next/navigation";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn, timeAgo } from "@/lib/utils";
import { MdOutlineStar } from "react-icons/md";

export default function ReviewsMade() {
  const { user, isLoading } = useAuth();
  const searchParams = useSearchParams();
  const [reviews, setReviews] = React.useState<Review[]>([]);
  const [totalPages, setTotalPages] = React.useState(0);
  const page = Number(searchParams.get("page")) || 1;

  React.useEffect(() => {
    if (!isLoading) {
      const fetchReviewsPaginated = async () => {
        const paginated: PaginatedReviews = await getReviewsByUserId(
          user.userDetails?.id,
          page - 1
        );
        setReviews(paginated.content);
        setTotalPages(paginated.totalPages);
      };
      fetchReviewsPaginated();
    }
  }, [isLoading, user.userDetails?.id, page]);

  if (isLoading) {
    return "loading...";
  }
  
	return (
		<>
			<div className="flex flex-col gap-y-4">
				{reviews.map(review => (
					<div className="grid grid-cols-5 gap-x-2">
						<div
							className="flex flex-col bg-white p-4 rounded-lg gap-y-2 col-span-4"
							key={review.id}>
							<div className="flex justify-between">
								<div className="flex gap-x-4">
									<Avatar className="h-12 w-12">
										<AvatarImage
											src={
												review?.user.image
													? `http://localhost:8080/api/images/${review.user.image}`
													: `https://ui-avatars.com/api/?background=random&name=${review.user.name}`
											}
											alt="Profile Picture"
										/>
										<AvatarFallback>{review.user.name}</AvatarFallback>
									</Avatar>
									<div className="flex flex-col justify-evenly">
										<h6>@{review.user.username}</h6>
										<p className="text-sm">{timeAgo(review.date)}</p>
									</div>
								</div>
								<div className="flex justify-evenly pt-3 gap-x-2">
									{Array.from({ length: 5 }).map((_, i) => (
										<MdOutlineStar
											key={i}
											className={cn(
												"w-5 h-5 text-red-500",
												i >= review.rating && "text-gray-400"
											)}
										/>
									))}
								</div>
							</div>
							<p>{review.comment}</p>
						</div>
						<div className="flex flex-col col-span-1">
							<h1>{review.restaurant.name}</h1>
							<p className="text-gray-500 text-sm">
								{review.restaurant.address}
							</p>
						</div>
					</div>
				))}
			</div>
			<Pagination
				totalPages={totalPages}
				page={page}
			/>
		</>
	);
}
