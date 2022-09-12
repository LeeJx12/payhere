import React, { Component } from "react";
import { connect } from "react-redux";
import { onSearch } from '../actions';
import { LIST_COUNT_DEFAULT } from '../../common/constants';

class Pagination extends Component {
    render() {
        const {
            _page,
            _pageList,
            _isPrevBtnShow,
            _isNextBtnShow,
            _prevBtnNo,
            _nextBtnNo
        } = this.props;

        return (
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    { _isPrevBtnShow && 
                        <li className="page-item"><a className="page-link" href="#" onClick={this.eventHandler} id={_prevBtnNo}>Prev</a></li>
                    }
                    {
                        _pageList.map(pageId => {
                            const className = `page-item ${pageId === _page ? 'active' : ''}`;
                            return (
                                <li className={className} key={pageId}><a className="page-link" href="#" onClick={this.eventHandler} id={pageId}>{pageId}</a></li>
                            )
                        })
                    }
                    {
                        _isNextBtnShow &&
                        <li className="page-item"><a className="page-link" href="#" onClick={this.eventHandler} id={_nextBtnNo}>Next</a></li>
                    }
                </ul>
            </nav>
        )
    }

    eventHandler = e => {
        const pageId = e.target.id;
        const { _keyword, _onSearch } = this.props;

        _onSearch(_keyword, pageId);
    }
}

function _mapStateToProps(state) {
    const stateFul = state['test/payhere/search'];
    let { searchResult, keyword, page } = stateFul;
    const totalCnt = searchResult.data.total_count;
    const pageCnt = Math.ceil(totalCnt / LIST_COUNT_DEFAULT);

    page = Number(page);

    let pageList = [];
    let isPrevBtnShow = false;
    let isNextBtnShow = false;
    let prevBtnNo = -1;
    let nextBtnNo = -1;

    if (page < 2) {
        pageList = [1, 2, 3];
    } else if (page > pageCnt - 2) {
        pageList = [pageCnt - 2, pageCnt - 1, pageCnt];
    } else {
        pageList = [page - 1, page, page + 1];
    }
    
    if (page > 2) {
        isPrevBtnShow = true;
        prevBtnNo = pageList[0] - 1;
    }
    if (page < pageCnt - 2) {
        isNextBtnShow = true;
        nextBtnNo = pageList[pageList.length-1] + 1;
    }
    
    return {
        _keyword: keyword,
        _page: page,
        _pageList: pageList,
        _isPrevBtnShow: isPrevBtnShow,
        _isNextBtnShow: isNextBtnShow,
        _prevBtnNo: prevBtnNo,
        _nextBtnNo: nextBtnNo
    }
}

function _mapDispatchToProps(dispatch) {
    return {
        _onSearch: (keyword, page) => {
            dispatch(onSearch(keyword, page));
        }
    }
}

export default connect(_mapStateToProps, _mapDispatchToProps)(Pagination);