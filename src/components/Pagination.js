import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.nav`
  text-align: center;
  margin-top: 20px;
`;

const LoadMoreButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const Pagination = ({ loading, loadMore }) => {
  return (
    <PaginationContainer>
      <LoadMoreButton onClick={loadMore} disabled={loading}>
        {loading ? 'Loading...' : 'Load More'}
      </LoadMoreButton>
    </PaginationContainer>
  );
};

export default Pagination;
