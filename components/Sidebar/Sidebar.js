import Image from 'next/image'
import Menu from './Menu'
import nyanLogo from '../../public/nyan-logo.png'

const Sidebar = () => {
    return (
        <aside className="p-5 bg-gray-100 flex flex-col justify-start items-center">
            <Image
                src={nyanLogo}
                width={100}
                height={100}
                className="mb-12 cursor-pointer"
            />
            <Menu />
        </aside>
    )
}

export default Sidebar
