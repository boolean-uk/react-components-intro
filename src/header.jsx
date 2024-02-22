import { TopLeftMenu } from "./topLeftMenu"
import { TopRightMenu } from "./topRightMenu"

export function Header() {
    return (
        <>
      <header>
        <TopLeftMenu />

        <TopRightMenu />
      </header>
        </>
    )
}
