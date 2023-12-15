import React from "react";
import Icon from "@/components/Icon/Icon";

const Card = (props: {
    iconName: string, 
    iconColor: string, 
    iconSize: number, 
    cardValue: string, 
    cardText: string,
    cardPercentage: number,
    cardPercentageChangeIcon: string,
    cardPercentageChangeIconColor: string,
    cardPercentageChangeIconSize: number
}) => {
    return (
        <div className="relative dashboard-card bg-white px-7 py-6 border border-gray-200 shadow-md rounded-md">
            <div className="absolute rounded-full px-2 py-2 border border-gray-200 bg-gray-100">
                <Icon name={props.iconName} color={props.iconColor} size={props.iconSize} />
            </div>
            <div className="mt-16">
                <span className="text-2xl font-semibold text-gray-800">{props.cardValue}</span>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="text-xs text-gray-800">
                    {props.cardText}
                </div>
                <div className="flex items-center justify-end">
                    <span className="text-green-500 text-xs">{props.cardPercentage} %</span>
                    <span className="text-green-500 text-xs ml-2">
                        <Icon name={props.cardPercentageChangeIcon} color={props.cardPercentageChangeIconColor} size={props.cardPercentageChangeIconSize} />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Card;