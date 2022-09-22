import React, { useState } from "react";
import { useParams } from "react-router-dom";
export default function News(props) {
  console.log(props);
  let { name } = useParams();
  console.log(name);
  return <div className="p-10">123</div>;
}
