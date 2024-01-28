import { Spinner } from '@nextui-org/react'

const TimeCard = ({ unit }) => (
    <div className="flex flex-col ">
        <div className="text-white md:text-6xl text-4xl font-bold h-24 flex items-center justify-center">
            <Spinner color="white" />
        </div>
        <div className="text-white md:text-3xl text-xl flex-grow flex items-center justify-center">
            {unit}
        </div>
    </div>
)
const Loading = () => {
    return (
        <div className="flex flex-row flex-wrap items-center md:gap-20 gap-10">
            <TimeCard unit="Days" />
            <TimeCard unit="Hours" />
            <TimeCard unit="Minutes" />
            <TimeCard unit="Seconds" />
        </div>
    )
}

export default Loading
