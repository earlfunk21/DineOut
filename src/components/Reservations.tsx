"use client";
import { cancelReservation, getReservationsByUser } from "@/app/action";
import Pagination from "@/components/Pagination";
import RestaurantCard from "@/components/RestaurantCard";
import useAuth from "@/components/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { toast } from "@/components/ui/use-toast";
import { format } from "date-fns";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function Reservations() {
	const { user, isLoading } = useAuth();
	const searchParams = useSearchParams();
	const [reservations, setReservations] = React.useState<Reservation[]>([]);
	const [totalPages, setTotalPages] = React.useState(0);
	const page = Number(searchParams.get("page")) || 1;
	const { push } = useRouter();
	const pathName = usePathname();

	React.useEffect(() => {
		if (!isLoading) {
			const fetchReservations = async () => {
				const paginated: PaginatedReservation = await getReservationsByUser(
					user.userDetails?.id,
					page - 1
				);
				setReservations(paginated.content);
				setTotalPages(paginated.totalPages);
			};
			fetchReservations();
		}
	}, [isLoading, user.userDetails?.id, page, reservations]);

	const getStatus = (status: string, date: number) => {
		const currentTimestamp = Date.now();
		if (status === "ONGOING" && currentTimestamp < date) {
			return "Ongoing";
		} else if (status === "ONGOING" && currentTimestamp >= date) {
			return "Success";
		} else {
			return "Cancelled";
		}
	};

	const handleCancelReservation = async (reservationId: number) => {
		await cancelReservation(reservationId);
		toast({
			title: "Successfully cancelled",
			description: "Your reservation has been cancelled.",
			variant: "success",
			action: (
				<ToastAction
					altText="Success"
					className="bg-red-500 text-white hover:bg-red-400 px-5">
					THANKS
				</ToastAction>
			),
		});
	};

	return (
		<>
			<div className="flex flex-col gap-y-4">
				{reservations.map(reservation => (
					<div className="grid grid-cols-4">
						<Link href={`/restaurant/${reservation.restaurant.id}`} key={reservation.id}>
							<RestaurantCard
								className="col-span-1"
								image={reservation.restaurant.images[0]}
								name={reservation.restaurant.name}
								location={reservation.restaurant.address}
								ratings={
									reservation.restaurant.ratings !== 0
										? reservation.restaurant.ratings
										: 5
								}
							/>
						</Link>
						<div className="col-span-2 flex flex-col justify-center">
							<p className="font-medium">
								Reservation Date:{" "}
								{format(reservation.reservationDate, "LLLL dd, yyyy")}
							</p>
							<p className="font-medium">
								Reservation Time: {reservation.reservationTime}
							</p>
							<p className="font-medium">
								Guest Count: {reservation.countPeople}
							</p>
							<p className="font-medium">
								Reservation Status:
								<span>
									{" "}
									{getStatus(reservation.status, reservation.reservationDate)}
								</span>
							</p>
							<p className="font-medium">
								Note:
								<span> {reservation.note}</span>
							</p>
						</div>
						<div className="col-span-1 flex items-center">
							{getStatus(reservation.status, reservation.reservationDate) ===
								"Ongoing" && (
								<Button
									variant="primary"
									onClick={() => handleCancelReservation(reservation.id)}>
									Cancel Reservation
								</Button>
							)}
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
