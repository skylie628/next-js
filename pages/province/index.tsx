import { GetStaticProps, GetStaticPropsContext } from "next";
import * as React from "react";

export interface postType {
  name: string;
  code: number;
  division_type: string;
  codename: string;
  phone_code: number;
  district: Array<number>;
}
export interface PostListPageProps {
  provinces: Array<postType>;
}
export default function PostListPage({ provinces }: PostListPageProps) {
  return (
    <ul>
      {provinces.map((province: postType) => (
        <li key={province.code}>{province.name}</li>
      ))}
    </ul>
  );
}
export const getStaticProps: GetStaticProps<PostListPageProps> = async (
  context: GetStaticPropsContext
) => {
  // server side
  // build time
  // => can read code server, query database, fetch api
  const response = await fetch("https://provinces.open-api.vn/api/");
  const data = await response.json();
  return {
    props: {
      provinces: data.map((province: postType) => ({
        code: province.code,
        name: province.name,
      })),
    },
  };
};
