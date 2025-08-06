import classNames from 'classnames/bind';
import styles from './ManageLayout.module.scss'

const cx = classNames.bind(styles);

function ManageLayout({children}) {
    return ( 
        <div className="flex min-h-screen">
            {/* Sidebar: Danh sách chức năng quản lý */}
            <aside className="w-1/5 bg-gray-900 text-white p-4 h-screen overflow-y-auto">
                <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
                <nav>
                    <ul>
                        <li className="mb-2">
                            <a href="#" className="block p-2 rounded hover:bg-gray-700 transition-colors">
                                Dashboard
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="block p-2 rounded hover:bg-gray-700 transition-colors">
                                Quản lý người dùng
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="block p-2 rounded hover:bg-gray-700 transition-colors">
                                Quản lý sản phẩm
                            </a>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Main Content: Hiển thị thông tin quản lý */}
            <main className="w-4/5 p-6 bg-gray-100 flex flex-col h-screen">
                <div className="bg-white p-6 rounded-lg shadow-md h-full overflow-y-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}

export default ManageLayout;