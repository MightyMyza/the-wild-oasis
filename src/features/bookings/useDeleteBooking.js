import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as apiDeleteBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate: deleteBooking, isLoading: isDeletingBooking } = useMutation({
    mutationFn: apiDeleteBooking,

    onSuccess: () => {
      toast.success(`Booking has successfully been deleted`);

      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },

    onError: () => toast.error(`There was an error deleting booking`),
  });

  return { deleteBooking, isDeletingBooking };
}
