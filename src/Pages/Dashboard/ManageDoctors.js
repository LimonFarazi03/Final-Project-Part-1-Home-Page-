import React from 'react';
import { useQuery } from 'react-query'
import { toast } from 'react-toastify';
import loadingSpinner from "../../assets/images/loadingSpinner2.gif";
import person from "../../assets/images/people1.png";


const ManageDoctors = () => {

  const { isLoading, error, data:doctors,refetch } = useQuery('doctors', () =>
     fetch('https://protected-ocean-34758.herokuapp.com/doctor').then(res =>
       res.json()
     )
   );
   const handleDocDelete = (email) =>{
    //  console.log(email)
      const accept = window.confirm('Are you want to delete');
      if(accept){
        fetch(`https://protected-ocean-34758.herokuapp.com/doctor/${email}`,{
        method: 'DELETE'
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if(data.deletedCount){
          toast.success(`Successfully Deleted`)
        }
      })
      }else{
        toast('Canceled by user')
      }
   }
   if (isLoading) {
    return (
      <div className="flex h-screen justify-center items-center">
        <img src={loadingSpinner} alt="loading" />
      </div>
    );
  }
  return (
    <div>
      <h2 className="text-center font-bold mb-4 text-3xl">Manage Doctor's</h2>
      <div class="overflow-x-auto w-full">
  <table class="table w-full">
    <thead>
      <tr>
        <th>SL no.</th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        doctors.map( (doctor,index) => <tr>
          <th>
          <button class="btn btn-ghost btn-xs">{index+1}</button>
        </th>
        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img src={doctor.img}  alt="doctor-img"/>
              </div>
            </div>
            <div>
              <div class="font-bold">{doctor.name}</div>
              <div class="text-sm opacity-50">Uttara Dhaka</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br/>
          <span class="badge badge-ghost badge-sm">{doctor.specialty}</span>
        </td>
        <td>Purple</td>
        <th>
          <button onClick={()=>handleDocDelete(doctor.email)} class="btn btn-xs btn-error text-white">Delete</button>
        </th>
      </tr>
        
        )
      }
    </tbody>
  </table>
</div>
    </div>
  );
};

export default ManageDoctors;