"use client";

import { GreetingDocument } from "@/gql/graphql";
import { useGraphQL } from "@/hooks/use-graphql";

const HomePage = () => {
  const { data } = useGraphQL(GreetingDocument);
  return <div>{data?.data?.greeting}</div>;
};

export default HomePage;
