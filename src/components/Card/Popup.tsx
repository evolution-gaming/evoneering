import React from "react";

interface PopupProps {
    onClose: () => void;
    children: any;
}

export class Popup extends React.PureComponent<PopupProps> {
    lockPos: {
        x: number;
        y: number;
    } = {x: 0, y: 0};

    onScroll = () => {
        window.scrollTo(this.lockPos.x, this.lockPos.y);
    }
    componentDidMount() {
        this.lockPos.x = window.scrollX;
        this.lockPos.y = window.scrollY;
        window.addEventListener("scroll", this.onScroll);
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.onScroll);
    }

    render() {
        const {onClose, children} = this.props;

        return (
            <div onClick={onClose} className="popup">
                {children}
            </div>
        );
    }
}
