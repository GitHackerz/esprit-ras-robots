import '../globals.css'
import '../data-tables-css.css'
import '../satoshi.css'

export default function RootLayout({ children }) {
    return (
        <section className="dark:bg-boxdark-2 dark:text-bodydark">
            <div className="flex justify-center items-center h-screen bg-body overflow-hidden mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                {children}
            </div>
        </section>
    )
}
