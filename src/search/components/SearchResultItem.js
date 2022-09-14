import React, { Component } from "react";
import { connect } from "react-redux";
import { getFormattedNumber, openGithub, timeForToday } from "../../common/functions";

/**
 * 검색결과 리스트의 객체
 */
export default class SearchResultItem extends Component {
    render() {
        const { item, _addRepository, _delRepository, isRegistered } = this.props;

        const { 
            id,
            full_name, 
            description, 
            stargazers_count, 
            language, 
            license, 
            updated_at, 
            topics,
            html_url, 
        } = item;

        const btnDesc = isRegistered ? '등록해제' : '등록';
        const btnClass = `btn btn-sm btn-outline-${isRegistered ? 'secondary' : 'primary'}`;
        const btnAction = isRegistered ? (name) => _delRepository(name) : (name, item) => _addRepository(item);

        return (
            <div className="card w-auto my-3" key={full_name}>
                <div className="card-body">
                    <h5 className="card-title" onClick={() => openGithub(html_url)}>{full_name}</h5>
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
                    <button type="button" className={btnClass} onClick={() => btnAction(full_name, item)}>{btnDesc}</button>
                </div>
            </div>
        )
    }
}
