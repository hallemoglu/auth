import Icon from "@/components/Icon/Icon";

interface AlertProps {
    alertIcon: any;
    alertIconColor: any;
    alertTitle: string;
    alertMessage: string;
    alertCss: string;
}

const Alert: React.FC<AlertProps> = ({ alertIcon, alertIconColor, alertTitle, alertMessage, alertCss }) => {
    return(
        <div className={ "text-white p-6 mb-5 rounded-lg shadow-md " + alertCss }>
            <div className="flex">
                <Icon name={alertIcon} color={alertIconColor} size={64} className="inline" /> 
                <div className="flex items-center mx-4">
                    <div>
                        <h2 className="font-semibold text-sm">
                            { alertTitle }
                        </h2>
                        <p className="text-xs">{ alertMessage }</p>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Alert;