import RightMenuApps from "./RightMenuApps";
import RightMenuAvatar from "./RightMenuAvatar";

function RightMenuList() {
    return (
        <ul>
            <li>Gmail</li>
            <li>Images</li>
            <li>
                <RightMenuApps />
            </li>
            <li>
                <RightMenuAvatar />
            </li>
        </ul>
    );
}

export default RightMenuList