import Image from 'next/image'
import Menu from './Menu'
import nyanLogo from '../../public/nyan-logo.png'

const Sidebar = () => {
    return (
        <aside className="hidden lg:flex p-5 bg-gray-100 flex-col justify-start items-center sticky top-0 left-0 h-screen">
            <Image
                src={nyanLogo}
                width={100}
                height={100}
                className="mb-12 cursor-pointer"
                alt="Nyan logo"
            />
            <Menu />
        </aside>
    )
}

export default Sidebar
