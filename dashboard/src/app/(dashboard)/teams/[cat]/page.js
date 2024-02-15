import TableTeams from '@/components/Tables/TableTeams'

const Page = ({params}) => {
    return (
        <main>
            <TableTeams
            categorie={params || "ALL"} />
        </main>
    )
}

export default Page
