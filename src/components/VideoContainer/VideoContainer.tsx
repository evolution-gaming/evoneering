import React from "react";
import "./VideoContainer.css";

const videos = [
    "https://www.youtube.com/embed/wZZ7oFKsKzY",
    "https://www.youtube.com/embed/Zq4xtzBzdm4",
    "https://www.youtube.com/embed/id-M2S5JyC8",
    "https://www.youtube.com/embed/oliJICB3Dkw",
]

interface PopupProps {
    onClose: () => void;
    children: any;
}

const Popup = ({onClose, children}: PopupProps) =>
    <div onClick={onClose} className="popup">
        {children}
    </div>

interface VideoProps {
    src: string;
}

const YoutubeVideo = ({src}: VideoProps) =>
    <iframe
        width="100%"
        height="100%"
        src={src}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
    ></iframe>

interface VideoContainerState {
    activeVideo?: string,
}

export class VideoContainer extends React.PureComponent<{}, VideoContainerState> {
    state: VideoContainerState = {}

    public render() {
        const { activeVideo } = this.state;

        return (
            <div className="videoContainer">
                <div className="contentContainer">
                    <div className="slogan">
                        Our conference talks
                    </div>

                    {videos.map(video =>
                        <div 
                            className="videoItem"
                            onClick={() => this.setState({activeVideo: video})}
                        >
                            <YoutubeVideo src={video} />
                        </div>
                    )}
                </div>

                {activeVideo &&
                    <Popup onClose={() => this.setState({activeVideo: undefined})}>
                        <YoutubeVideo src={activeVideo}/>
                    </Popup>}
            </div>
        )
    }
}
