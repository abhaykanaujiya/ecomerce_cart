import React from 'react';
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  handleAddToCart,
  handleIncrease,
  handleDecrease,
  handleDecreaseQuantity,
} from "../../action/pdpAction";
import ProductList from './ProductList';
import ReactPaginate from 'react-paginate';
const Main = () => {
    const [postsPerPage] = useState(5);
    const [offset, setOffset] = useState(1);
    const [posts, setAllPosts] = useState([]);
    const [pageCount, setPageCount] = useState(0);
  const [paginatedData, setPaginatedData] = useState([]);
  console.log(posts,"pos");
  //  const getPostData = (data) => {
  //    return data?.map((post) => (
  //      <div className="container" key={post.id}>
  //       <ProductList ps={post} />
  //      </div>
  //    ));
  //  };

  // const getAllPosts = (props) => {
  //  console.log(props.productList,"plp");
  //    const res = props.productList
  //    const data = res.data;
  //    const slice = data.slice(offset - 1, offset - 1 + postsPerPage);

  //    const postData = getPostData(slice);
  //    setAllPosts(postData);
  //    setPageCount(Math.ceil(data.length / postsPerPage));
  //  };

  //  const handlePageClick = (event) => {
  //    const selectedPage = event.selected;
  //    setOffset(selectedPage + 1);
  //  };

  //  useEffect(() => {
  //    getAllPosts();
  //  }, [offset]);
  return (
    <div>

      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );
}
function mapStateToProps({ PdpReducer }) {
  const { productList, cartItems } = PdpReducer;
  console.log(cartItems, "cartItem reducercers data");
  return {
    productList,
    cartItems,
  };
}

export default connect(mapStateToProps, {
 
  handleIncrease,
  handleDecrease,
  handleAddToCart,
  handleDecreaseQuantity,
})(Main);
