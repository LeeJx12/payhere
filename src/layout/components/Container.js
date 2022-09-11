import React, { Component } from "react";
import { connect } from "react-redux";

class Container extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="overflow-auto h-50">
                <div className="card w-auto my-3">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary">Button</a>
                    </div>
                </div>
                <div className="card w-auto my-3">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary">Button</a>
                    </div>
                </div>
                <div className="card w-auto my-3">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary">Button</a>
                    </div>
                </div>
                <div className="card w-auto my-3">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary">Button</a>
                    </div>
                </div>
                <div className="card w-auto my-3">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary">Button</a>
                    </div>
                </div>
                <div className="card w-auto my-3">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary">Button</a>
                    </div>
                </div>

                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

function _mapStateToProps(state) {
    return {

    }
}

export default connect(_mapStateToProps)(Container);