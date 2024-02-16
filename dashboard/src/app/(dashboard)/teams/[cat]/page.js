import TableTeams from '@/components/Tables/TableTeams'

const Page = ({params}) => {
    console.log(params)
    return (
        <main>
            <TableTeams
            categorie={{currentKey : decodeURI(params.cat) || "ALL"}} />
        </main>
    )
}

export default Page
