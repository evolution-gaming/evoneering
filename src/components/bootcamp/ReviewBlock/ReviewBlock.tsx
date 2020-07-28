import React, { useState } from "react";

import { getText } from "../utils/utils";
import { textContentItem } from "../utils/types";

import "./ReviewBlock.css";

interface ReviewBlockProps {
    header: string;
    reviews: textContentItem[];
    reviewImages: string[];
}

export const ReviewBlock: React.FC<ReviewBlockProps> = (props): JSX.Element => {

    const { header, reviews, reviewImages } = props;

    const [reviewActive, setReviewActive] = useState(0);

    const paragraphs: JSX.Element[] = [];
    const thumbnails: JSX.Element[] = [];
    const nameLabels: JSX.Element[] = [];



    const switchInc = () => {
        if (reviewActive < (reviews.length -1)) {

            const nextTab = reviewActive + 1;

            setReviewActive(nextTab);
        }
    }

    const switchDec = () => {
        if (reviewActive > 0) {

            const nextTab = reviewActive - 1;

            setReviewActive(nextTab);
        }
    }

    const getScore = () => {

        const score: JSX.Element[] = [];

        for(let i = 0; i < 5; i++){
            score.push(
                <div key={i} className="review-star"/>
            );
        }

        return score;
    }

    reviews.map((e) => {

        const switchSpec = () => {
            setReviewActive(e.id)
        }

        thumbnails.push(
            <div key={e.id}>
                <div onClick={switchSpec} className={`review-image ${reviewActive === e.id ? "review-image-active" : "review-image-passive"}`}  style={{backgroundImage: `url(${reviewImages[e.id]})`}}/>
            </div>
        );

        nameLabels.push(
            <div key={e.id} className={`${reviewActive === e.id ? "name-label-active" : "name-label-passive"}`}>
                {e.name}
                <div/>
            </div>
        );

        paragraphs.push(
            getText(reviews[e.id].text, "none", `review${e.id}`, `review-text ${reviewActive === e.id ? "review-text-active" : "review-text-passive"}`)
        );
    })

    return (
        <div className="review-wrapper" id={header}>
                        {props.children}
                {header && <div className="block-head">{header}</div>}
            <div className="review-content-wrapper">
                <div className="review-image-wrapper">
                    <div className="review-image-bar">
                        <div onClick={switchDec} className="review-arr-left"/>
                        {thumbnails}
                        <div onClick={switchInc} className="review-arr-right"/>
                        </div>
                    <div className="review-sub-bar">
                        {nameLabels}
                        <div className="review-score">
                            {getScore()}
                        </div>
                    </div>
                </div>
                <div className="review-text-wrapper">
                    {paragraphs}
                </div>
            </div>
            </div>
    );
}