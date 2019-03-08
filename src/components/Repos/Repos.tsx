import * as React from "react";
import "./Repos.css";

const API_URL = "https://api.github.com/users/evolution-gaming/repos?page=1&per_page=4";

const getStarBadgeImageSrc = (full_name: string) => `https://img.shields.io/github/stars/${full_name}.svg?style=social`;

interface Repo {
    name: string;
    full_name: string;
    description: string;
}

interface ReposState {
    repos: Repo[];
}

export class Repos extends React.PureComponent<{}, ReposState> {
    state = { repos: [] };

    componentDidMount() {
        fetch(API_URL).then(async response => {
            const data = await response.json();

            const repos = data.map((repo: Repo) => ({
                name: repo.name,
                full_name: repo.full_name,
                description: repo.description,
            }));

            this.setState({ repos });
        });
    }

    render() {
        return this.state.repos.map(({ name, full_name, description }, i) => {
            return (
                <a key={i} href={`https://github.com/${full_name}`} target={"_blank"} className="RepoLink">
                    <div className="Repo">
                        <div className={"repoInfo"}>
                            <div className={"repoName"}>{name}</div>
                            <div className={"repoDescription"}>{description}</div>
                        </div>

                        <img src={getStarBadgeImageSrc(full_name)} />
                    </div>
                </a>
            );
        });
    }
}
