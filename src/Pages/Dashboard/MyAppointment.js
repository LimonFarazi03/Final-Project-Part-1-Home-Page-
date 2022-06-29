import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import loadingSpinner from '../../assets/images/loadingSpinner2.gif';

const MyAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if(user){
      fetch(`https://protected-ocean-34758.herokuapp.com/booking?patientEmail=${user.email}`, {
        method: 'GET',
      })
      .then((res) => res.json())
      .then((data) => setAppointments(data));
    }
  }, [user]);

  if (loading) {
    return (
      <div className="flex h-screen justify-center items-center">
        <img src={loadingSpinner} alt="loading spinner" />
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-center text-3xl font-bold mb-4">
        My Appointments: {appointments.length}
      </h1>

      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>SL no.</th>
              <th>Patient Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time Slot</th>
            </tr>
          </thead>
          <tbody>
          {
            appointments.map((appointment,index) =>
             <tr class="hover">
              <td>{index+1}</td>
              <td>{appointment.patientName}</td>
              <td>{appointment.treatmentName}</td>
              <td>{appointment.date}</td>
              <td>{appointment.slot}</td>
            </tr>
            )
          }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
