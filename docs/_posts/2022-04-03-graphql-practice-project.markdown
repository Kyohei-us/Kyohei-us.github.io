---
layout: post
title: "GraphQL Practice Project"
date: 2022-04-03 12:30:00 -0800
categories: General
---

As a practice for GraphQL, React, Next.js, I created a simple Next.js project [link](https://github.com/Kyohei-us/anilist_express).

As of now, the project uses following npm packages:

- @apollo/client
- @graphql-codegen/cli
- @playlyfe/gql
- graphql
- graphql-tag (for autocomplete of gql literal in vscode)
- schema-ast (for generating schema file in .graphql format)
- @graphql-codegen/typescript (for generating schema file in .tsx format)
- @graphql-codegen/typescript-operations (for generating schema file in .tsx format)
- @graphql-codegen/typescript-react-apollo (for generating schema file in .tsx format)

Currently, this project only deals with query feature, and does not do any mutations. (For this project, I use a public API that allows GraphQL, but it requires Authentication for mutations. So, I'll work on mutations later.)