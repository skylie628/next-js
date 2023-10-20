import { GetStaticProps, GetStaticPropsContext, GetStaticPaths } from "next";
import { useRouter } from "next/router";
export default function ProvinceDetailPage(props: any) {
  const router = useRouter();
  console.log(props);
  return (
    <div>
      <h1>Post Detail Page</h1>
      <div>{props.provinces.name}</div>
      <div>{props.provinces.codename}</div>
    </div>
  );
}
export const getStaticPaths: GetStaticPaths = async () => {
  //generate multiple file in advance during build time
  const rst = await fetch("https://provinces.open-api.vn/api/p/");
  const data = await rst.json();
  return {
    paths: data.map((province: any) => ({
      params: {
        provinceId: province.code.toString(),
      },
    })),
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps<any> = async (
  context: GetStaticPropsContext
) => {
  // server side
  // build time
  // => can read code server, query database, fetch api
  const province_id = context?.params?.provinceId;
  const data = await fetch(
    `https://provinces.open-api.vn/api/p/${province_id}`
  ).then((rs) => rs.json());
  return {
    props: {
      provinces: data,
    },
  };
};
