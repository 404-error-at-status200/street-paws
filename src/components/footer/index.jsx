import React from "react";
import VetPic from "../../assets/default-vet.jpg";
import ClosestVet from "./closestvets";

export default function Main() {
  const vets = [
    { name: "Vet 1", phone: "1234567899", email: "vet1@gmail.com" },
    { name: "Vet 2", phone: "1234567899", email: "vet1@gmail.com" },
    { name: "Vet 3", phone: "1234567899", email: "vet1@gmail.com" },
  ];
  return (
    <>
      <h2 className="font-bold text-xl mb-2 pt-5 px-5">Vets near you</h2>
      {vets.map((e, idx) => {
        return <ClosestVet name={e.name} email={e.email} phone={e.phone} key={idx}/>;
      })}
    </>
  );
}
