// import React from "react";
// import styled from "styled-components";

// const PaginationContainer = styled.nav`
//   background: #fffbeb;
//   text-align: center;
// `;

// const LoadMoreButton = styled.button`
//   font-family: "Just Me Again Down Here", cursive;
//   font-size: 32px;
//   color: black;
//   border: 1px solid black;
//   padding: 10px 20px;
//   border-radius: 10px;
//   margin: 40px 0px;
//   padding: 4px 20px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;
//   &:hover {
//     box-shadow: 0px 0px 10px #ff990066;
//   }
//   &:disabled {
//     //display: none;
//   }
// `;

// const Pagination = ({ loading, loadMore, hasMore }) => {
//   return (
//     <PaginationContainer>
//       <LoadMoreButton onClick={loadMore} disabled={loading && hasMore}>
//         {loading && hasMore ? "Loading..." : "Load More"}
//       </LoadMoreButton>
//     </PaginationContainer>
//   );
// };

// export default Pagination;
