import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@/components/Icon/Icon";

const SidebarMenu = (props: {url: string, icon: string, name: string}) => {
    const pathname = usePathname();
    return (
        <li className="mb-2">
          <Link 
            href={props.url} 
            className={`group relative flex items-center gap-2.5 rounded-md py-3 px-4 text-gray-200 duration-300 ease-in-out hover:bg-gray-800 hover:text-white
            ${pathname.includes(props.url) && "bg-gray-800 text-white" }`}
          >
            <Icon name={props.icon} color={"#f1f1f1"} size={20} />
            {props.name}
          </Link>
        </li>
    )
}

export default SidebarMenu;