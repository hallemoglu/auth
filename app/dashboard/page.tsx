import type { Metadata } from 'next/types';
import Card from "@/components/Dashboard/Card";

export const metadata: Metadata = {
    title: "Yönetim Paneli - Hızlı Bakış",
};

const Dashboard = () => {
    return (
        <>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
                <Card 
                    iconName={"Eye"}
                    iconColor={"#3498db"}
                    iconSize={24}
                    cardValue={"5.789k"}
                    cardText={"Toplam Görüntüleme"}
                    cardPercentage={0.43}
                    cardPercentageChangeIcon={"MoveUp"}
                    cardPercentageChangeIconColor={"#22c55e"}
                    cardPercentageChangeIconSize={12}
                />
                <Card 
                    iconName={"ShoppingCart"}
                    iconColor={"#3498db"}
                    iconSize={24}
                    cardValue={"348"}
                    cardText={"Toplam Sipariş"}
                    cardPercentage={0.22}
                    cardPercentageChangeIcon={"MoveUp"}
                    cardPercentageChangeIconColor={"#22c55e"}
                    cardPercentageChangeIconSize={12}
                />
                <Card 
                    iconName={"Boxes"}
                    iconColor={"#3498db"}
                    iconSize={24}
                    cardValue={"7.891"}
                    cardText={"Toplam Ürün"}
                    cardPercentage={0.10}
                    cardPercentageChangeIcon={"MoveUp"}
                    cardPercentageChangeIconColor={"#22c55e"}
                    cardPercentageChangeIconSize={12}
                />
                <Card 
                    iconName={"Users"}
                    iconColor={"#3498db"}
                    iconSize={24}
                    cardValue={"2.568"}
                    cardText={"Toplam Kullanıcı"}
                    cardPercentage={0.32}
                    cardPercentageChangeIcon={"MoveUp"}
                    cardPercentageChangeIconColor={"#22c55e"}
                    cardPercentageChangeIconSize={12}
                />
            </div>
        </>
    )
}

export default Dashboard;
