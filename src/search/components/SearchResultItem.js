import React, { Component } from "react";
import { connect } from "react-redux";
import { getFormattedNumber, timeForToday } from "../../common/functions";


export default class SearchResultItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { item } = this.props;

        const { 
            full_name, 
            description, 
            stargazers_count, 
            language, 
            license, 
            updated_at, 
            topics 
        } = item;

        return (
            <div className="card w-auto my-3">
                <div className="card-body">
                    <h5 className="card-title">{full_name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{description}</h6>
                    { topics && topics.length > 0 &&
                        <h6>
                            {
                                topics.map(topic => <span className="badge bg-secondary mx-1" key={topic}>{topic}</span>)
                            }
                        </h6>
                    }
                    <p className="card-text">
                        <span className="badge bg-primary mx-1">
                            <img src="/public/icons/star.svg"/> {getFormattedNumber(stargazers_count)}
                        </span>
                        <span className="badge bg-primary mx-1">
                            {language}
                        </span>
                        { license && 
                        <span className="badge bg-primary mx-1">
                            {license?.name}
                        </span>
                        }
                        <span className="badge bg-primary mx-1">
                            {timeForToday(updated_at)}
                        </span>
                    </p>
                    <button type="button" className="btn btn-outline-primary btn-sm">등록</button>
                </div>
            </div>
        )
    }
}
