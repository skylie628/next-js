import React, { useState } from "react";
import { useEffect } from "react";
//import Header from "@/components/common/header";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/common/header"), {
  ssr: false,
});
//not render Header in render, just render in client
export default function About() {
  const router = useRouter();
  const [province, setProvince] = useState<any>([]);
  const pid = router.query?.pid || 1;
  const handleOnClick = () => {
    router.push(
      {
        pathname: "/about",
        query: {
          pid: (Number(pid) || 1) + 1,
        },
      },
      undefined,
      {
        shallow: true,
      }
    );
  };
  useEffect(() => {
    if (!pid) {
      return;
    }
    fetch(`https://provinces.open-api.vn/api/p/${pid || 1}`)
      .then((rs) => rs.json())
      .then((rs) => setProvince(rs));
  }, [pid]);
  return (
    <>
      <Header />
      <div>
        <h1>List of province</h1>
        <p>{province.name}</p>
        <p>{province.code}</p>
        <button onClick={handleOnClick}>Next page</button>
      </div>
    </>
  );
}
export async function getServerSideProps() {
  return {
    props: {},
  };
}
