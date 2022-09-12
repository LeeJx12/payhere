import React, { Component } from "react";
import { openGithub, timeForToday } from "../../common/functions";

export class IssueListItem extends Component {
    render() {
        const { item } = this.props;
        const {
            id,
            html_url,
            title,
            body,
            user,
            comments,
            updated_at,
            repo_name
        } = item;

        return (
            <div className="card w-auto my-3" key={id}>
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">{repo_name}</h6>
                    <h5 className="card-title" onClick={() => openGithub(html_url)}>{title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{body}</h6>
                    <p className="card-text">
                        <span className="badge bg-primary mx-1">
                            {user.login}
                        </span>
                        <span className="badge bg-primary mx-1">
                            {timeForToday(updated_at)}
                        </span>
                        { comments !== '0' && 
                        <span className="badge bg-primary mx-1">
                            {`${comments} comments`}
                        </span>
                        }
                    </p>
                </div>
            </div>
        )
    }
}

