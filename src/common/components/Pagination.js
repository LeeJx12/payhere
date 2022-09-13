import React, { Component } from "react";

export class Pagination extends Component {
    render() {
        let {
            pageId,
            totalPage,
            isSimple = false,
        } = this.props;

        pageId = Number(pageId);
        totalPage = Number(totalPage);

        let prevBtnNo = -1;
        let nextBtnNo = totalPage + 1;
        let pageList = [];

        if (isSimple) {
            prevBtnNo = pageId - 1;
            nextBtnNo = pageId + 1;
        } else {
            if (pageId === 1) {
                pageList = [1, 2, 3];
                nextBtnNo = 4;
            } else if (pageId === totalPage) {
                pageList = [totalPage-2, totalPage-1, totalPage];
                prevBtnNo = totalPage-3;
            } else {
                if (pageId > 1) pageList.push(pageId - 1);
                pageList.push(pageId);
                if (pageId < totalPage) pageList.push(pageId + 1);
    
                prevBtnNo = pageId - 2;
                nextBtnNo = pageId + 2;
            }
        }

        const isPrevBtnShow = prevBtnNo > 0;
        const isNextBtnShow = nextBtnNo <= totalPage;

        return (
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    { isPrevBtnShow && 
                        <li className="page-item"><a className="page-link" href="#" onClick={this.eventHandler} id={prevBtnNo}>Prev</a></li>
                    }
                    {
                        pageList.map(_pageId => {
                            const className = `page-item ${pageId === _pageId ? 'active' : ''}`;
                            return (
                                <li className={className} key={_pageId}><a className="page-link" href="#" onClick={this.eventHandler} id={_pageId}>{_pageId}</a></li>
                            )
                        })
                    }
                    {
                        isNextBtnShow &&
                        <li className="page-item"><a className="page-link" href="#" onClick={this.eventHandler} id={nextBtnNo}>Next</a></li>
                    }
                </ul>
            </nav>
        )
    }

    eventHandler = e => {
        const { pageAction } = this.props;

        pageAction(e.target.id);
    }
}