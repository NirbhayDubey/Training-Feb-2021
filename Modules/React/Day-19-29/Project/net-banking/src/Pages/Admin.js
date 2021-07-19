import { React, useState, useEffect } from "react";
import ProjectService from "../Services/LoginService";
import {AiFillDelete} from 'react-icons/ai'
import { FaRupeeSign } from "react-icons/fa";

export const Admin = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    ProjectService.getAllUser().then((res) => {
      setData(res.data);
    });
  }, [data]);
  const Delete=(id)=>{
    ProjectService.AdminDelete({accountNo:id}).then((res)=>{
        console.log(res.data);
    })
  }
  return (
    <>
      <div className="container p-3 my-3">
      <div className=" text-center mt-5" style={{fontSize:"35px",backgroundColor:"#022e57 ",color:"#deeeea"}}>Admin Page</div>
        <h3 className="text-center mt-5">Customer Details</h3>
        <table className="table text-center mt-4">
          <tr className="border h5">
            <td className="border border-success">Name</td>
            <td className="border border-success">Account No</td>
            <td className="border border-success">Branch Name</td>
            <td className="border border-success">Balance</td>
            <td className="border border-success">Delete</td>
          </tr>
          <tbody className="mt-3 border">
            {data.map((item) => {
              return (
                <tr>
                  <td className="border border-success">
                    {item.fname} {item.mname} {item.lname}
                  </td>
                  <td className="border border-success">{item.accountNo}</td>
           
                  <td className="border border-success">       {item.branchName}</td>
           
                  <td className="p-2 border border-success">       {item.balance} <span className="h5">< FaRupeeSign/></span>  </td>
                  <td className="h3 border border-success" style={{cursor:"pointer"}} onClick={()=>Delete(item.accountNo)}><AiFillDelete/></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
