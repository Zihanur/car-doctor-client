import { useContext, useEffect, useState } from "react";
import { AuthContect } from "../../Providers/AuthProvider";
import BookingItemRows from "./BookingItemRows";
import { useNavigate } from "react-router-dom";

const BookingItems = () => {
  const { user } = useContext(AuthContect);
  const [bookingItems, setBookingItems] = useState([]);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const proced = confirm("are you sure delete!");
    if (proced) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Delete successfully");
            const remaining = bookingItems.filter((b) => b._id !== id);
            setBookingItems(remaining);
          }
        });
    }
  };

  const handleBookingConfirm = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = bookingItems.filter((b) => b._id !== id);
          const updated = bookingItems.find((b) => b._id == id);
          updated.status = "confirm";
          const newBooking = [updated, ...remaining];
          setBookingItems(newBooking);
        }
      });
  };

  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("car-access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          //set booking if not error
          setBookingItems(data);
        } else {
          //home pathai dibo token na match hole
          navigate("/");
        }
      });
  }, [url, navigate]);

  return (
    <div>
      <h1>My Booking Item: {bookingItems.length}</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Photo</th>
              <th>Name</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookingItems.map((row) => (
              <BookingItemRows
                key={row._id}
                row={row}
                handleDelete={handleDelete}
                handleBookingConfirm={handleBookingConfirm}
              ></BookingItemRows>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingItems;
