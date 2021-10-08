import React, { useState } from 'react';
import JsonData from "../componenets/MOCK_DATA.json";
import ReactPaginate from 'react-paginate';
const Portfolio = () => {
    const [users, setUsers] = useState(JsonData.slice(0, 16));
    const [pageNumber, setPageNumber] = useState(0)
    const usersPerPage = 2
    const pagesVisited = pageNumber * usersPerPage
    const displayUsers = users.slice(pagesVisited, pagesVisited + usersPerPage).map((user) => {
        return (
            <div className="proyect">
                <img src={user.img} alt="" />
                <div>
                <a href={user.link} target="_blank"> <h2>{user.proyect_name}</h2></a>
                </div>
            </div>
        );
    });
    const pageCount = Math.ceil(users.length / usersPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };
    return (
        <div className="portfolio">
            <h2>PORTFOLIO</h2>
            <div className="proyectdiv ">
                {displayUsers}
            </div>
            <div className="pagdiv">
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousClassName={"previousBttn"}
                    nextLinkClassName={"nectBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActi"}
                />
            </div>
        </div>
    )
}

export default Portfolio
