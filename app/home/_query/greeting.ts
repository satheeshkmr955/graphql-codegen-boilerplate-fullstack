import { graphql } from "@/gql/gql";

export const greeting = graphql(/* GraphQL */ `
  query greeting {
    greeting
  }
`);
