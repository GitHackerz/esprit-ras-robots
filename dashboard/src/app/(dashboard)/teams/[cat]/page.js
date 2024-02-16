import TableTeams from '@/components/Tables/TableTeams'

const Page = ({params}) => {
    return (
        <main>
            <TableTeams
            categorie={{currentKey : decodeURI(params.cat) || "ALL"}} />
        </main>
    )
}

export default Page
